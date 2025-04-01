import {React ,useState ,useEffect}from "react";
import "../../../pages/descoverAndProtection/donAndProt/DonProt.css";
import '../news/homepage.css';
import Newsadmin from "./news";
import Previous from "../../fleche/previous";
import Next from "../../fleche/next";
import { NewsApi } from "../../../api/news.api";
import { del } from "../../../utils/api.service";
import Validpopup from "../../../popups/adminPopup/popup";

function DeleteNews() {
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
           
            setFormData({
              id: newNews[0].id,
              newsTitle: newNews[0].title,
           
             
            });
          }
        });
      }, []);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [formData, setFormData] = useState({
          id: "",
          newsTitle :"",
         
      });
    
    
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
          newsTitle: newss.title,
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

        const newsdeleted = await del('/news', formData.id, config);
        setPopupOpen(true);
    };

    const closePopup = () => {
      setPopupOpen(false);
     /* setFormData({ useremail: '', userpassword: '' });*/
    };


    return (
        <>
        {showAnotherComponent ? (
        <Newsadmin/>
    ) : (
        <div className="container_admin_tools">
        <h1 className='section__news__title'>NEWS SECTION </h1>
        <div className="don__container">
        <form >
            <div className="header">
                <h1 className="don__form__title">Delete News</h1>
            </div>
            {isPopupOpen && <Validpopup onClose={closePopup} />}
            <div className="don__input-block">
                <input className="don__input" type="text" required="" placeholder="id" name="id"  value={formData.id} onChange={handleChange} />
            </div>
            <div className="don__input-block">
                <textarea className="don__input" rows={4} required="" placeholder="News Title" name="newsTitled"  value={formData.newsTitle} onChange={handleChange} />
            </div>
            <div className="block_next_prev">
                <div onClick={handlePrevious}><Previous /></div>
                <div onClick={handleNext} ><Next /></div>
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
export default DeleteNews ; 

  