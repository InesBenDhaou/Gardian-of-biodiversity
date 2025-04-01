import React from "react";
import './Failed.css';
import rocket from "../../images/popup/rocket.svg";

function Failedpopup (Props){
  const handleClick =  (e) => {
    
    Props.onClose();
    e.preventDefault();
  }
  return (
    <div className="Failed__popup__container" onClick={handleClick}>
    <a className="card__Failed__popup wallet" href="#">
         <div className="overlay"></div>
      <div className="circle">
    <img src={rocket} className="RapportpopupImg" />
    
      </div>
      <p>Error while sending report !</p>
    </a>
    
    
    </div>
);
}
export default Failedpopup ;