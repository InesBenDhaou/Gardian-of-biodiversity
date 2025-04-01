import { useState } from "react";
import React from "react";
import "../../../pages/descoverAndProtection/donAndProt/DonProt.css";
import "../../Homepages/news/homepage.css";
import PlantAdmin from "./plants";
import { post } from "../../../utils/api.service";

function AddPlant() {
    const [showAnotherComponent, setShowAnotherComponent] = useState(null);
    const [file, setFile] = useState()

    function handleUpdateFile(event) {
        setFile(event.target.files[0])
    }

    const [formData, setFormData] = useState({
        id: "",
        plantName: "",
        plantDescription: "",
       
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
        fd.append('title', formData.plantName);
        fd.append('description', formData.plantDescription);
        fd.append('file', file);

        const plantadded = await post('/plant', fd, config);
      };

    const handleClick = () => {
        setShowAnotherComponent(true);
      };
    return (
        <>
        {showAnotherComponent ? (
        <PlantAdmin />
    ) : (
        <div className="container_admin_tools">
        <h1 className='section__news__title'>PLANTS SECTION </h1>
        <div className="don__container">
        <form  >
            <div className="header">
                <h1 className="don__form__title">Add Plant</h1>
            </div>
            <div className="don__input-block">
                <input className="don__input" type="text" required="" placeholder="Plant Name" name="plantName" value={formData.plantName} onChange={handleChange}/>
            </div>
            <div className="don__input-block">
                <textarea className="don__input" type="text" required="" placeholder="Plant Description" name="plantDescription" value={formData.plantDescription} onChange={handleChange} />
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
export default AddPlant ; 