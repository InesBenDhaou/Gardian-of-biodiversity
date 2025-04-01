import React from "react";
import './popup.css';
import checked from "../../images/popup/checked.svg";

function Validpopup (Props){
  const handleClick =  (e) => {
    
    Props.onClose();
    e.preventDefault();
  }
  return (
    <div  onClick={handleClick} className="container__validpopup" >
        <a className="card__valid__popup checked" href="#">
        <div className="overlay"></div>
        <div className="circle">
        <img src={checked} className="popupImg" />
        </div>
      <p>Done Succefully !</p>
    </a>
    </div>

);
}
export default Validpopup ;