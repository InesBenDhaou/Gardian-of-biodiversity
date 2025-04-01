import React from 'react';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import{ useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import './acheivements.css';

import VoicesfortheVoiceless from '../../../images/projets/VoicesfortheVoiceless.jpg'
import CleanupandCelebration from '../../../images/projets/CleanupandCelebration.png';
import codeForConservation from '../../../images/projets/CodeforConservation.jpg';
import DiscoveringRarity from '../../../images/projets//DiscoveringRarity.png';

import {EventsApi} from '../../../api/events.api';
export default function Acheivements() {
    
    const [acheivements, setacheivements] = useState([]);

    useEffect(() => {
      EventsApi.getAcheivements().then((newEvent)=>{
        setacheivements(newEvent);
      });
      
    }, []);
    

    const customizedMarker = (item) => {
        return (
            <span className="d-inline-flex align-items-center justify-content-center text-white rounded-circle p-2" style={{ backgroundColor: item.color }}>
                <i className={item.icon}></i>
            </span>
        );
    };

    const customizedContent = (item) => {
        const titleStyle = {
            fontSize: '20px',   
            fontWeight: 'bold', 
            color: 'black'    
            
           
        };
        const dateStyle={
            color:'rgb(37, 35, 35)'
        }
        return (
            <Card title={<span style={titleStyle}>{item.title}<h3 className='projet_event'>{item.projet}</h3></span>} subTitle={<div><span style={dateStyle}>{item.date}</span><br /><span style={dateStyle}>{item.place}</span></div>} className="shadow card_projects">
                {item.image && <img src={'data:image/png;base64,' +item.image} alt={`Image for ${item.title}`} width={200} className="img-fluid shadow img_projects" />}
                
                <p className='content_card'>{item.content}</p>
                <Button label="Read more" className="btn  show_more"></Button>
            </Card>
        );
    };

    return (
        <div className="container mt-4 customized-timeline-container">
        
            <Timeline value={acheivements} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
        </div>
    );
}
