import { useState,useEffect } from "react";
import React from "react";
import "../../../pages/descoverAndProtection/donAndProt/DonProt.css";
import "../../Homepages/news/homepage.css";
import AnimalAdmin from "./animal";
import Previous from "../../fleche/previous";
import Next from "../../fleche/next";
import { AnimalsApi } from "../../../api/animals.api";
import { update } from "../../../utils/api.service";
import Validpopup from "../../../popups/adminPopup/popup";

function UpdateAnimal() {
    const [showAnotherComponent, setShowAnotherComponent] = useState(null);
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [Animals, setAnimals] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [formData, setFormData] = useState({
        id: "",
        animalName: "",
        animalDescription: "",
       
    });
    
    const handleClick = () => {
        setShowAnotherComponent(true);
      };

    

    useEffect(() => {
        AnimalsApi.getAllAnimals().then((newAnimals) => {
          setAnimals(newAnimals);
          if (newAnimals.length > 0) {
            // Set default form data to the first animal
            setFormData({
              id: newAnimals[0].id,
              animalName: newAnimals[0].title,
              animalDescription: newAnimals[0].description,
              // Set more fields accordingly
            });
          }
        });
      }, []);

    const handlePrevious = (e) => {
      e.preventDefault();
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? Animals.length - 1 : prevIndex - 1));
        updateFormData();
      };
    
    const handleNext = (e) => {
        e.preventDefault();
        setCurrentIndex((prevIndex) => (prevIndex === Animals.length - 1 ? 0 : prevIndex + 1));
        updateFormData();
      };
    
    const updateFormData = () => {
        const animal = Animals[currentIndex];
        console.log (currentIndex)
        setFormData({
          id: animal.id,
          animalName: animal.title,
          animalDescription: animal.description,
        });
      };
    
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
        fd.append('title', formData.opinion);
        fd.append('description', formData.description);

        const animalupdated = await update('/animal', fd,formData.id, config);
        setPopupOpen(true);
      };
    
    const closePopup = () => {
        setPopupOpen(false);
        setFormData({ animalName: '',id:'',animalDescription:''});
        
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
                <h1 className="don__form__title">Update Animal</h1>
            </div>
            {isPopupOpen && <Validpopup onClose={closePopup} />}
            <div className="don__input-block">
                <input className="don__input" type="text" required="" placeholder="id" name="id"  value={formData.id} onChange={handleChange}/>
            </div>
            <div className="don__input-block">
                <input className="don__input" type="text"  required="" placeholder="Animal Name" name='animalName'  value={formData.animalName} onChange={handleChange}/>
            </div>
            <div className="don__input-block">
                <textarea className="don__input"  required="" placeholder="Animal Description" name='animalDescription'  value={formData.animalDescription} onChange={handleChange} />
            </div>
            <div className="don__input-block">
                <input className="don__file-input" type="file" required="" />
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
export default UpdateAnimal ; 