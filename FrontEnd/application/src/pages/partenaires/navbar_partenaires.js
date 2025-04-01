
import React from "react";
import '../Projets/navbar_projets.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faOtter } from '@fortawesome/free-solid-svg-icons';

function Navbar_partenaires () {

return (

<nav className='navbar_projets'>
        <div className='navbar_projets-container'>
            GOB
            <FontAwesomeIcon icon={faOtter} />

          <ul  className= 'nav_projets-menu' >
            <li className='nav_projets-item'><a href="#partenaires_public">Our public partners</a></li>
            <li className='nav_projets-item'><a href="#partenaires_associative"> Our associative partners </a></li>
            <li className='nav_projets-item'><a href="#partenaires_entreprise"> Our entreprise partners </a></li>
          </ul>
        </div>
      </nav>
);
}


  export default Navbar_partenaires ;