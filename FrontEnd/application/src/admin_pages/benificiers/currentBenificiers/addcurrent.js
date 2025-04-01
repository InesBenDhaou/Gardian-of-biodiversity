import { useState } from "react";
import React from "react";
import "../../../pages/descoverAndProtection/donAndProt/DonProt.css";
import "../../Homepages/news/homepage.css";
import CurrentAdmin from "./current";
import { post } from "../../../utils/api.service";
import Validpopup from "../../../popups/adminPopup/popup";

function AddCurrent() {
    const [showAnotherComponent, setShowAnotherComponent] = useState(null);
    const [isPopupOpen, setPopupOpen] = useState(false);
    
    const handleClick = () => {
        setShowAnotherComponent(true);
      };
      const [file, setFile] = useState()

      function handleUpdateFile(event) {
          setFile(event.target.files[0])
      }
  
      const [formData, setFormData] = useState({
   
          currentName: "",
          currentDate: "",
          currentAbout:""
         
      });
  
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
          fd.append('name', formData.currentName);
          fd.append('date', formData.currentDate);
          fd.append('about', formData.currentAbout);
          fd.append('file', file);
  
          const currentbenificieradded = await post('/currentbenificier', fd, config);
          setPopupOpen(true);
        };

        const closePopup = () => {
            setPopupOpen(false);
            setFormData({ name: '', date: '',about:'' });
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
                <h1 className="don__form__title">Add Current Benificier</h1>
            </div>
            {isPopupOpen && <Validpopup onClose={closePopup} />}
            <div className="don__input-block">
                <input className="don__input" type="text" required="" placeholder='Benificier Name'  name="currentName"  value={formData.currentName} onChange={handleChange}  />
            </div>
            <div className="don__input-block">
                <input className="don__input" type="text" required="" placeholder='Benificier Since' name="currentDate"  value={formData.currentDate} onChange={handleChange}  />
            </div>
            <div className="don__input-block">
                <textarea className="don__input" type="text" required="" placeholder="Benificier Description" name="currentAbout"  value={formData.currentAbout} onChange={handleChange} />
            </div>
            <div className="don__input-block">
                <input className="don__file-input" type="file" required="" name="file"  onChange={handleUpdateFile} />
            </div>
            
            <div className="don__input-block">
                <button className="don__button"  onClick={handleSubmit}>Submit</button>
                <button className="don__button" onClick={handleClick}>back</button>
            </div>
          
            </form>
            </div>
            </div>
             )}
             </>
            
    );
}
export default AddCurrent ; 