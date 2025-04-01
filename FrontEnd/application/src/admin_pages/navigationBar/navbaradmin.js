
import React from "react";
import '../../pages/navigationBar/NavBar.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faOtter } from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from "react-router-dom";



function NavbarAdmin () {

  const navigate = useNavigate();

  const handelBenificierPage = () => {
    navigate('/BenificiersAdmin')
  }

  const handeldecouvertepage = () => {
    navigate('/DecouverteEtProtectionAdmin')
  }

  const handelhomepage = () => {
    navigate('/Homepageadmin')
  }
  const handleClickPartenairesAdmin =() => {
    navigate('/Partenairesadmin')
  }

  const handleClickProjetsAdmin =() => {
      navigate('/Projetsadmin')
  }
  const handleClickAssociationadmin = () => {
    navigate('/Associationadmin')
}


return (

<nav className='navbar'>
        <div className='navbar-container'>
          <div onClick={handelhomepage} className="sitename">
             Gardiens Of Biodiversity
            <FontAwesomeIcon icon={faOtter} />
          </div>
          <div className="sitecomponent">
          <ul  className= 'nav-menu' >
            <li className='nav-item' onClick={handleClickAssociationadmin}> Association </li>
            <li className='nav-item' onClick={handeldecouvertepage}> Decouverte et Protection </li>
            <li className='nav-item' onClick={handleClickPartenairesAdmin}> Partenaires  </li>
            <li className='nav-item'  onClick={handelBenificierPage}> Beneficiares </li>
            <li className='nav-item' onClick={handleClickProjetsAdmin}> Projets </li>
          </ul>
          
          </div>
        </div>
      </nav>
);
}


  export default NavbarAdmin ;