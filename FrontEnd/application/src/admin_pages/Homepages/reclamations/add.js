import { useState } from "react";
import React from "react";
import "../../../pages/descoverAndProtection/donAndProt/DonProt.css";
import "../news/homepage.css";
import Reclamationadmin from "./reclamation";
import { post } from "../../../utils/api.service";
import Validpopup from "../../../popups/adminPopup/popup";

function AddAdmin() {
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
   
          opinion: "",
          author: "",
        
         
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
          fd.append('opinion', formData.opinion);
          fd.append('author', formData.author);
          fd.append('file', file);
          const repportadded = await post('/reclamation', fd, config);
          setPopupOpen(true);
        };

    const closePopup = () => {
        setPopupOpen(false);
        setFormData({ opinion: '', author: '',id:'' });
        setFile(null);
        };

    return (
        <>
        {showAnotherComponent ? (
        <Reclamationadmin />
    ) : (
        <div className="container_Report_tools">
         <h1 className='section__news__title'>REPORTS SECTION </h1>
        <div className="don__container">
        <form  >
            <div className="header">
                <h1 className="don__form__title">Add Report</h1>
            </div>
            {isPopupOpen && <Validpopup onClose={closePopup} />}
            <div className="don__input-block">
                <textarea className="don__input" type="text" required="" placeholder="report description" name='opinion'  value={formData.opinion} onChange={handleChange} />
            </div>
            <div className="don__input-block">
                <input className="don__input" type="text" required="" placeholder="author" name='author'  value={formData.author} onChange={handleChange}  />
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
export default AddAdmin ; 