import { React, useState ,useEffect} from "react";
import '../../../pages/descoverAndProtection/donAndProt/DonProt.css';
import don from '../../../images/donandproc/donn.svg';
import proc from '../../../images/donandproc/report.svg';
import { del, post } from "../../../utils/api.service"
import "../../Homepages/news/homepage.css";
import Previous from "../../fleche/previous";
import Next from "../../fleche/next";
import { PendingReportsApi } from "../../../api/pendingReports.api";
import Validpopup from "../../../popups/adminPopup/popup";

function Forms() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPopupOpen, setPopupOpen] = useState(false);

    const [formData, setFormData] = useState({
        id: '',
        opinion: '',
        author:'',
       

    });

    const [formDonationData, setFormDonationData] = useState({
        donatorname: '',
        cardNumber: '',
        expiryDate:'',
        cvv:'',

    });

   
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
    
    const [PendingRepports, setPendingRepports] = useState([]);
        useEffect(() => {
            PendingReportsApi.getAllPendingRepports().then((newPendingRepports) => {
          setPendingRepports(newPendingRepports);
          if (newPendingRepports.length > 0) {
            setFormData({
              id: newPendingRepports[0].id,
              opinion: newPendingRepports[0].opinion,
              author: newPendingRepports[0].author,  image:'data:image/png;base64,' + newPendingRepports[0].image
            });
          }
        });
    
      }, []);

    const handlePrevious = (e) => {
        e.preventDefault();
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? PendingRepports.length - 1 : prevIndex - 1));
        updateFormData();
      };
    
    const handleNext = (e) => {
        e.preventDefault();
        setCurrentIndex((prevIndex) => (prevIndex === PendingRepports.length - 1 ? 0 : prevIndex + 1));
        updateFormData();
      };
    
    const updateFormData = () => {
        const pendingRepports = PendingRepports[currentIndex];
        console.log (currentIndex)
        setFormData({
          id: pendingRepports.id,
          opinion: pendingRepports.opinion,
          author: pendingRepports.author,
          image : 'data:image/png;base64,' + pendingRepports.image
        });
      };

    const handleAccept = async (e) => {
        e.preventDefault();
        const fd = new FormData();
        fd.append('opinion', formData.opinion);
        fd.append('author', formData.author);
        fd.append('file', file);

        try {
            const config = {
                headers: {
                  'content-type': 'multipart/form-data',
                },
              };
            const sendedRepport = await post('/reclamation', fd, config);
            const deletePendingRepport = await del ('/pendingreclamation',formData.id,config);
            setPopupOpen(true);
            handleNext();
            console.log('repport accepted succefully', sendedRepport);
            console.log('pending repport deleted  succefully', deletePendingRepport);
        } catch (error) {
           
        }
    };

    const closePopup = () => {
        setPopupOpen(false);
        setFormData({ opinion: '',author:'',id:''});
        setFile(null);
        
        };

   
    return (
        <section className="donandproc__container">
            <h1 className="donandproc__title">Protection Section</h1>
            <div className="forms__container">
                <div className="don__container">
                    <div className="don__left">
                        <form className="don__form" >
                            <div className="header">
                                <h1 className="don__form__title">Donation Form </h1>
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
                            <div className="block_next_prev">
                                <div onClick={handlePrevious} ><Previous /></div>
                                <div onClick={handleNext}><Next /></div>
                            </div>
                            <div className="don__input-block">
                                <button className="don__button" onClick={handleAccept}>Accept</button>
                                <button className="don__button">Reject</button>
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
                        <form className="don__form" >
                            <div className="header">
                                <h1 className="don__form__title">Repport Form</h1>
                            </div>
                            {isPopupOpen && <Validpopup onClose={closePopup} />}
                            <div className="don__input-block">
                                <input className="don__input" type="text" required="" name="id" value={formData.id} placeholder="fullname" onChange={handleInputChange} />
                                
                            </div>
                            <div className="don__input-block">
                                <input className="don__input" type="text" required="" name="author" value={formData.author} placeholder="fullname" onChange={handleInputChange} />
                                
                            </div>
                            <div className="don__input-block">
                                <textarea className="don__input" required="" name="author" placeholder="opinion" value={formData.opinion} onChange={handleInputChange} />
                            </div>
                            <div className="don__input-block">

                                <input className="don__file-input" type="file" required="" name="file"  onChange={handleUpdateFile} />
                            </div>
                            <div className="block_next_prev">
                                <div onClick={handlePrevious}><Previous /></div>
                                <div onClick={handleNext}><Next /></div>
                            </div>
                            <div className="don__input-block">
                                <button className="don__button" onClick={handleAccept} >Accept</button>
                                <button className="don__button" >Reject</button>
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

export default Forms;