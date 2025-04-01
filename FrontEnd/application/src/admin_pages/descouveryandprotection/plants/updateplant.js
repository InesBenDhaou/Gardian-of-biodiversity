import { useState ,useEffect } from "react";
import React from "react";
import "../../../pages/descoverAndProtection/donAndProt/DonProt.css";
import "../../Homepages/news/homepage.css";
import PlantAdmin from "./plants";
import Previous from "../../fleche/previous";
import Next from "../../fleche/next";
import { PlantsApi } from "../../../api/plants.api";
import { update } from "../../../utils/api.service";

function UpdatePlant() {
    const [showAnotherComponent, setShowAnotherComponent] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [formData, setFormData] = useState({
          id: "",
          plantName :"",
          plantDescription: "",
         
      });

    const handleClick = () => {
        setShowAnotherComponent(true);
      };
    
    const [Plants, setPlants] = useState([]);
        useEffect(() => {
        PlantsApi.getAllPlants().then((newPlants) => {
          setPlants(newPlants);
          if (newPlants.length > 0) {
            setFormData({
              id: newPlants[0].id,
              plantName: newPlants[0].title,
              plantDescription: newPlants[0].description,
            });
          }
        });
      }, []);
    const [file, setFile] = useState()

      function handleUpdateFile(event) {
          setFile(event.target.files[0])
      }
      
      const handlePrevious = (e) => {
        e.preventDefault();
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? Plants.length - 1 : prevIndex - 1));
        updateFormData();
      };
    
    const handleNext = (e) => {
      e.preventDefault();
        setCurrentIndex((prevIndex) => (prevIndex === Plants.length - 1 ? 0 : prevIndex + 1));
        updateFormData();
      };
    
    const updateFormData = () => {
        const plant = Plants[currentIndex];
        console.log (currentIndex)
        setFormData({
          id: plant.id,
          plantName:plant.title,
          plantDescription:plant.description,
        });
      };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const config = {
          headers: {
            'content-type': 'multipart/form-data',
          },
        };

        const fd = new FormData();
        fd.append('title', formData.plantName);
        fd.append('description', formData.plantDescription);
        fd.append('file',file)
        const animalupdated = await update('/parc', fd,formData.id, config);
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
                <h1 className="don__form__title">Update Plant</h1>
            </div>
            <div className="don__input-block">
                <input className="don__input" type="text" required="" placeholder="id"  name="id"  value={formData.id} onChange={handleChange}/>
            </div>
            <div className="don__input-block">
                <input className="don__input" type="text" required="" placeholder="Plant Name"  name="plantName"  value={formData.plantName} onChange={handleChange}/>
            </div>
            <div className="don__input-block">
                <textarea className="don__input" required=""  rows={4} placeholder="Plant Description" name="plantDescription"  value={formData.plantDescription} onChange={handleChange} />
            </div>
            <div className="don__input-block">
                <input className="don__file-input" type="file" required="" name="file"  onChange={handleUpdateFile} />
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
export default UpdatePlant ; 