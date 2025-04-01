import { React, useState } from "react";
import './DonProt.css';
import don from '../../../images/donandproc/donn.svg';
import proc from '../../../images/donandproc/report.svg';
import { post } from "../../../utils/api.service"
import RapportPopup from "../../../popups/rapportPopup/RapportPopup";
import Failedpopup from "../../../popups/rapportPopup/Failed";
import Donationpopup from "../../../popups/donationPopup/DonationPopup";
import DonationFailed from "../../../popups/donationPopup/DonationFailed";
import LogIn from "../../homepage/LogIn/LogIn";
import { useAuthentication } from '../../userauthentification';
import { useNavigate } from "react-router";

function DonationandProtection() {

    const navigate = useNavigate();
    const isLoggedIn = useAuthentication();
    const [formData, setFormData] = useState({
        username: '',
        description: '',
    });

    const [formDonationData, setFormDonationData] = useState({
        donatorname: '',
        cardNumber: '',
        expiryDate:'',
        cvv:'',

    });

    const [isPopupOpen, setPopupOpen] = useState(false);
    const [isFailedPopupOpen, setFailedPopupOpen] = useState(false);

    const [isDonationPopupOpen, setDonationPopupOpen] = useState(false);
    const [isFailedDonationPopupOpen, setFailedDonationPopupOpen] = useState(false);

    const [file, setFile] = useState()

    function handleUpdateFile(event) {
        setFile(event.target.files[0])
    }

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleInputFormDonationChange = (e) => {
        setFormDonationData({ ...formDonationData, [e.target.name]: e.target.value });
    };

    const handleclickLogIn = () => {
        navigate('/login')
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isLoggedIn ){

            if (!formData.username || !formData.description || !file) {
                setFailedPopupOpen(true);
            }

            const fd = new FormData();
            fd.append('opinion', formData.username);
            fd.append('author', formData.description);
            fd.append('file', file);

            try {
                const config = {
                    headers: {
                    'content-type': 'multipart/form-data',
                    },
                };
                const sendedRepport = await post('/pendingreclamation', fd, config);
                setPopupOpen(true);
                console.log('repport sended succefully', sendedRepport);
            } catch (error) {
                setFailedPopupOpen(true);
            }
        } else {
             handleclickLogIn();
        }
        
    };

    const handleDonationSubmit = async (e) => {
            e.preventDefault();
            const fd = new FormData();
            fd.append('donatorName', formDonationData.donatorname);
            fd.append('cardNumber', formDonationData.cardNumber);
            fd.append('expiryDate', formDonationData.expiryDate);
            fd.append('cvv', formDonationData.cvv);
            if (fd)
               setDonationPopupOpen(true);
            else 
               setFailedDonationPopupOpen(true);
    }
    
    
    const closePopup = () => {
        setPopupOpen(false);
        setFailedPopupOpen(false);
        setFailedDonationPopupOpen(false);
        setDonationPopupOpen(false);
        setFormData({ username: '', description: '' });
    };

    return (
        <section className="donandproc__container">
            <h1 className="donandproc__title">The ways of protection</h1>
            <div className="forms__container">
                <div className="don__container">
                    <div className="don__left">
                    {isDonationPopupOpen && <Donationpopup onClose={closePopup}/>}
                    {isFailedDonationPopupOpen && <DonationFailed onClose={closePopup}/>}
                        <form className="don__form" onSubmit={handleDonationSubmit}>
                            <div className="header">
                                <h1 className="don__form__title">Donate for them</h1>
                                <h5 className="don__form__smalltitle">-Your donation ensures the preservation of unique ecosystems and landscapes-</h5>
                            </div>
                            <div className="don__input-block">
                                <input className="don__input" type="text" required="" placeholder="Card Holder fullname" name="donatorname" value={formDonationData.donatorname} onChange={handleInputFormDonationChange}/>
                            </div>
                            <div className="don__input-block">
                                <input className="don__input" type="password" required="" placeholder="Card Number" name="cardNumber" value={formDonationData.cardNumber} onChange={handleInputFormDonationChange} />
                                
                            </div>
                            <div className="don__input-block">

                                <div className="expiry_cvv" >
                                    <input className="expiry_cvv__input" type="text" required="" placeholder="Expriry Date" name="expiryDate" value={formDonationData.expiryDate} onChange={handleInputFormDonationChange}/>
                                    <input className="expiry_cvv__input" type="text" required="" placeholder="Date/cvv" name="cvv" value={formDonationData.cvv} onChange={handleInputFormDonationChange}/>
                                </div>
                                

                            </div>

                            <div className="don__input-block">
                                <button className="don__button">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="don__right">
                        <div className="don__img">
                            <img className="donandproc__img" src={don} />
                        </div>

                    </div>
                </div>
                <div className="don__container">
                    <div className="don__left">
                    {isPopupOpen && <RapportPopup onClose={closePopup}/>}
                    {isFailedPopupOpen && <Failedpopup onClose={closePopup}/>}
                        <form className="don__form" onSubmit={handleSubmit}>
                            <div className="header">
                                <h1 className="don__form__title">Repport any Enfreindre</h1>
                                <h5 className="don__form__smalltitle">-Guardian of the Extraordinary: Your Voice Against Rare Spots' Disarray.Restore.Preserve.-</h5>
                            </div>
                            <div className="don__input-block">
                                <input className="don__input" type="text" required="" name="username" value={formData.username} placeholder="fullname" onChange={handleInputChange} />
                                
                            </div>
                            <div className="don__input-block">
                                <textarea className="don__input" required="" name="description" placeholder="description" value={formData.description} onChange={handleInputChange} />
                            </div>
                            <div className="don__input-block">

                                <input className="don__file-input" type="file" required="" name="file"  onChange={handleUpdateFile} />


                            </div>

                            <div className="don__input-block">
                                <button className="don__button">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="don__right">
                        <div className="don__img">
                            <img className="donandproc__img" src={proc} />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default DonationandProtection;