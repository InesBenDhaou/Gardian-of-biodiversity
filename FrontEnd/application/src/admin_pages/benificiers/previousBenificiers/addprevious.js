import { useState } from "react";
import React from "react";
import "../../../pages/descoverAndProtection/donAndProt/DonProt.css";
import "../../Homepages/news/homepage.css";
import PreviousAdmin from "./previous";
import { post } from "../../../utils/api.service";
import Validpopup from "../../../popups/adminPopup/popup";

function AddPrevious() {
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
   
          previousName: "",
          previousDuration: "",
          previousAbout:""
         
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
          fd.append('name', formData.previousName);
          fd.append('duration', formData.previousDuration);
          fd.append('about', formData.previousAbout);
          fd.append('file', file);
  
          const previousbenificieradded = await post('/previousbenificier', fd, config);
          setPopupOpen(true);
        };

    const closePopup = () => {
            setPopupOpen(false);
            setFormData({ name: '', duration: '',about:'' });
            setFile(null);
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
                <h1 className="don__form__title">Add Previous Benificier</h1>
            </div>
            {isPopupOpen && <Validpopup onClose={closePopup} />}
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
export default AddPrevious ; 