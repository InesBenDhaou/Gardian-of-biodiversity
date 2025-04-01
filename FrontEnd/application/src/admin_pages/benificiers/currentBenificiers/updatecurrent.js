import { useState ,useEffect} from "react";
import React from "react";
import "../../../pages/descoverAndProtection/donAndProt/DonProt.css";
import "../../Homepages/news/homepage.css";
import CurrentAdmin from "./current";
import Previous from "../../fleche/previous";
import Next from "../../fleche/next";
import { CurrentBenifsApi } from "../../../api/currentBenif";
import { update } from "../../../utils/api.service";
import Validpopup from "../../../popups/adminPopup/popup";

function UpdateCurrent() {
    const [showAnotherComponent, setShowAnotherComponent] = useState(null);
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [formData, setFormData] = useState({
          id: "",
          currentName :"",
          currentDate: "",
          currentAbout: "",
         
      });

    const handleClick = () => {
        setShowAnotherComponent(true);
      };

    const [CurrentBenifs, setCurrentBenifs] = useState([]);
          useEffect(() => {
          CurrentBenifsApi.getAllCurrentBenifs().then((newCurrentBenifs) => {
              setCurrentBenifs(newCurrentBenifs);
              if (newCurrentBenifs.length > 0) {
                setFormData({
                  id: newCurrentBenifs[0].id,
                  currentName: newCurrentBenifs[0].name,
                  currentDate: newCurrentBenifs[0].date,
                  currentAbout : newCurrentBenifs[0].about,
                  // Set more fields accordingly
                });
              }
            });
         
        }, []);
      
        const handlePrevious = () => {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? CurrentBenifs.length - 1 : prevIndex - 1));
            updateFormData();
          };
        
        const handleNext = () => {
            setCurrentIndex((prevIndex) => (prevIndex === CurrentBenifs.length - 1 ? 0 : prevIndex + 1));
            updateFormData();
          };
        
        const updateFormData = () => {
            const current = CurrentBenifs[currentIndex];
            console.log (currentIndex)
            setFormData({
              id: current.id,
              currentName: current.name,
              currentDate: current.date,
              currentAbout: current.about,

            });
          };
        const [file, setFile] = useState()

        function handleUpdateFile(event) {
              setFile(event.target.files[0])
          }
        
        
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
            fd.append('name', formData.currentName);
            fd.append('date', formData.currentDate);
            fd.append('about', formData.currentAbout);
            fd.append('file',file)
            const newsupdated = await update('/currentbenificier', fd,formData.id, config);
            setPopupOpen(true);
          };
          const closePopup = () => {
            setPopupOpen(false);
            setFormData({ name: '', date: '',about:''});
            setFile(null);
            };
  

    return (
        <>
            {showAnotherComponent ? (
            <CurrentAdmin />
        ) : (
        <div className="container_admin_tools"> 
        <h1 className='section__news__title'>CURRENT BENIFICIER SECTION </h1>
        <div className="don__container">
        <form  >
            <div className="header">
                <h1 className="don__form__title">Update Current Benificier</h1>
            </div>
            {isPopupOpen && <Validpopup onClose={closePopup} />}
            <div className="don__input-block">
                <input className="don__input" type="text" required="" placeholder="id" name="id"  value={formData.id} onChange={handleChange} />
            </div>
            <div className="don__input-block">
                <input className="don__input" type="text" required="" placeholder='Benificier Name' name="currentName"  value={formData.currentName} onChange={handleChange} />
            </div>
            <div className="don__input-block">
                <input className="don__input" type="text" required="" placeholder='Benificier Since' name="currentDate"  value={formData.currentDate} onChange={handleChange}/>
            </div>
            <div className="don__input-block">
                <textarea className="don__input" type="text" required="" placeholder="Benificier Description" rows="3" name="currentAbout"  value={formData.currentAbout} onChange={handleChange} />
            </div>
            <div className="don__input-block">
                <input className="don__file-input" type="file" required="" name="file"  onChange={handleUpdateFile}/>
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
export default UpdateCurrent ; 