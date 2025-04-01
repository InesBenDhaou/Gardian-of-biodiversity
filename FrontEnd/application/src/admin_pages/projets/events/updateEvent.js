import { useState ,useEffect } from "react";
import React from "react";
import "../../../pages/descoverAndProtection/donAndProt/DonProt.css";
import "../../Homepages/news/homepage.css";
import EventAdmin from "./events";

import Previous from "../../fleche/previous";
import Next from "../../fleche/next";
import { EventsApi } from "../../../api/events.api";
import { ProjetsApi } from "../../../api/projet.api";
import { update } from "../../../utils/api.service";

function UpdateEvent() {
    const [showAnotherComponent, setShowAnotherComponent] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [formData, setFormData] = useState({
        id: "",
        title:"",
        projet:"",
        date:"",
        place:"",
        content:"",
         
      });
    
      const [file, setFile] = useState()

    function handleUpdateFile(event) {
        setFile(event.target.files[0])
    }

    const handleClick = () => {
        setShowAnotherComponent(true);
      };
      
      const [Events, setEvents] = useState([]);
      useEffect(() => {
          EventsApi.getAllEvents().then((events) => {setEvents(events);
              if (events.length > 0) {
                setFormData({
                  id: events[0].id,
                  title: events[0].title,
                  projet: events[0].projet,
                  date: events[0].date,
                  place: events[0].place,
                  content: events[0].content,
                              
                });
              }});
  
    }, []);

      const handlePrevious = (e) => {
        e.preventDefault();
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? Events.length - 1 : prevIndex - 1));
        updateFormData();
      };
    
    const handleNext = (e) => {
      e.preventDefault();
        setCurrentIndex((prevIndex) => (prevIndex === Events.length - 1 ? 0 : prevIndex + 1));
        updateFormData();
      };
    
    const updateFormData = () => {
        const event = Events[currentIndex];
        console.log (currentIndex)
        setFormData({
            id: event.id,
            title: event.title,
            projet: event.projet,
            date: event.date,
            place: event.place,
            content: event.content,
          
        
        });
      };
      const [optionsData, setOptionsData] = useState([]);
      useEffect(() => {
          ProjetsApi.getProjectsTitle().then((title)=>{setOptionsData(title);})
                             
        }, []);
        const handleChangeSelect = (e) => {
            const { value } = e.target;
            setFormData((prevFormData) => ({
                ...prevFormData,
                projet: value,
            }));
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
        fd.append('title', formData.title);
        fd.append('projet',formData.projet);
        fd.append('date', formData.date);
        fd.append('place', formData.place);
        fd.append('content', formData.content);
        fd.append('file', file);
        const animalupdated = await update('/event', fd,formData.id, config);
      };

    return (
        <>
            {showAnotherComponent ? (
                <EventAdmin/>
            
        ) : (
            <div className="container_admin_tools">
            <h1 className='section__news__title'>EVENTS SECTION </h1>
            <div className="don__container__grand">
            <form  >
                <div className="header">
                    <h1 className="don__form__title">Update Event</h1>
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
export default UpdateEvent ; 