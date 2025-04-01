import {React ,useEffect }from "react";
import './Firstpopup.css';
import leaf from "../../images/popup/leaf-svgrepo-com.svg";
import wolf from "../../images/popup/wolf.svg";
import sun from "../../images/popup/sun.svg";
import pathanim from "../../images/popup/pathanim.svg";
import butterfly from "../../images/popup/butterfly.svg";
import close from "../../images/popup/close.svg";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";

function Fistpopup (Props){
  const navigate = useNavigate ();

 

  const handlepage =() => {
       if (Cookies.get('userType') === 'user'){
          navigate ('/homepage')
       }
       else if (Cookies.get('userType') === 'admin')  {
         navigate ('/Homepageadmin')
       }
       else {
         navigate ('/signup');
       }
  }

  const handleClose = () => {
    Props.onClose();
    handlepage(); // Call handlepage after closing the component
  }
    return(
        <div className="container__popup" >
        <div className="card__popup ">
        <img className="star-2" src={sun} />
        <img  src={leaf} className="star-3" />
        <img className="star-5" src={pathanim}/>
        <img className="star-6" src={pathanim} />
        <img className="star-44" src={pathanim} />
        <img className="star-33" src={pathanim} />
        <img className="star-8" src={pathanim}/>
        <img className="star-9" src={pathanim}/>
        <img className="star-10" src={pathanim}/>
         <img className="star-11" src={pathanim}/> 
        <img className="star-12" src={pathanim}/>
        <img className="star-13" src={pathanim}/>
        <img className="star-14" src={pathanim}/>
        <div className="card-info">
          <span>{Props.userName}</span>
          <span>{Props.text}</span>
        </div>
        <img  src={wolf} className="moon" />
        <img  src={butterfly} className="rocket" />
        <button onClick={handleClose} ><img className="close" src={close}/></button>
        
        </div>                    
      </div>
    )
}
export default Fistpopup ;