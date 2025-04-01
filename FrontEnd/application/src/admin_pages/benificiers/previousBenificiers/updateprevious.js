import { useState , useEffect } from "react";
import React from "react";
import "../../../pages/descoverAndProtection/donAndProt/DonProt.css";
import "../../Homepages/news/homepage.css";
import PreviousAdmin from "./previous";
import Next from "../../fleche/next";
import Previous from "../../fleche/previous";
import { PreviousBenifsApi } from "../../../api/previousBenif";
import { update } from "../../../utils/api.service";
import Validpopup from "../../../popups/adminPopup/popup";

function UpdatePrevious() {
    const [showAnotherComponent, setShowAnotherComponent] = useState(null);
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [formData, setFormData] = useState({
          id: "",
          previousName :"",
          previousDuration: "",
          previousAbout: "",
         
      });

    const [file, setFile] = useState()
    function handleUpdateFile(event) {
          setFile(event.target.files[0])
      }
    
    const handleClick = () => {
        setShowAnotherComponent(true);
      };
    
    const [PreviousBenifs, setPreviousBenifs] = useState([]);
          useEffect(() => {
          PreviousBenifsApi.getAllPreviousbenificiers().then((newPreviousBenifs) => {
            setPreviousBenifs(newPreviousBenifs);
            if (newPreviousBenifs.length > 0) {
                setFormData({
                  id: newPreviousBenifs[0].id,
                  previousName: newPreviousBenifs[0].name,
                  previousDuration: newPreviousBenifs[0].duration,
                  previousAbout : newPreviousBenifs[0].about,
                  // Set more fields accordingly
                });
              }
            });
         
        }, []);

    
        const handlePrevious = () => {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? PreviousBenifs.length - 1 : prevIndex - 1));
            updateFormData();
          };
        
        const handleNext = () => {
            setCurrentIndex((prevIndex) => (prevIndex === PreviousBenifs.length - 1 ? 0 : prevIndex + 1));
            updateFormData();
          };
        
        const updateFormData = () => {
            const previous = PreviousBenifs[currentIndex];
            console.log (currentIndex)
            setFormData({
              id: previous.id,
              previousName: previous.name,
              previousDuration: previous.duration,
              previousAbout: previous.about,

            });
          };
        
        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData((prevFormData) => ({
              ...prevFormData,
              [name]: value,
            }));
          };
        
          const handleSubmit = async (e) =>{
            e.preventDefault();
            const config = {
              headers: {
                'content-type': 'multipart/form-data',
              },
            };
    
            const fd = new FormData();
            fd.append('name', formData.previousName);
            fd.append('duration', formData.previousDuration);
            fd.append('about', formData.previousAbout);
            fd.append('file',file)
            const newsupdated = await update('/previousbenificier', fd,formData.id, config);
            setPopupOpen(true);
          };

          const closePopup = () => {
            setPopupOpen(false);
            setFormData({ previousName: '',id:'' });
           
            };

    return (
        <>
            {showAnotherComponent ? (
            <PreviousAdmin />
        ) : (
        <div className="container_admin_tools"> 
        <h1 className='section__news__title'>PRIVIOUS BENIFICIER SECTION </h1>
        <div className="don__container">
        <form  >
            <div className="header">
                <h1 className="don__form__title">Update PRIVIOUS Benificier</h1>
            </div>
            {isPopupOpen && <Validpopup onClose={closePopup} />}
            <div className="don__input-block">
                <input className="don__input" type="text" required="" placeholder="id"  name="id"  value={formData.id} onChange={handleChange} />
            </div>
            <div className="don__input-block">
                <input className="don__input" type="text" required="" placeholder='Benificier Name'   name="previousName"  value={formData.previousName} onChange={handleChange}/>
            </div>
            <div className="don__input-block">
                <input className="don__input" type="text" required="" placeholder='Benificier During'  name="previousDuration"  value={formData.previousDuration} onChange={handleChange}/>
            </div>
            <div className="don__input-block">
                <textarea className="don__input" type="text" required="" placeholder="Benificier Description" rows="3"   name="previousAbout"  value={formData.previousAbout} onChange={handleChange}/>
            </div>
            <div className="don__input-block">
                <input className="don__file-input" type="file" required="" name="file"  onChange={handleUpdateFile} />
            </div>
            <div className="block_next_prev">
                <div onClick={handlePrevious}><Previous /></div>
                <div onClick={handleNext} ><Next /></div>
            </div>
           
            <div className="don__input-block">
                <button className="don__button" onClick={handleSubmit}>Submit</button>
                <button className="don__button" onClick={handleClick}>back</button>
            </div>
          
            </form>
            
            </div>
            </div>
            )}
            </>
            
    );
}
export default UpdatePrevious ; 