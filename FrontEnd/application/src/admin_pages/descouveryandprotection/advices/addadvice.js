import { useState } from "react";
import React from "react";
import "../../../pages/descoverAndProtection/donAndProt/DonProt.css";
import "../../Homepages/news/homepage.css";
import AdviceAdmin from "./advice";
import { post } from "../../../utils/api.service";
import Validpopup from "../../../popups/adminPopup/popup";
function AddAdvice() {
    const [showAnotherComponent, setShowAnotherComponent] = useState(null);
    const [file, setFile] = useState()
    const [isPopupOpen, setPopupOpen] = useState(false);

    function handleUpdateFile(event) {
        setFile(event.target.files[0])
    }

    const [formData, setFormData] = useState({
        id: "",
        adviceDescription: "",
       
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
        fd.append('description', formData.adviceDescription);
        fd.append('file', file);

        const adviceadded = await post('/advice', fd, config);
        setPopupOpen(true);
      };
    
    const closePopup = () => {
        setPopupOpen(false);
        setFormData({ adviceDescription: ''});
        setFile(null);
        };

    const handleClick = () => {
        setShowAnotherComponent(true);
      };
    return (
        <>
        {showAnotherComponent ? (
        <AdviceAdmin />
    ) : (
        <div className="container_admin_tools">
        <h1 className='section__news__title'>Advice SECTION </h1>
        <div className="don__container">
        <form  >
            <div className="header">
                <h1 className="don__form__title">Add Advice</h1>
            </div>
            {isPopupOpen && <Validpopup onClose={closePopup} />}
            <div className="don__input-block">
                <textarea className="don__input"  required="" placeholder="Advice Description" name="adviceDescription" value={formData.adviceDescription}  onChange={handleChange} />
            </div>
            <div className="don__input-block">
                <input className="don__input" type="file" required=""  name="file"  onChange={handleUpdateFile}/>
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
export default AddAdvice ; 