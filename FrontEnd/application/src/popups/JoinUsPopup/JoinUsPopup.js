import React from "react";
import '../rapportPopup/rapportpopup.css';
import Req from "../../images/popup/Req.svg";

function JoinUspopup (Props){
  return (
    <div  onClick={Props.onClose} style={{ position: 'fixed', top: '20%', left: '30%',  zIndex: 100000,height:100,width:100 , }}>
    
            <a className="Rapportpopupcard wallet" href="#">
                <div className="overlay"></div>
            <div className="circle">
            <img src={Req} className="RapportpopupImg"/>

            </div>
            <p>Request sended succefully !</p>
            </a>
    </div>

);
}
export default JoinUspopup ;