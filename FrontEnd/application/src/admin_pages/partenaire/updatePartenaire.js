import { useState,useEffect } from "react";
import React from "react";
import "../../pages/descoverAndProtection/donAndProt/DonProt.css";
import "../Homepages/news/homepage.css";
import PartenairesAdmin from "./partenaires";
import { post } from "../../utils/api.service";
import { PartenairesApi } from "../../api/partenaire.api";
import Previous from "../fleche/previous";
import Next from "../fleche/next";
import { update } from "../../utils/api.service";
function UpdatePartenaire() {
    const [showAnotherComponent, setShowAnotherComponent] = useState(null);
    const [file, setFile] = useState()
    const [currentIndex, setCurrentIndex] = useState(0);
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
    const [Partenaires, setPartenaires] = useState([]);
        useEffect(() => {
            PartenairesApi.getAllPartenaire().then((partenaires)=>{
                setPartenaires(partenaires);
                if(partenaires.length>0){
                    setFormData({
                        id:partenaires[0].id,
                        name:partenaires[0].name,
                        categorie:partenaires[0].categorie,
                        description:partenaires[0].description,
                        link:partenaires[0].link,
                    });
                }
            });
    
      }, []);
      const updateFormData = () => {
        const partenaire = Partenaires[currentIndex];
        console.log (currentIndex)
        setFormData({
            id:  partenaire.id,
            name: partenaire.name,
            categorie: partenaire.categorie,
            description: partenaire.description,
            link: partenaire.link,
          
        });
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
        fd.append('description',formData.description);
        fd.append('link', formData.link);
        fd.append('categorie',formData.categorie);
        fd.append('file', file);
        const animalupdated = await update('/partenaire', fd,formData.id, config);

      };
    const handleClick = () => {
        setShowAnotherComponent(true);
      };

      const handlePrevious = (e) => {
        e.preventDefault();
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? Partenaires.length - 1 : prevIndex - 1));
        updateFormData();
      };
    
    const handleNext = (e) => {
        e.preventDefault();
        setCurrentIndex((prevIndex) => (prevIndex === Partenaires.length - 1 ? 0 : prevIndex + 1));
        updateFormData();
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
                <h1 className="don__form__title">Update Partner</h1>
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
export default UpdatePartenaire ; 