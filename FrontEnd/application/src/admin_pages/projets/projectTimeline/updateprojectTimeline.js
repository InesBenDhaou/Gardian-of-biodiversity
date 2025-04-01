import { useState ,useEffect } from "react";
import React from "react";
import "../../../pages/descoverAndProtection/donAndProt/DonProt.css";
import "../../Homepages/news/homepage.css";
import ProjectTimelineAdmin from "./projectTimeline";
import Previous from "../../fleche/previous";
import Next from "../../fleche/next";
import { ProjetsApi } from "../../../api/projet.api";
import { update } from "../../../utils/api.service";

function UpdateProjectTimeline() {
    const [showAnotherComponent, setShowAnotherComponent] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [formData, setFormData] = useState({
          id: "",
          projectTitle :"",
          projectDescription: "",
         
      });
    

    const handleClick = () => {
        setShowAnotherComponent(true);
      };
      
    const [Projects, setProjects] = useState([]);
        useEffect(() => {
        ProjetsApi.getProjets().then((newProjects)=>{
            setProjects(newProjects);
            if(newProjects.length>0){
                setFormData({
                    id: newProjects[0].id,
                    projectTitle: newProjects[0].title,
                    projectDescription: newProjects[0].content,
                });
            }
        });
        
      }, []);

      const handlePrevious = (e) => {
        e.preventDefault();
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? Projects.length - 1 : prevIndex - 1));
        updateFormData();
      };
    
    const handleNext = (e) => {
        e.preventDefault();
        setCurrentIndex((prevIndex) => (prevIndex === Projects.length - 1 ? 0 : prevIndex + 1));
        updateFormData();
      };
    
    const updateFormData = () => {
        const projet = Projects[currentIndex];
        console.log (currentIndex)
        setFormData({
            id: projet.id,
            projectTitle: projet.title,
            parcDescription: projet.content,
         
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
        fd.append('title', formData.projectTitle);
        fd.append('content', formData.projectDescription);
       
        //probleme el file
        const animalupdated = await update('/projet', fd,formData.id, config);
      };

    return (
        <>
            {showAnotherComponent ? (
                <ProjectTimelineAdmin/>
            
        ) : (
        <div className="container_admin_tools"> 
        <h1 className='section__news__title'>PROJECT SECTION </h1>
        <div className="don__container">
        <form  >
            <div className="header">
                <h1 className="don__form__title">Update Projet</h1>
            </div>
            <div className="don__input-block">
                <input className="don__input" type="text" required="" placeholder="id" name="id"  value={formData.id} onChange={handleChange}/>
            </div>
            <div className="don__input-block">
                <textarea className="don__input" type="text" required="" placeholder="Project Title" name="projectTitle"  value={formData.projectTitle} onChange={handleChange} />
            </div>
            <div className="don__input-block">
                <textarea className="don__input"  required="" placeholder="Project Description" name="projectDescription"  value={formData.projectDescription} onChange={handleChange} />
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
export default UpdateProjectTimeline ; 