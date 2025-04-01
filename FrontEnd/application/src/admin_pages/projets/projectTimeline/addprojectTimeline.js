import { useState } from "react";
import React from "react";
import "../../../pages/descoverAndProtection/donAndProt/DonProt.css";
import "../../Homepages/news/homepage.css";
import ProjectTimelineAdmin from "./projectTimeline";

import { post } from "../../../utils/api.service";
function AddProjectTimelineAdmin() {
    const [showAnotherComponent, setShowAnotherComponent] = useState(null);

    
    

    const [formData, setFormData] = useState({

        id: "",
        title:"",
        content: "",
       
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
            'content-type': 'multipart/raw',
          },
        };
       
        const fd = new FormData();
        console.log(formData.content);
        fd.append('title', formData.title);
        fd.append('content', formData.content);
        
        

        const adviceadded = await post('/projet', fd, config);
      };

    const handleClick = () => {
        setShowAnotherComponent(true);
      };
    return (
        <>
        {showAnotherComponent ? (
        <ProjectTimelineAdmin />
    ) : (
        <div className="container_admin_tools">
        <h1 className='section__news__title'>PROJECTS SECTION </h1>
        <div className="don__container">
        <form  >
            <div className="header">
                <h1 className="don__form__title">Add PROJECT</h1>
            </div>
          
            <div className="don__input-block">
                <textarea className="don__input"  required="" placeholder="Project Title" name="title" value={formData.title}  onChange={handleChange} />
            </div>
            <div className="don__input-block">
                <textarea className="don__input"  required="" placeholder="Project Description" name="content" value={formData.content} onChange={handleChange} />
            
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
export default AddProjectTimelineAdmin ; 