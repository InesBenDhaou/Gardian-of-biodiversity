import {React ,useState ,useEffect}from "react";
import "../../../pages/descoverAndProtection/donAndProt/DonProt.css";
import '../../Homepages/news/homepage.css';
import AnimalAdmin from "./animal";
import Previous from "../../fleche/previous";
import Next from "../../fleche/next";
import { del } from "../../../utils/api.service";
import { AnimalsApi } from "../../../api/animals.api";
import Validpopup from "../../../popups/adminPopup/popup";

function DeleteAnimal() {
    const [showAnotherComponent, setShowAnotherComponent] = useState(null);
    const [Animals, setAnimals] = useState([]);
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [formData, setFormData] = useState({
        id: "",
        animalName: "",
     
       
    });
    
    const handleClick = () => {
        setShowAnotherComponent(true);
      };

    

    useEffect(() => {
        AnimalsApi.getAllAnimals().then((newAnimals) => {
          setAnimals(newAnimals);
          if (newAnimals.length > 0) {
            setFormData({
              id: newAnimals[0].id,
              animalName: newAnimals[0].title,
             
            });
          }
        });
      }, []);

    const handlePrevious = (e) => {
        e.preventDefault();
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? Animals.length - 1 : prevIndex - 1));
        updateFormData();
      };
    
    const handleNext = (e) => {
        e.preventDefault();
        setCurrentIndex((prevIndex) => (prevIndex === Animals.length - 1 ? 0 : prevIndex + 1));
        updateFormData();
      };
    
    const updateFormData = () => {
        const animal = Animals[currentIndex];
        console.log (currentIndex)
        setFormData({
          id: animal.id,
          animalName: animal.title,
          animalDescription: animal.description,
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

        const animaldeleted = await del('/animal', formData.id, config);
        setPopupOpen(true);
      };
    
    const closePopup = () => {
        setPopupOpen(false);
        setFormData({ animalName: '',id:''});
        
        };

    return (
        <>
        {showAnotherComponent ? (
        <AnimalAdmin/>
    ) : (
        <div className="container_admin_tools">
        <h1 className='section__news__title'>ANIMAL SECTION </h1>
        <div className="don__container">
        <form >
            <div className="header">
                <h1 className="don__form__title">Delete Animal</h1>
            </div>
            {isPopupOpen && <Validpopup onClose={closePopup} />}
            <div className="don__input-block">
                <input className="don__input" type="text" required="" placeholder="id" name="id"  value={formData.id} onChange={handleChange} />
            </div>
            <div className="don__input-block">
                <input className="don__input" type="text" required="" placeholder="Animal Name" name="animalName"  value={formData.animalName} onChange={handleChange} />
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
export default DeleteAnimal; 

  