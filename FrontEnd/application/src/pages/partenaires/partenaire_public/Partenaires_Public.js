import 'bootstrap/dist/css/bootstrap.min.css';
import './Partenaires_Public.css';
import { Zoom } from 'react-awesome-reveal';
import React from 'react';
import Marquee from 'react-fast-marquee';
import{ useEffect, useRef, useState } from 'react';

import { PartenairesApi } from '../../../api/partenaire.api';


function PartenairesPublic() {

  const [partenairesPublic, setpartenairesPublic] = useState([]);

    useEffect(() => {
      PartenairesApi.getPartenairePublic().then((newPartenaire)=>{
        setpartenairesPublic(newPartenaire);
      });
      
      
    }, []);

  return (
    <div className='container-fluid'>
       <div className="container-partenaire-entreprise">
      <Zoom>
      <h1 className='partneaires_type'>Our public partners</h1>
      <h3 className='partenaires_intro'>we proudly introduce our esteemed public partners. Together, we share a collective vision for safeguarding our precious ecosystems. Collaborating seamlessly with ministries and municipalities, our work extends beyond individual efforts, weaving a tapestry of commitment towards a sustainable and biodiverse future.</h3>
      </Zoom>
      <div className="partenaires_pulic_items">
        <div>
          <Marquee direction="right" speed={200} delay={5} className='sliderscroll_auto'>
            {partenairesPublic.map((item) => (
              <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">
                <div className="image_wrapper">
                  <img src={'data:image/png;base64,' +item.image} alt={`partner-logo-${item.id + 1}`} />
                </div>
              </a>
            ))}
          </Marquee>
        </div>
      </div>
      </div>
    </div>
  );
}

export default PartenairesPublic;
