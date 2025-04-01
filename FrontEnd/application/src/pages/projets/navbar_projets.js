
import React from "react";
import './navbar_projets.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faOtter } from '@fortawesome/free-solid-svg-icons';

function Navbar_projets () {

return (

<nav className='navbar_projets'>
        <div className='navbar_projets-container'>
            GOB
            <FontAwesomeIcon icon={faOtter} />

          <ul  className= 'nav_projets-menu' >
            <li className='nav_projets-item'><a href="#projets_section_div">Our Projects</a></li>
            <li className='nav_projets-item'><a href="#forthcoming_events_div"> Our furthcoming events </a></li>
            <li className='nav_projets-item'><a href="#acheivements_div"> acheivements </a></li>
          </ul>
        </div>
      </nav>
);
}


  export default Navbar_projets ;