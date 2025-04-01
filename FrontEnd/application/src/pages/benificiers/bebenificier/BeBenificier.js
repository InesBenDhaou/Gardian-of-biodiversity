import './BeBenificier.css';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import zarafa from "../../../images/bebenificier.jpg";
import {React,useState} from 'react';
import { post } from '../../../utils/api.service';
import { useNavigate } from "react-router";
import { useAuthentication } from '../../userauthentification';
import Rapportpopup from '../../../popups/rapportPopup/RapportPopup';

function BeBenifier () {

    const navigate = useNavigate();
    const isLoggedIn = useAuthentication();
    const [isPopupOpen, setPopupOpen] = useState(false);


    const handleclickLogIn = () => {
        navigate('/login')
    }

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        email:'',
        benificier:''
    });
   
    const [file, setFile] = useState()

    function handleUpdateFile(event) {
        setFile(event.target.files[0])
    }
  
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isLoggedIn){
        const config = {
          headers: {
            'content-type': 'multipart/form-data',
          },
        };

        const fd = new FormData();
        fd.append('name', formData.name);
        fd.append('description', formData.description);
        fd.append('email', formData.email);
        fd.append('benificier', formData.benificier);
        fd.append('file', file);

        const bebenificieradded = await post('/bebenificier', fd, config);
        setFormData({
            name: '',
            description: '',
            email: '',
            benificier: ''
        });
        setFile(null);
        setPopupOpen(true);
        
      }
      else {
        handleclickLogIn();
     }
          
      };

    const closePopup = () => {
        setPopupOpen(false);
    };

  return (
        <div className="contact__container">
            <main className="row">
                <section className="col first">
                    <img src={zarafa} className='image__be__benificier' ></img>
                </section>
                <section className="col left">
                    <div className="contactTitle">
                        <h2>Be Benificier</h2>
                        <p>Join our association ! u can cantact us from the information bellow or you can just fell the form</p>
                    </div>

                    <div className="contactInfo">
                         <div className="iconGroup">
                            <div className="icon">
                                  <FontAwesomeIcon icon={faPhone} className='fai' />
                            </div>
                            <div className="details">
                                <span>Phone</span>
                                <span>+216 73 111 000</span>
                            </div>
                        </div>
    
                        <div className="iconGroup">
                            <div className="icon">
                                 <FontAwesomeIcon icon={faEnvelope} className='fai'/>
                            </div>
                            <div className="details">
                                <span>Email</span>
                                <span>Guardian.bio@gmail.com</span>
                            </div>
                        </div>
    
                        <div className="iconGroup">
                            <div className="icon">
                            <FontAwesomeIcon icon={faLocationDot} className='fai' />
                            </div>
                            <div className="details">
                                <span>Location</span>
                                <span>Monastir, stah Jabeur</span>
                            </div>
                        </div>
    
                    </div>
    
                    <div className="socialMedia">
                        <a href="#"><FontAwesomeIcon icon={faFacebookF} className='fai' /></a>
                        <a href="#"><FontAwesomeIcon icon={faInstagram} className='fai' /></a>
                        <a href="#"><FontAwesomeIcon icon={faLinkedinIn} className='fai' /></a>
                    </div>
    
                </section>
    
                <section className="col right">
                    <form className="messageForm" onSubmit={handleSubmit}>
                    {isPopupOpen && <Rapportpopup onClose={closePopup} />}
                        <div className="inputGroup halfWidth">
                            <input type="text" name="name" required="required" value={formData.name} onChange={handleInputChange}/>
                            <label>Your Name</label>
                        </div>
    
                        <div className="inputGroup halfWidth">
                            <input type="email" name="email" required="required" value={formData.email} onChange={handleInputChange}/>
                            <label>Email</label>
                        </div>
    
                        <div className="inputGroup fullWidth">
                            <input type="text" name="benificier" required="required" value={formData.benificier} onChange={handleInputChange} />
                            <label>benificier</label>
                        </div>
    
                        <div className="inputGroup fullWidth">
                            <textarea required="required" value={formData.description} onChange={handleInputChange} name="description"></textarea>
                            <label>why you want to be benificier</label>
                        </div>

                        <div className="inputGroup fullWidth">
                            <input required="required"  name="file" type='file' onChange={handleUpdateFile}/> 
                        </div>
                        <div className="inputGroup fullWidth">
                            <button>Send Message</button>
                        </div>
    
                    </form>
    
                </section>
    
            </main>
        </div>
  );
}
export default BeBenifier ; 