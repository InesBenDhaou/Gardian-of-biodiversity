import { useState,useEffect } from "react";
import React from "react";
import "../../../pages/descoverAndProtection/donAndProt/DonProt.css";
import "../../Homepages/news/homepage.css";
import EventAdmin from "./events";
import { post } from "../../../utils/api.service";
import { EventsApi } from "../../../api/events.api";
import { ProjetsApi } from "../../../api/projet.api";

function AddEvent() {
    const [showAnotherComponent, setShowAnotherComponent] = useState(null);
    const [file, setFile] = useState()

    function handleUpdateFile(event) {
        setFile(event.target.files[0])
    }

    const [formData, setFormData] = useState({
        id: "",
        title:"",
        projet:"",
        date:"",
        place:"",
        content:"",     
       
    });
    const [optionsData, setOptionsData] = useState([]);
    useEffect(() => {
        ProjetsApi.getProjectsTitle().then((title)=>{setOptionsData(title);})
                           
      }, []);
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
            projet: value,
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
        fd.append('title', formData.title);
        fd.append('projet',formData.projet);
        fd.append('date', formData.date);
        fd.append('place', formData.place);
        fd.append('content', formData.content);
        fd.append('file', file);
        console.log(fd);
        const parcadded = await post('/event', fd, config);
      };
    const handleClick = () => {
        setShowAnotherComponent(true);
      };
    return (
        <>
        {showAnotherComponent ? (
        <EventAdmin/>
        
    ) : (
        <div className="container_admin_tools">
        <h1 className='section__news__title'>EVENTS SECTION </h1>
        <div className="don__container">
        <form  >
            <div className="header">
                <h1 className="don__form__title">Add Event</h1>
            </div>
            <div className="don__input-block">
                <input className="don__input" type="text" required="" placeholder="Event Title"  name="title" value={formData.title} onChange={handleChange} />
            </div>
            <div className="don__input-block">
            <select className="don__input_select" id="selection" onChange={handleChangeSelect}  value={formData.projet || ''}>
                            
                            {optionsData &&optionsData.map((option, index) => (
                                <option className="don__input" key={index} value={option}>{option}</option>
                            ))}
                            
            </select>
            </div>
            <div className="don__input-block">
                <input className="don__input" type="date" required="" placeholder="Date" name="date" value={formData.date} onChange={handleChange}/>
            </div>
            <div className="don__input-block">
                <input className="don__input" type="text" required="" placeholder="Place" name="place" value={formData.place} onChange={handleChange}/>
            </div>
            <div className="don__input-block">
                <textarea className="don__input" type="text" required="" placeholder="Content" name="content" value={formData.content} onChange={handleChange}/>
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
export default AddEvent ; 