import { useState } from "react";
import React from "react";
import "../../../pages/descoverAndProtection/donAndProt/DonProt.css";
import "../../Homepages/news/homepage.css";
import ParcAdmin from "./parc";
import { post } from "../../../utils/api.service";
import Validpopup from "../../../popups/adminPopup/popup";

function AddParc() {
    const [showAnotherComponent, setShowAnotherComponent] = useState(null);
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [file, setFile] = useState()

    function handleUpdateFile(event) {
        setFile(event.target.files[0])
    }

    const [formData, setFormData] = useState({
        id: "",
        parcName: "",
        parcDescription: "",
       
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
        fd.append('title', formData.parcName);
        fd.append('description', formData.parcDescription);
        fd.append('file', file);

        const parcadded = await post('/parc', fd, config);
        setPopupOpen(true);
      };
    const handleClick = () => {
        setShowAnotherComponent(true);
      };

    const closePopup = () => {
        setPopupOpen(false);
        setFormData({ parcName: '',parcDescription:''});
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
                <h1 className="don__form__title">Add Parcs</h1>
            </div>
            {isPopupOpen && <Validpopup onClose={closePopup} />}
            <div className="don__input-block">
                <input className="don__input" type="text" required="" placeholder="Parc Name"  name="parcName" value={formData.parcName} onChange={handleChange} />
            </div>
            <div className="don__input-block">
                <textarea className="don__input" type="text" required="" placeholder="Parc Description" name="parcDescription" value={formData.parcDescription} onChange={handleChange}/>
            </div>
            <div className="don__input-block">
                <input className="don__file-input" type="file" required="" name="file"  onChange={handleUpdateFile}  />
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
export default AddParc ; 