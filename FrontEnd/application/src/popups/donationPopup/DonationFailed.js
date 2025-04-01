import React from "react";
import './DonationFailed.css';
import wallet from "../../images/popup/wallet.svg";

function DonationFailedpopup (Props){
  const handleClick =  (e) => {
    
    Props.onClose();
    e.preventDefault();
  }
  return (
    <div  onClick={handleClick} className="FailedDonation__popup__container" >
        <a className="card__Failed__popup wallet" href="#">
        <div className="overlay"></div>
        <div className="circle">
        <img src={wallet} className="RapportpopupImg" />
        </div>
      <p>Error while sending donation !</p>
    </a>
    </div>

);
}
export default DonationFailedpopup ;