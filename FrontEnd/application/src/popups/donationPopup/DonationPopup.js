import React from "react";
import '../rapportPopup/rapportpopup.css';
import wallet from "../../images/popup/wallet.svg";

function Donationpopup (Props){
  const handleClick =  (e) => {
    
    Props.onClose();
    e.preventDefault();
  }
  return (
    <div  onClick={handleClick} style={{ position: 'fixed', top: '35%', left: '10%',  zIndex: 1000 }}>
    
            <a className="Rapportpopupcard wallet" href="#">
                <div className="overlay"></div>
            <div className="circle">
            <img src={wallet} className="RapportpopupImg"/>

            </div>
            <p>donation sended succefully !</p>
            </a>
    </div>

);
}
export default Donationpopup ;