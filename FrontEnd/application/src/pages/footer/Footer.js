import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faOtter } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="container_footer">
        <div className="footer-content">
          <h3 className = "footer-title">Contact Us</h3>
          <p  className="links">Email: Info@example.com</p>
          <p  className="links">Phone: +121 56556 565556</p>
          <p  className="links">Address: Your Address 123 street</p>
        </div>
        <div className="footer-content">
          <h3 className = "footer-title">Quick Links</h3>
          <ul className="list">
            <li><a className="links" href="">About us</a></li>
            <li><a className="links" href="">Our partners </a></li>
            <li><a className="links" href="">Our beneficiaries</a></li>
            <li><a className="links" href="">Our projects</a></li>
          </ul>
        </div>
        <div className="footer-content footerfollow">        
        <h3 className = "footer-title" >Follow Us</h3>
        <ul className="social-icons">
            <li><a href=""><FontAwesomeIcon  icon={faFacebook}  /></a></li>
            <li><a href=""><FontAwesomeIcon  icon={faTwitter} /></a></li>
            <li><a href=""><FontAwesomeIcon  icon={faInstagram} /></a></li>
            <li><a href=""><FontAwesomeIcon  icon={faLinkedin} /></a></li>
        </ul>
        </div>
      </div>
      <div className="bottom-bar">
        <p>&copy; 2023 Guardian of biodiversity 
            <FontAwesomeIcon style={{ color: '#343434' }} icon={faOtter} />. All rights reserved</p>
    </div>
    </footer>
  );
};

export default Footer;