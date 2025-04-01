
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faTwitter  } from '@fortawesome/free-brands-svg-icons';
import { faUser ,faKey } from '@fortawesome/free-solid-svg-icons';
import NavBar from "../../navigationBar/NavBar";
import {React,useState ,useEffect} from "react";
import { post } from '../../../utils/api.service';
import Firstpopup from '../../../popups/first/Firstpopup';
import "./LogIn.css";
import { UsersApi } from '../../../api/users.api';
import Cookies from 'js-cookie';
import {useNavigate} from "react-router-dom";


function LogIn() {
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        useremail: '',
        userpassword: ''
      });
    
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [isErrorPopupOpen, setErrorPopupOpen] = useState(false);
    const [connectedUser, setconnectedUser] = useState({});
   
  
    const handleInputChange = (e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
    const handlhomepageadmin = () => {
        navigate('/Homepageadmin')
    }
    const handlhomepageuser = () => {
      navigate('/homepage')
  }
    
    const handleSubmit = async (e) => {
          e.preventDefault();
          const user = {
              email: formData.useremail,
              password: formData.userpassword,
          };

          try {
              const createdUser = await post('/user/login', user);
              console.log('Login API Response:', createdUser); 
              if (createdUser.token) {
                const authToken = createdUser.token;
                const userType = createdUser.type; 
                Cookies.set('jwt', authToken);
                Cookies.set('userType', userType);
                const userConnected = await UsersApi.getconnectedUser();
          
                    if (userConnected && userConnected.id) {
                      setconnectedUser(userConnected);
                      setPopupOpen(true);
                      setFormData({
                        useremail: '',
                        userpassword: ''
                      })
                  } else {
                    
                  }
              }
              
          } catch (error) {
            setErrorPopupOpen(true);
          }
      };

    const closePopup = () => {
        setPopupOpen(false);
        setFormData({ useremail: '', userpassword: '' });
      };

 

    return (
      <div className="login">
        <NavBar />
      <div className="wrapper">
      {isPopupOpen && <Firstpopup onClose={closePopup} userName={connectedUser.name} text ="welcome back" />}
      {isErrorPopupOpen && <Firstpopup onClose={closePopup} userName='Error' text ="No user found" />}
        <form  onSubmit={handleSubmit} className='form__login' >
          <h1 className="Login__details">Login</h1>
          <div className="input-box">
            <input type="text" placeholder="UserEmail" name="useremail" value={formData.useremail} onChange={handleInputChange} required />
            <FontAwesomeIcon icon={faUser} className="icon__signUp" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" name="userpassword" value={formData.userpassword} onChange={handleInputChange} required />
            <FontAwesomeIcon icon={faKey} className="icon__signUp" />
          </div>
          <div className="remember-forgot">
            <label className="Login__details"><input type="checkbox" />Remember Me</label>
            <a href="#" className="Login__details">Forgot Password</a>
          </div>
          <button type="submit" className="btn">Login</button>
          <div className="register-link">
            <p className="Login__details">Don't have an account? <a href="/signup">Register</a></p>
          </div>
          <p className="log-in-with">Log in with</p>
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

  export default LogIn;
