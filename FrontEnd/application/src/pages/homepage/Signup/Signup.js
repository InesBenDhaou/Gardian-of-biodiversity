import './Signup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faTwitter  } from '@fortawesome/free-brands-svg-icons';
import { faUser ,faKey } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {React,useState} from 'react';
import {post} from '../../../utils/api.service';
import NavBar from "../../navigationBar/NavBar";
import Firstpopup from '../../../popups/first/Firstpopup';
import { useNavigate } from 'react-router';
import { useAuthentication } from '../../userauthentification';
import Cookies from 'js-cookie';

function Signup () {
    
    const [isErrorPopupOpen, setErrorPopupOpen] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        useremail: '',
        userpassword: '',
        confirmPassword: '',
    });

    const [isPopupOpen, setPopupOpen] = useState(false);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            name: formData.username,
            email: formData.useremail,
            password: formData.userpassword,
        };

        try {
            const createdUser = await post('/user', user);
            const authToken = createdUser.token;
            Cookies.set('jwt', authToken);
            console.log('jwt', Cookies.get('jwt'));
            Cookies.set('userType', 'user');
            setPopupOpen(true);
        } catch (error) {
           
        }
    };

    const closePopup = () => {
        setPopupOpen(false);
        setFormData({ useremail: '', userpassword: '' });
      };

    
    
    return (
        <div className="signup">
            <NavBar />
            <div className="wrapper">
            {isPopupOpen && <Firstpopup onClose={closePopup} userName={formData.username} text ="welcome to the fam"/>}
            <form onSubmit={handleSubmit} >
                <h1 className='sign_up_title'>Sign Up</h1>
                <div className="input-box">
                <input type="text" placeholder="Username" name="username" value={formData.username} onChange={handleInputChange} required />
                <FontAwesomeIcon icon={faUser} className="icon__signUp" />
                </div>
                <div className="input-box">
                <input type="email" placeholder="Email" name="useremail" value={formData.useremail} onChange={handleInputChange} required />
                <FontAwesomeIcon icon={faEnvelope} className="icon__signUp" />
                </div>
                <div className="input-box">
                <input type="password" placeholder="Password" name="userpassword" value={formData.userpassword} onChange={handleInputChange} required />
                <FontAwesomeIcon icon={faKey} className="icon__signUp" />
                </div>
                <div className="input-box">
                <input type="password" placeholder="Confirme Password" name="ConfirmePassword" value={formData.ConfirmePassword} onChange={handleInputChange} required />
                <FontAwesomeIcon icon={faKey} className="icon__signUp" />
                </div>  
                <input type="submit" className="btn__signUp" value="Sign Up" />
                <p className="Sign-in-with">Sign up with</p>
                <div className="icons">
                <a href="#"><FontAwesomeIcon icon={faGoogle} className="fontAwesomeIcon" /></a>
                <a href="#"><FontAwesomeIcon icon={faFacebook} className="fontAwesomeIcon"/></a>
                <a href="#"><FontAwesomeIcon icon={faTwitter} className="fontAwesomeIcon"/></a>
                </div>
            </form>
            </div>
        </div> 
    );
}
export default Signup ;