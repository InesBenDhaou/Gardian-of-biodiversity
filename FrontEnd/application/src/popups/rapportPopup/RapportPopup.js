import React from "react";
import './rapportpopup.css';
import rocket from "../../images/popup/rocket.svg";

function Rapportpopup (Props){
  const handleClick =  (e) => {
    
    Props.onClose();
    e.preventDefault();
  }
  return (
<div className="container__Repportpopup" onClick={handleClick}>
<a className="Rapportpopupcard checked" href="#">
     <div className="overlay"></div>
  <div className="circle">
<img src={rocket} className="RapportpopupImg"/>

  </div>
  <p>repport sended succefully !</p>
</a>


</div>
);
}
export default Rapportpopup ;