import 'bootstrap-icons/font/bootstrap-icons.css'; 
import React from 'react';
import{ useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './forthcomingEvents.css';
import JoinUs from './JoinUs';

import { useNavigate } from "react-router-dom";

import {EventsApi} from '../../../api/events.api';


const ForthcomingEvents = ({ onJoinUsClick }) => {

  const [showJoinUsModal, setShowJoinUsModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const [forthcomingEvents, setforthcomingEvents] = useState([]);

    useEffect(() => {
      EventsApi.getForthcomingEvents().then((newEvent)=>{
        setforthcomingEvents(newEvent);
      });
      
    }, []);

  const navigate = useNavigate();
/*
  // Function to handle button click and redirect to JoinUs page with data
  const handleJoinUsClick = (itemName,itemimg) => {
    // Use the navigate function to redirect to the JoinUs page with data
    navigate('/joinus', { state: { formationName: itemName ,formationImg:itemimg} });
  }; */
  const handleJoinUsClick = (event) => {
    setSelectedEvent(event);
    setShowJoinUsModal(true);
  };

  const handleCloseModal = () => {
    setShowJoinUsModal(false);
  };
  return (
    <div className="formations-container">
      {forthcomingEvents.map((item) => (
        <Card className='formation-card' key={item.id} style={{ width: '18rem' }}>
          <Card.Img className='formation_img' variant="top" src={'data:image/png;base64,' + item.image} />
          <Card.Body>
            <Card.Title className='title_formation'>{item.title}</Card.Title>
            <h3 className='date_formation'><i className="bi bi-calendar-event"></i>{item.date}</h3>
            <h3 className='date_formation'><i className="bi bi-geo-alt"></i>{item.place}</h3>
            <h4 className='date_formation'><i class="bi bi-tag"></i>{item.projet}</h4>
            <Card.Text>
              {item.content}
            </Card.Text>
            <Button className='button_joinUs' onClick={() => handleJoinUsClick(item)}>Join us</Button>
          </Card.Body>
        </Card>
        
      ))}
      {showJoinUsModal && selectedEvent &&
          <JoinUs
            formationName={selectedEvent.title}
            formationImg={'data:image/png;base64,' + selectedEvent.image}
            onClose={handleCloseModal}
          />
        }
    </div>
  );
};

export default ForthcomingEvents;
