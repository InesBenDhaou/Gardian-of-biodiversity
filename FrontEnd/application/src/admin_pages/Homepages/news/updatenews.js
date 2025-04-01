import { useState,useEffect } from "react";
import React from "react";
import "../../../pages/descoverAndProtection/donAndProt/DonProt.css";
import Newsadmin from "./news";
import "./homepage.css";
import Previous from "../../fleche/previous";
import Next from "../../fleche/next";
import { NewsApi } from "../../../api/news.api";
import { update } from "../../../utils/api.service";
import Validpopup from "../../../popups/adminPopup/popup";
function UpdateNews() {
    const [showAnotherComponent, setShowAnotherComponent] = useState(null);
    const [isPopupOpen, setPopupOpen] = useState(false);

    const handleClick = () => {
        setShowAnotherComponent(true);
      };

    const [news, setnews] = useState([]);

      useEffect(() => {
          NewsApi.getAllNews().then((newNews) => {
          setnews(newNews);
          if (newNews.length > 0) {
            // Set default form data to the first animal
            setFormData({
              id: newNews[0].id,
              newsType: newNews[0].type,
              newsTitle: newNews[0].title,
              newsDescription:newNews[0].description
              // Set more fields accordingly
            });
          }
        });
      }, []);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [formData, setFormData] = useState({
          id: "",
          newsType: "",
          newsTitle :"",
          newsDescription: "",
         
      });

      const [file, setFile] = useState()

      function handleUpdateFile(event) {
          setFile(event.target.files[0])
      }
    
    
      const handlePrevious = (e) => {
        e.preventDefault();
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? news.length - 1 : prevIndex - 1));
        updateFormData();
      };
    
    const handleNext = (e) => {
        e.preventDefault();
        setCurrentIndex((prevIndex) => (prevIndex === news.length - 1 ? 0 : prevIndex + 1));
        updateFormData();
      };
    
    const updateFormData = () => {
        const newss = news[currentIndex];
        console.log (currentIndex)
        setFormData({
          id: newss.id,
          newsType: newss.type,
          newsTitle: newss.title,
          newsDescription:newss.description,
        });
      };
    
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
        fd.append('type', formData.newsType);
        fd.append('title', formData.newsTitle);
        fd.append('description', formData.newsDescription);
        fd.append('file',file)
        const newsupdated = await update('/news', fd,formData.id, config);
        setPopupOpen(true);
      };
      const closePopup = () => {
        setPopupOpen(false);
       /* setFormData({ useremail: '', userpassword: '' });*/
      };
  

    return (
        <>
            {showAnotherComponent ? (
            <Newsadmin />
        ) : (
        <div className="container_admin_tools"> 
        <h1 className='section__news__title'>NEWS SECTION </h1>
        <div className="don__container">
        <form  >
            <div className="header">
                <h1 className="don__form__title">Update News</h1>
            </div>
            {isPopupOpen && <Validpopup onClose={closePopup} />}
            <div className="don__input-block">
                <input className="don__input" type="text" required="" placeholder="id" name='id'  value={formData.id} onChange={handleChange} />
            </div>
            <div className="don__input-block">
                <input className="don__input" type="text" required="" placeholder="type" name='newsType'  value={formData.newsType} onChange={handleChange} />
            </div>
            <div className="don__input-block">
                <textarea className="don__input" rows={4} required="" placeholder="title" name='newsTitle'  value={formData.newsTitle} onChange={handleChange} />
            </div>
            <div className="don__input-block">
                <textarea className="don__input"  required="" placeholder="description" name='newsDescription'  value={formData.newsDescription} onChange={handleChange} />
            </div>
            <div className="don__input-block">
                <input className="don__file-input"  required=""  type="file" name="file"  onChange={handleUpdateFile} />
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
export default UpdateNews ; 