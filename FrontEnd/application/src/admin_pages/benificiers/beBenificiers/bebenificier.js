import React, { useState, useEffect } from 'react';
import '../../Homepages/news/news.css';
import { BeBenifsApi } from '../../../api/bebenificier.api';
import { post } from '../../../utils/api.service';
import Next from '../../fleche/next';
import Previous from '../../fleche/previous';
import { del } from '../../../utils/api.service';
import Validpopup from '../../../popups/adminPopup/popup';

function BebenificierAdmin() {
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [formData, setFormData] = useState({
          id: "",
          benificierName :"",
          benificierEmail: "",
          benificier: "",
          benificierDescription: "",  
      });

    const [file, setFile] = useState();

    function handleUpdateFile(event) {
          setFile(event.target.files[0])
      }
   
    
    const [BeBenifs, setBeBenifs] = useState([]);
          useEffect(() => {
          BeBenifsApi.getAllBebenificiers().then((newBeBenifs) => {
            setBeBenifs(newBeBenifs);
            if (newBeBenifs.length > 0) {
                setFormData({
                  id: newBeBenifs[0].id,
                  benificierName: newBeBenifs[0].name,
                  benificierEmail: newBeBenifs[0].email,
                  benificier : newBeBenifs[0].benificier,
                  benificierDescription: newBeBenifs[0].description,
                
                });
              }
            });
         
        }, []);

    
        const handlePrevious = () => {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? BeBenifs.length - 1 : prevIndex - 1));
            updateFormData();
          };
        
        const handleNext = () => {
            setCurrentIndex((prevIndex) => (prevIndex === BeBenifs.length - 1 ? 0 : prevIndex + 1));
            updateFormData();
          };
        
        const updateFormData = () => {
            const benif = BeBenifs[currentIndex];
            console.log (currentIndex)
            setFormData({
              id: benif.id,
              benificierName: benif.name,
              benificierEmail: benif.email,
              benificier: benif.benificier,
              benificierDescription :benif.description

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
            fd.append('name', formData.benificierName);
            fd.append('email', formData.benificierEmail);
            fd.append('benificier', formData.benificier);
            fd.append('description', formData.benificierDescription);
            fd.append('file', file);
            const bebenificieradded = await post('/bebenificier', fd, config);
            setPopupOpen(true);
          };
        const handleClick = async (e) => {
            e.preventDefault();
    
            const config = {
              headers: {
                'content-type': 'multipart/form-data',
              },
            };
            const bebenificierdeleted = await del('/bebenificier', formData.id, config);
            setPopupOpen(true);
        };

      const closePopup = () => {
          setPopupOpen(false);
          setFormData({ opinion: '', author: '',id:'' });
          setFile(null);
          };
    return (
        <>
        <div className="container_admin_tools"> 
        <h1 className='section__news__title'>PENDING BENIFICIER SECTION </h1>
        <div className="don__container">
        <form  >
            {isPopupOpen && <Validpopup onClose={closePopup} />}
            <div className="don__input-block">
                <input className="don__input" type="text" required="" placeholder="id"  name="id"  value={formData.id} onChange={handleChange} />
            </div>

            <div className="don__input-block">
                <input className="don__input" type="text" required="" placeholder='Name'   name="benificierName"  value={formData.benificierName} onChange={handleChange}/>
            </div>
            <div className="don__input-block">
                <input className="don__input" type="email" required="" placeholder='Benificier email'  name="benificierEmail"  value={formData.benificierEmail} onChange={handleChange}/>
            </div>
            <div className="don__input-block">
                <input className="don__input" type="text" required="" placeholder='Benificier Name'   name="benificier"  value={formData.benificier} onChange={handleChange}/>
            </div>
            <div className="don__input-block">
                <textarea className="don__input" type="text" required="" placeholder="Benificier Description" rows="3"   name="benificierDescription"  value={formData.benificierDescription} onChange={handleChange}/>
            </div>
            <div className="don__input-block">
                <input className="don__file-input" type="file" required="" name="file"  onChange={handleUpdateFile}/>
            </div>
            <div className="block_next_prev">
                <div onClick={handlePrevious}><Previous /></div>
                <div onClick={handleNext} ><Next /></div>
            </div>
           
            <div className="don__input-block">
                <button className="don__button" onClick={handleSubmit}>Accept</button>
                <button className="don__button" onClick={handleClick}>Reject</button>
            </div>
          
            </form>
            
            </div>
            </div>
            </>
            
    );
}
export default BebenificierAdmin;
