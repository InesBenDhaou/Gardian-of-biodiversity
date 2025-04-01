import { useState,useEffect } from "react";
import React from "react";
import "../../pages/descoverAndProtection/donAndProt/DonProt.css";
import "../Homepages/news/homepage.css";
import PartenairesAdmin from "./partenaires";
import { post } from "../../utils/api.service";
import { PartenairesApi } from "../../api/partenaire.api";
import Previous from "../fleche/previous";
import Next from "../fleche/next";
import { del } from "../../utils/api.service";
function AddPartenaire() {
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
           
          
        });
      };
    const handleSubmit = async (e) => {
        e.preventDefault();

        const config = {
          headers: {
            'content-type': 'multipart/form-data',
          },
        };

        
        const parcadded = await del('/partenaire',  formData.id, config);
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
                <h1 className="don__form__title">Delete Partner</h1>
            </div>
            <div className="don__input-block">
                <input className="don__input" type="text" required="" placeholder="id"  name="id" value={formData.id} onChange={handleChange} />
            </div>
            <div className="don__input-block">
                <input className="don__input" type="text" required="" placeholder="Name"  name="name" value={formData.name} onChange={handleChange} />
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
export default AddPartenaire ; 