import { useState , useEffect } from "react";
import React from "react";
import "../../../pages/descoverAndProtection/donAndProt/DonProt.css";
import "../news/homepage.css";
import Reclamationadmin from "./reclamation";
import Previous from "../../fleche/previous";
import Next from "../../fleche/next";
import { ReclamationsApi } from "../../../api/reclamations.api";
import { update } from "../../../utils/api.service";
import Validpopup from "../../../popups/adminPopup/popup";

function UpdateAdmin() {
    const [showAnotherComponent, setShowAnotherComponent] = useState(null);
    const [isPopupOpen, setPopupOpen] = useState(false);

    const handleClick = () => {
        setShowAnotherComponent(true);
      };

    const [Reclamations, setReclamations] = useState([]);

    useEffect(() => {
        ReclamationsApi.getAllReclamations().then((newReclamations) => {
          setReclamations(newReclamations);
          if (newReclamations.length > 0) {
            console.log(newReclamations)
            setFormData({
              id: newReclamations[0].id,
              opinion: newReclamations[0].opinion,
              author: newReclamations[0].author,
             
            });
          }
        });
      }, []);
      const [currentIndex, setCurrentIndex] = useState(0);
      const [formData, setFormData] = useState({
            id: "",
            opinion: "",
            author :"",
          
           
        });
      
      
        const handlePrevious = (e) => {
          e.preventDefault();
          setCurrentIndex((prevIndex) => (prevIndex === 0 ? Reclamations.length - 1 : prevIndex - 1));
          updateFormData();
        };
      
      const handleNext = (e) => {
          e.preventDefault();
          setCurrentIndex((prevIndex) => (prevIndex === Reclamations.length - 1 ? 0 : prevIndex + 1));
          updateFormData();
        };
      
    const updateFormData = () => {
          const reclamation = Reclamations[currentIndex];
          console.log (currentIndex)
          setFormData({
            id: reclamation.id,
            opinion: reclamation.opinion,
            author: reclamation.author,
        
          });
        };
        const [file, setFile] = useState()

        function handleUpdateFile(event) {
            setFile(event.target.files[0])
        }
      
    const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
          }));
        };
      
      
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const config = {
          headers: {
            'content-type': 'multipart/form-data',
          },
        };

        const fd = new FormData();
        fd.append('opinion', formData.newsType);
        fd.append('author', formData.newsTitle);
        fd.append('file',file)
        const reclamationupdated = await update('/reclamation', fd,formData.id, config);
        setPopupOpen(true);
      };
    
    const closePopup = () => {
        setPopupOpen(false);
        setFormData({ opinion: '', author: '' });
        setFile(null);
        };

    return (
        <>
            {showAnotherComponent ? (
            <Reclamationadmin />
        ) : (
        <div className="container_Report_tools"> 
        <h1 className='section__news__title'>REPORTS SECTION </h1>
        <div className="don__container">
        <form  >
            <div className="header">
                <h1 className="don__form__title">Update Report</h1>
            </div>
            {isPopupOpen && <Validpopup onClose={closePopup} />}
            <div className="don__input-block">
                <input className="don__input" type="text" required="" placeholder="id" name="id"  value={formData.id} onChange={handleChange} />
            </div>
            <div className="don__input-block">
                <textarea className="don__input" type="text" required="" placeholder="report description" name="opinion"  value={formData.opinion} onChange={handleChange}/>
            </div>
            <div className="don__input-block">
                <input className="don__input" type="text" required="" placeholder="author" name="author"  value={formData.author} onChange={handleChange} />
            </div>
            <div className="don__input-block">
                <input className="don__file-input"  required=""  type="file" name="file"  onChange={handleUpdateFile}  />
            </div>
            <div className="block_next_prev">
                <div onClick={handlePrevious}><Previous /></div>
                <div onClick={handleNext} ><Next /></div>
            </div>
           
            <div className="don__input-block">
                <button className="don__button" onClick={handleSubmit} >Submit</button>
                <button className="don__button" onClick={handleClick}>back</button>
            </div>
          
            </form>
            
            </div>
            </div>
            )}
            </>
            
    );
}
export default UpdateAdmin ; 