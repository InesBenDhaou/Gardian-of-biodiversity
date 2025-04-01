import { useState } from "react";
import React from "react";
import "../../../pages/descoverAndProtection/donAndProt/DonProt.css";
import Validpopup from "../../../popups/adminPopup/popup";
import "./homepage.css";
import Newsadmin from "./news";
import { post } from "../../../utils/api.service";

function AddAdmin() {
    const [showAnotherComponent, setShowAnotherComponent] = useState(null);
    const [isPopupOpen, setPopupOpen] = useState(false);

    const [file, setFile] = useState()

    function handleUpdateFile(event) {
        setFile(event.target.files[0])
    }

    const [formData, setFormData] = useState({
 
        newsType: "",
        newsTitle: "",
        newsDescription:""
       
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
        fd.append('type', formData.newsType);
        fd.append('title', formData.newsTitle);
        fd.append('description', formData.newsDescription);
        fd.append('file', file);

        const newsadded = await post('/news', fd, config);
        setPopupOpen(true);
      };
    const handleClick = () => {
        setShowAnotherComponent(true);
      };

      const closePopup = () => {
        setPopupOpen(false);
       /* setFormData({ useremail: '', userpassword: '' });*/
      };
  
    return (
        <>
        {showAnotherComponent ? (
        <Newsadmin />
    ) : (
        <div className="container_admin_tools">
        <h1 className='section__news__title'>NEWS SECTION </h1>
        <div className="don__container">
        <form  >
            <div className="header">
                <h1 className="don__form__title">Add News</h1>
            </div>
            {isPopupOpen && <Validpopup onClose={closePopup} />}
            <div className="don__input-block">
                <input className="don__input" type="text" required="" placeholder="type" name='newsType'  value={formData.newsType} onChange={handleChange}/>
            </div>
            <div className="don__input-block">
                <input className="don__input" type="text" required="" placeholder="title" name='newsTitle'  value={formData.newsTitle} onChange={handleChange}/>
            </div>
            <div className="don__input-block">
                <textarea className="don__input"  required="" placeholder="description" name='newsDescription'  value={formData.newsDescription} onChange={handleChange} />
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