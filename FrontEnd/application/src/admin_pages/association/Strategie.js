import "./strategie.css"
import climateImage from "../../images/association/climate_change_icon.svg";
import oceanImage from "../../images/association/ocean_life_icon.svg";
import plantsImage from "../../images/association/plants_icon.svg";
import animalImage from "../../images/association/animal_icon.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
const Strategie = () => {
   
    return(
        <div>
            <div className="strategie">
                <h1>Our strategy</h1>
            </div>
        
            <div className="row">
            <div className="col-md-3">
            <div className="card-body strategy-box">
                <div className="card-title ">
                <img src={climateImage} alt="Climate Change Icon" className="custom-svg-icon" />
                    <h5>Stabilize our climate</h5>
                </div>
                    <p class="card-text"><strong>Protect and restore ecosystems</strong> including forests, mangroves and peatlands that absorb climate-warming carbon.</p>
            </div>       
            </div>

            <div className="col-md-3">
            <div className="card-body strategy-box">
                <div className="card-title ">
                <img src={oceanImage} alt="Climate Change Icon" className="custom-svg-icon" />
                    <h5>Double ocean protection</h5>
                </div>
                    <p class="card-text"><strong>combating pollution, supporting marine biodiversity,</strong> and promoting sustainable fishing practices. we directly contribute to the well-being of countless marine species.</p>
            </div>       
            </div>

            <div className="col-md-3">
            <div className="card-body strategy-box">
                <div className="card-title ">
                <img src={animalImage} alt="Climate Change Icon" className="custom-svg-icon" />
                    <h5>Protect rare animals</h5>
                </div>
                <p class="card-text"><strong>Preserve biodiversity. Safeguard and restore habitats</strong> including critical ecosystems for rare animals. Discover our commitment to preserving biodiversity and protecting rare species by securing their natural habitat.</p>
            </div>       
            </div>

            <div className="col-md-3">
            <div className="card-body strategy-box">
                <div className="card-title ">
                <img src={plantsImage} alt="Climate Change Icon" className="custom-svg-icon" />
                    <h5>Expand planet-positive economies</h5>
                </div>
                    <p class="card-text"><strong>Promote self-sustaining economies</strong> that are built on the protection, not the destruction, of nature.</p>
            </div>       
            </div>
            </div>
        </div>
    );


};

export default Strategie;
