import {React ,useState,useEffect }from "react";
import "../../../pages/descoverAndProtection/donAndProt/DonProt.css";
import '../../Homepages/news/homepage.css';
import ProjectTimelineAdmin from "./projectTimeline";


import Previous from "../../fleche/previous";
import Next from "../../fleche/next";
import { ProjetsApi } from "../../../api/projet.api";
import { del } from "../../../utils/api.service";

function DeleteprojectTimeline() {
    const [showAnotherComponent, setShowAnotherComponent] = useState(null);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [formData, setFormData] = useState({
          id: "",
          title :"",
          
         
      });
    

    const handleClick = () => {
        setShowAnotherComponent(true);
      };
      
    const [Projects, setProjects] = useState([]);
        useEffect(() => {
        ProjetsApi.getProjets().then((newProject)=>{
            setProjects(newProject);
            if(newProject.length>0){
                setFormData({
                    id:newProject[0].id,
                    title:newProject[0].title,
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
          title:projet.title,
        
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

        const parcdeleted = await del('/projet', formData.id, config);
      };
    return (
        <>
        {showAnotherComponent ? (
            <ProjectTimelineAdmin/>
       
    ) : (
        <div className="container_admin_tools">
        <h1 className='section__news__title'>PROJECT SECTION </h1>
        <div className="don__container">
        <form >
            <div className="header">
                <h1 className="don__form__title">Delete Project</h1>
            </div>
            <div className="don__input-block">
                <input className="don__input" type="text" required="" placeholder="id" name="id"  value={formData.id} onChange={handleChange}/>
            </div>
            <div className="don__input-block">
                <input className="don__input" type="text" required="" placeholder="Parc Name" name="title"  value={formData.title} onChange={handleChange} />
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
export default DeleteprojectTimeline ; 

  