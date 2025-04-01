import {React ,useState,useEffect }from "react";
import "../../../pages/descoverAndProtection/donAndProt/DonProt.css";
import '../../Homepages/news/homepage.css';
import PreviousAdmin from "./previous";
import Previous from "../../fleche/previous";
import Next from "../../fleche/next";
import { del } from "../../../utils/api.service";
import { PreviousBenifsApi } from "../../../api/previousBenif";
import Validpopup from "../../../popups/adminPopup/popup";

function DeletePrevious() {
    const [showAnotherComponent, setShowAnotherComponent] = useState(null);
    const [isPopupOpen, setPopupOpen] = useState(false);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [formData, setFormData] = useState({
          id: "",
          previousName :"",
       
      });

    const handleClick = () => {
        setShowAnotherComponent(true);
      };
    
    const [PreviousBenifs, setPreviousBenifs] = useState([]);
          useEffect(() => {
          PreviousBenifsApi.getAllPreviousbenificiers().then((newPreviousBenifs) => {
            setPreviousBenifs(newPreviousBenifs);
            if (newPreviousBenifs.length > 0) {
                setFormData({
                  id: newPreviousBenifs[0].id,
                  previousName: newPreviousBenifs[0].name,
                 
                });
              }
            });
         
        }, []);

    
        const handlePrevious = () => {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? PreviousBenifs.length - 1 : prevIndex - 1));
            updateFormData();
          };
        
        const handleNext = () => {
            setCurrentIndex((prevIndex) => (prevIndex === PreviousBenifs.length - 1 ? 0 : prevIndex + 1));
            updateFormData();
          };
        
        const updateFormData = () => {
            const previous = PreviousBenifs[currentIndex];
            console.log (currentIndex)
            setFormData({
              id: previous.id,
              previousName: previous.name,
              
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
    
            const plantdeleted = await del('/previousbenificier', formData.id, config);
            setPopupOpen(true);
        };

        const closePopup = () => {
          setPopupOpen(false);
          setFormData({ previousName: '',id:'' });
         
          };
    return (
        <>
        {showAnotherComponent ? (
        <PreviousAdmin/>
    ) : (
        <div className="container_admin_tools">
         <h1 className='section__news__title'>PRIVIOUS BENIFICIER SECTION </h1>
        <div className="don__container">
        <form >
            <div className="header">
                <h1 className="don__form__title">Delete Previous Benificier</h1>
            </div>
            {isPopupOpen && <Validpopup onClose={closePopup} />}
            <div className="don__input-block">
                <input className="don__input" type="text" required="" placeholder="id" value={formData.id} onChange={handleChange}/>
            </div>
            <div className="don__input-block">
                <input className="don__input" type="text" required="" placeholder="Benificier Name" value={formData.previousName} onChange={handleChange} />
            </div>
            <div className="block_next_prev">
                <div onClick={handlePrevious}><Previous /></div>
                <div onClick={handleNext}><Next /></div>
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
export default DeletePrevious; 

  