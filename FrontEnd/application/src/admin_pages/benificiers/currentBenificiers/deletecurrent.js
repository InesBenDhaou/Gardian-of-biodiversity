import {React ,useState ,useEffect}from "react";
import "../../../pages/descoverAndProtection/donAndProt/DonProt.css";
import '../../Homepages/news/homepage.css';
import CurrentAdmin from "./current";
import Previous from "../../fleche/previous";
import Next from "../../fleche/next";
import { del } from "../../../utils/api.service";
import { CurrentBenifsApi } from "../../../api/currentBenif";
import Validpopup from "../../../popups/adminPopup/popup";

function DeleteCurrent() {
    const [showAnotherComponent, setShowAnotherComponent] = useState(null);
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [formData, setFormData] = useState({
          id: "",
          currentName :"",
          
         
      });

    const handleClick = () => {
        setShowAnotherComponent(true);
      };

    const [CurrentBenifs, setCurrentBenifs] = useState([]);
          useEffect(() => {
          CurrentBenifsApi.getAllCurrentBenifs().then((newCurrentBenifs) => {
              setCurrentBenifs(newCurrentBenifs);
              if (newCurrentBenifs.length > 0) {
                setFormData({
                  id: newCurrentBenifs[0].id,
                  currentName: newCurrentBenifs[0].name,
              
                });
              }
            });
         
        }, []);
      
        const handlePrevious = () => {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? CurrentBenifs.length - 1 : prevIndex - 1));
            updateFormData();
          };
        
        const handleNext = () => {
            setCurrentIndex((prevIndex) => (prevIndex === CurrentBenifs.length - 1 ? 0 : prevIndex + 1));
            updateFormData();
          };
        
        const updateFormData = () => {
            const current = CurrentBenifs[currentIndex];
            console.log (currentIndex)
            setFormData({
              id: current.id,
              currentName: current.name,
              
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
            const currentbenificierdeleted = await del('/currentbenificier', formData.id, config);
            setPopupOpen(true);
        };
      
      const closePopup = () => {
          setPopupOpen(false);
          setFormData({ currentName: '', id: ''});
     
          };

    return (
        <>
        {showAnotherComponent ? (
        <CurrentAdmin/>
    ) : (
        <div className="container_admin_tools">
        <h1 className='section__news__title'>CURRENT BENIFICIER SECTION </h1>
        <div className="don__container">
        <form >
            <div className="header">
                <h1 className="don__form__title">Delete Current Benificier</h1>
            </div>
            {isPopupOpen && <Validpopup onClose={closePopup} />}
            <div className="don__input-block">
                <input className="don__input" type="text" required="" placeholder="id" name="id"  value={formData.id} onChange={handleChange}  />
            </div>
            <div className="don__input-block">
                <input className="don__input" type="text" required="" placeholder="Benificier Name"  name="currentName"  value={formData.currentName} onChange={handleChange} />
            </div>
            <div className="block_next_prev">
                <div onClick={handlePrevious}><Previous /></div>
                <div onClick={handleNext}><Next /></div>
            </div>
            <div className="don__input-block">
                <button className="don__button"  onClick={handleSubmit}>Submit</button>
                <button className="don__button" onClick={handleClick}>back</button>
            </div>
          
            </form>
            </div>
            </div>
            )}
            </>
            
            
    );
}
export default DeleteCurrent; 

  