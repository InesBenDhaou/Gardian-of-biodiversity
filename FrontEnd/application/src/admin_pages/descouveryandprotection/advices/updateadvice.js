import { useState ,useEffect } from "react";
import React from "react";
import "../../../pages/descoverAndProtection/donAndProt/DonProt.css";
import "../../Homepages/news/homepage.css";
import AdviceAdmin from "./advice";
import Previous from "../../fleche/previous";
import Next from "../../fleche/next";
import { AdvicesApi } from "../../../api/advices.api";
import { update } from "../../../utils/api.service";
import Validpopup from "../../../popups/adminPopup/popup";

function UpdateAdvice() {
    const [showAnotherComponent, setShowAnotherComponent] = useState(null);
    const [isPopupOpen, setPopupOpen] = useState(false);

    const handleClick = () => {
        setShowAnotherComponent(true);
      };

    const [currentIndex, setCurrentIndex] = useState(0);
    const [formData, setFormData] = useState({
          id: "",
          adviceDescription: "",
         
      });
    const [Advices, setAdvices] = useState([]);

      useEffect(() => {
        AdvicesApi.getAllAdvices().then((newAdvices) => {
          setAdvices(newAdvices);
          if (newAdvices.length > 0) {
            // Set default form data to the first animal
            setFormData({
              id: newAdvices[0].id,
              adviceDescription: newAdvices[0].description,
              // Set more fields accordingly
            });
          }
        });
      }, []);
    
    const handlePrevious = (e) => {
        e.preventDefault();
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? Advices.length - 1 : prevIndex - 1));
        updateFormData();
      };
    
    const handleNext = (e) => {
        e.preventDefault();
        setCurrentIndex((prevIndex) => (prevIndex === Advices.length - 1 ? 0 : prevIndex + 1));
        updateFormData();
      };
    
    const updateFormData = () => {
        const advice = Advices[currentIndex];
        console.log (currentIndex)
        setFormData({
          id: advice.id,
          adviceDescription: advice.description,
        });
      };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
    
    const [file, setFile] = useState()

      function handleUpdateFile(event) {
          setFile(event.target.files[0])
      }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const config = {
          headers: {
            'content-type': 'multipart/form-data',
          },
        };

        const fd = new FormData();
        fd.append('description', formData.description);
        fd.append('file',file)
        const adviceupdated = await update('/advice', fd,formData.id, config);
        setPopupOpen(true);
      };
    
    const closePopup = () => {
        setPopupOpen(false);
        setFormData({ adviceDescription: ''});
        setFile(null);
        };


    return (
        <>
            {showAnotherComponent ? (
            <AdviceAdmin />
        ) : (
        <div className="container_admin_tools"> 
        <h1 className='section__news__title'>Advice SECTION </h1>
        <div className="don__container">
        <form  >
            <div className="header">
                <h1 className="don__form__title">Update Advice</h1>
            </div>
            {isPopupOpen && <Validpopup onClose={closePopup} />}
            <div className="don__input-block">
                <input className="don__input" type="text" required="" placeholder="id" name="id"  value={formData.id} onChange={handleChange}/>
            </div>
           
            <div className="don__input-block">
                <textarea className="don__input" rows={4} required="" placeholder="Advice Description" name="adviceDescription"  value={formData.adviceDescription} onChange={handleChange} />
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
export default UpdateAdvice ; 