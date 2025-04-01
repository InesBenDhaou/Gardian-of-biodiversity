import { useState ,useEffect } from "react";
import React from "react";
import "../../../pages/descoverAndProtection/donAndProt/DonProt.css";
import "../../Homepages/news/homepage.css";
import ParcAdmin from "./parc";
import Previous from "../../fleche/previous";
import Next from "../../fleche/next";
import { ParcsApi } from "../../../api/parcs.api";
import { update } from "../../../utils/api.service";
import Validpopup from "../../../popups/adminPopup/popup";

function UpdateParc() {
    const [showAnotherComponent, setShowAnotherComponent] = useState(null);
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [formData, setFormData] = useState({
          id: "",
          parcName :"",
          parcDescription: "",
         
      });
    

    const handleClick = () => {
        setShowAnotherComponent(true);
      };
      
    const [Parcs, setParcs] = useState([]);
        useEffect(() => {
        ParcsApi.getAllParcs().then((newParcs) => {
          setParcs(newParcs);
          if (newParcs.length > 0) {
            setFormData({
              id: newParcs[0].id,
              parcName: newParcs[0].title,
              parcDescription: newParcs[0].description,
              // Set more fields accordingly
            });
          }
        });
    
      }, []);

      const handlePrevious = (e) => {
        e.preventDefault();
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? Parcs.length - 1 : prevIndex - 1));
        updateFormData();
      };
    
    const handleNext = (e) => {
      e.preventDefault();
        setCurrentIndex((prevIndex) => (prevIndex === Parcs.length - 1 ? 0 : prevIndex + 1));
        updateFormData();
      };
    
    const updateFormData = () => {
        const parc = Parcs[currentIndex];
        console.log (currentIndex)
        setFormData({
          id: parc.id,
          parcName: parc.title,
          parcDescription: parc.description,
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
    
      const handleSubmit = async (e) => {
        e.preventDefault();

        const config = {
          headers: {
            'content-type': 'multipart/form-data',
          },
        };

        const fd = new FormData();
        fd.append('title', formData.parcName);
        fd.append('description', formData.parcDescription);
        fd.append('file',file)
        const animalupdated = await update('/parc', fd,formData.id, config);
        setPopupOpen(true);
      };

    const closePopup = () => {
        setPopupOpen(false);
        setFormData({ parcName: '',id:'',parcDescription:''});
        setFile(null);
        
        };

    return (
        <>
            {showAnotherComponent ? (
            <ParcAdmin />
        ) : (
        <div className="container_admin_tools"> 
        <h1 className='section__news__title'>PARCS SECTION </h1>
        <div className="don__container">
        <form  >
            <div className="header">
                <h1 className="don__form__title">Update Parc</h1>
            </div>
            {isPopupOpen && <Validpopup onClose={closePopup} />}
            <div className="don__input-block">
                <input className="don__input" type="text" required="" placeholder="id" name="id"  value={formData.id} onChange={handleChange}/>
            </div>
            <div className="don__input-block">
                <textarea className="don__input" type="text" required="" placeholder="Parc Name" name="parcName"  value={formData.parcName} onChange={handleChange} />
            </div>
            <div className="don__input-block">
                <input className="don__input" type="text" required="" placeholder="Parc Description" name="parcDescription"  value={formData.parcDescription} onChange={handleChange} />
            </div>
            <div className="don__input-block">
                <input className="don__file-input" type="file" required="" placeholder="Parc image" name="file"  onChange={handleUpdateFile}  />
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
export default UpdateParc ; 