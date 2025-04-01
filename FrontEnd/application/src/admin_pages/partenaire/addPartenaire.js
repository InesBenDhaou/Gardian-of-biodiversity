import { useState,useEffect } from "react";
import React from "react";
import "../../pages/descoverAndProtection/donAndProt/DonProt.css";
import "../Homepages/news/homepage.css";
import PartenairesAdmin from "./partenaires";
import { post } from "../../utils/api.service";


function AddPartenaire() {
    const [showAnotherComponent, setShowAnotherComponent] = useState(null);
    const [file, setFile] = useState()

    function handleUpdateFile(event) {
        setFile(event.target.files[0])
    }

    const [formData, setFormData] = useState({
        id: "",
        name:"",
        description : "",
        link:"",
        categorie:"",
       
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
    };
      const handleChangeSelect = (e) => {
        const { value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            categorie: value,
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
        fd.append('name', formData.name);
        fd.append('categorie',formData.categorie);
        fd.append('description', formData.description);
        fd.append('link', formData.link);
        fd.append('file', file);
        console.log(fd);
        const parcadded = await post('/partenaire', fd, config);
      };
    const handleClick = () => {
        setShowAnotherComponent(true);
      };
    return (
        <>
        {showAnotherComponent ? (
        <PartenairesAdmin/>
        
    ) : (
        <div className="container_admin_tools">
        <h1 className='section__news__title'>PARTNERS SECTION </h1>
        <div className="don__container">
        <form  >
            <div className="header">
                <h1 className="don__form__title">Add Partner</h1>
            </div>
            <div className="don__input-block">
                <input className="don__input" type="text" required="" placeholder="Name"  name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div className="don__input-block">
            <select className="don__input_select" id="selection" onChange={handleChangeSelect}  value={formData.categorie || ''}>
                <option className="don__input" key="association" value="association">association</option>
                <option className="don__input" key="entreprise" value="entreprise">entreprise</option>
                <option className="don__input" key="public" value="public">public</option>
                            
            </select>
            </div>
            <div className="don__input-block">
                <input className="don__input" type="text" required="" placeholder="Description" name="description" value={formData.description} onChange={handleChange}/>
            </div>
            <div className="don__input-block">
                <textarea className="don__input" type="text" required="" placeholder="Link" name="link" value={formData.link} onChange={handleChange}/>
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
export default AddPartenaire ; 