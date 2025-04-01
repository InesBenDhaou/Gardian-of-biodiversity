import React from 'react';
import { useLocation } from 'react-router-dom';
import  { useState } from 'react';
import './JoinUs.css'; 
import { post} from "../../../utils/api.service";
import JoinUspopup from '../../../popups/JoinUsPopup/JoinUsPopup';
import Rapportpopup from '../../../popups/rapportPopup/RapportPopup';
const JoinUs = ({ formationName, formationImg, onClose }) => {
  // Get the location object using useLocation
/*  const location = useLocation();

  // Access the data from the state object
  const formationName = location.state?.formationName || 'Default Card Name';
  const formationImg = location.state?.formationImg || 'Default Card Image';
*/
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [popupOpen, setPopupOpen] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };

    const fd = new FormData();
    fd.append('name', name);
    fd.append('email', email);
    fd.append('phone', phone);
    fd.append('message',message);
    fd.append('eventTitle',formationName);
    if (fd){
      setPopupOpen(true);
      setTimeout(() => {
        console.log("ffff2");
        setPopupOpen(false);
        onClose();
      }, 5000 );
    }
    const participantadded = await post('/participant', fd, config);
  
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    
  };

  const closePopup = () => {
    setPopupOpen(false);
    
};

  return (
    <div className="join-us-modal">
    <div className="container-joinUs">
      <div className="contact-box-joinUs">
        <div className="left-joinUs"style={{ backgroundImage: `url(${formationImg})` }}></div>
        <div className="right-joinUs">
          <h2>{formationName}</h2>
          <form onSubmit={handleSubmit}>
          {popupOpen && <Rapportpopup onClose={closePopup}/>}
            <input
              type="text"
              className="field-joinUs"
              placeholder="Your Name"
              value={name}
              onChange={handleNameChange}
            />
            <input
              type="text"
              className="field-joinUs"
              placeholder="Your Email"
              value={email}
              onChange={handleEmailChange}
            />
            <input
              type="text"
              className="field-joinUs"
              placeholder="Phone"
              value={phone}
              onChange={handlePhoneChange}
            />
            <textarea
                id='textarea-msg'
              placeholder="Message"
              className="field-joinUs"
              value={message}
              onChange={handleMessageChange}
            ></textarea>
            <button type="submit" className="btn-joinUs">
              Send
            </button>
            <button className="close-modal-btn" onClick={onClose}>
            Close
          </button>
          </form>
        </div>
      </div>
    </div>
   
    </div>
  );
};

export default JoinUs;
