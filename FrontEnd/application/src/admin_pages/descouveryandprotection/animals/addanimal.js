import { useState } from "react";
import React from "react";
import "../../../pages/descoverAndProtection/donAndProt/DonProt.css";
import "../../Homepages/news/homepage.css";
import AnimalAdmin from "./animal";
import { post} from "../../../utils/api.service";
import Validpopup from "../../../popups/adminPopup/popup";

function AddAnimal() {
    const [showAnotherComponent, setShowAnotherComponent] = useState(null);
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [file, setFile] = useState()

    function handleUpdateFile(event) {
        setFile(event.target.files[0])
    }

    const [formData, setFormData] = useState({
        id: "",
        animalName: "",
        animalDescription: "",
       
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
        fd.append('title', formData.animalName);
        fd.append('description', formData.animalDescription);
        fd.append('file', file);

        const animaladded = await post('/animal', fd, config);
        setPopupOpen(true);
      };
    const handleClick = () => {
        setShowAnotherComponent(true);
      };
    
    const closePopup = () => {
        setPopupOpen(false);
        setFormData({ animalName: '',id:'',animalDescription:''});
        setFile(null);
        
        };

    return (
        <>
        {showAnotherComponent ? (
        <AnimalAdmin />
    ) : (
        <div className="container_admin_tools">
        <h1 className='section__news__title'>ANIMAL SECTION </h1>
        <div className="don__container">
        <form  >
            <div className="header">
                <h1 className="don__form__title">Add Animal</h1>
            </div>
            {isPopupOpen && <Validpopup onClose={closePopup} />}
            <div className="don__input-block">
                <input className="don__input" type="text" required="" placeholder="Animal Name" name='animalName'  value={formData.animalName} onChange={handleChange} />
            </div>
            <div className="don__input-block">
                <textarea className="don__input" type="text" required="" placeholder="Animal Description" name='animalDescription'  value={formData.animalDescription} onChange={handleChange} />
            </div>
            <div className="don__input-block">
                <input className="don__file-input" type="file" required=""  name="file"  onChange={handleUpdateFile}/>
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
export default AddAnimal ; 