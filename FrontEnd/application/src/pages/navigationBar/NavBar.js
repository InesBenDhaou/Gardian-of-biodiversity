
import {React,useState,useEffect} from "react";
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faOtter } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from "react-router-dom";



function Navbar () {

  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };


  const handelBenificierPage = () => {
    navigate('/Benificiers')
  }

  const handeldecouvertepage = () => {
    navigate('/DecouverteEtProtection')
  }

  const handelhomepage = () => {
    navigate('/homepage')
  }

  const handelPartenairesPage = () => {
    navigate('/Partenaires')
  }

  const handelProjetspage = () => {
    navigate('/Projets')
  }

  const handelAssociationpage = () => {
    navigate('/association')
  }

return (

<nav className='navbar'>
        <div className='navbar-container'>
          <div onClick={handelhomepage} className="sitename">
             Gardiens Of Biodiversity
            <FontAwesomeIcon icon={faOtter} />
          </div>
          {/*{windowWidth <= 768 && (
          <div className="menu-icon" onClick={handleToggleMenu}>
            <FontAwesomeIcon icon={faList} />
          </div>
        )}
        {showMenu && windowWidth > 768 && (*/}

          <div className="sitecomponents">
            <ul className='nav-menu' >
              <li className='nav-item' onClick={handelAssociationpage}> Association </li>
              <li className='nav-item' onClick={handeldecouvertepage}> Decouverte et Protection </li>
              <li className='nav-item' onClick={handelPartenairesPage}> Partenaires  </li>
              <li className='nav-item' onClick={handelBenificierPage}> Beneficiares </li>
              <li className='nav-item' onClick={handelProjetspage}> Projets </li>
            </ul>
          </div>

        </div>
      </nav>
);
}


  export default Navbar ;