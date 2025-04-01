import {React ,useState ,useEffect}from "react";
import "../../../pages/descoverAndProtection/donAndProt/DonProt.css";
import '../../Homepages/news/homepage.css';
import PlantAdmin from "./plants";
import Previous from "../../fleche/previous";
import Next from "../../fleche/next";
import { PlantsApi } from "../../../api/plants.api";
import { del } from "../../../utils/api.service";

function DeletePlant() {
    const [showAnotherComponent, setShowAnotherComponent] = useState(null);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [formData, setFormData] = useState({
          id: "",
          plantName :"",
          
         
      });
    

    const handleClick = () => {
        setShowAnotherComponent(true);
      };
      
      const [Plants, setPlants] = useState([]);
      useEffect(() => {
      PlantsApi.getAllPlants().then((newPlants) => {
        setPlants(newPlants);
        if (newPlants.length > 0) {
          setFormData({
            id: newPlants[0].id,
            plantName: newPlants[0].title,
           
          });
        }
      });
    }, []);
  
    const handlePrevious = (e) => {
      e.preventDefault();
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? Plants.length - 1 : prevIndex - 1));
      updateFormData();
    };
  
  const handleNext = (e) => {
    e.preventDefault();
      setCurrentIndex((prevIndex) => (prevIndex === Plants.length - 1 ? 0 : prevIndex + 1));
      updateFormData();
    };
  
  const updateFormData = () => {
      const plant = Plants[currentIndex];
      console.log (currentIndex)
      setFormData({
        id: plant.id,
        plantName:plant.title,
       
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

        const plantdeleted = await del('/plant', formData.id, config);
    };
    
    return (
        <>
        {showAnotherComponent ? (
        <PlantAdmin/>
    ) : (
        <div className="container_admin_tools">
        <h1 className='section__news__title'>PLANTS SECTION </h1>
        <div className="don__container">
        <form >
            <div className="header">
                <h1 className="don__form__title">Delete Plant</h1>
            </div>
            <div className="don__input-block">
                <input className="don__input" type="text" required="" placeholder="id"  name="id"  value={formData.id} onChange={handleChange} />
            </div>
            <div className="don__input-block">
                <input className="don__input" type="text" required="" placeholder="Plant Name"  name="plantName"  value={formData.plantName} onChange={handleChange} />
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
export default DeletePlant ; 

  