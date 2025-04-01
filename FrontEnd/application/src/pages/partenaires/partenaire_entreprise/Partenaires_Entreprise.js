import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Partenaires_Entreprise.css';
import { Zoom } from 'react-awesome-reveal';
import{ useEffect, useRef, useState } from 'react';

import zanimo from '../../../images/partenaires/zanimo.png';
import urbanGreen from '../../../images/partenaires/UrbanGreen.jpg';
import wildyNess from '../../../images/partenaires/wildyNess.png';
import blueJet from '../../../images/partenaires/blueJet.jpg';

import { PartenairesApi } from '../../../api/partenaire.api';



  const Partenaire_entreprise_Card = ({ id, image, name, description, link }) => (
    <div className="custom-card-partenaire-entreprise col" key={id}>
      <div className="img-box-partenaire-entreprise">
        <img className="partenaire-entreprise-img" src={'data:image/png;base64,' +image} alt={name} />
      </div>
      <div className="custom-content-partenaire-entreprise">
        <h2>{name}</h2>
        <p>{description}</p>
        <a href={link}>Explore</a>
      </div>
    </div>
  );
  
function PartenairesEntreprise(){
  const [partenairesEntreprise, setpartenairesEntreprise] = useState([]);

    useEffect(() => {
      PartenairesApi.getPartenaireEntreprise().then((newPartenaire)=>{
        setpartenairesEntreprise(newPartenaire);
      });
      
      
    }, []);
 
    return(
        <div className='container-fluid'>
      
      
       
        <div className="container-partenaire-entreprise">
        <Zoom>
          <h1 className='partneaires_type'>Our entreprise partners</h1>
          <h3 className='partenaires_entreprise_intro'>
          Explore this section to delve into the stories of our enterprise partnerships, where purpose-driven commerce meets the pursuit of a greener, more sustainable world. Through innovative initiatives and the positive impact created by our enterprise partners, we have achieved numerous conservation projects, contributing significantly to the preservation of biodiversity.
          </h3>
        </Zoom>
        <div className="container row row-cols-3">
        {partenairesEntreprise.map(partenaire => (
            <Partenaire_entreprise_Card key={partenaire.id} {...partenaire} />
        ))}
        </div>
        </div>
        </div>
        );
    }
export default PartenairesEntreprise