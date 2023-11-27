import React from 'react';
import './footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer(){
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h2>Contact Us</h2>
            <p style={{fontSize:'17px'}}>Email: dreamplots@gmail.com</p>
            <p style={{fontSize:'17px'}}>Phone: 04563-998824</p>
          </div>
          <div className="footer-section">
            <h2>Explore</h2>
            <ul style={{fontSize:'17px'}}>
              <li><a href="/loginnedhome">Home</a></li>
              <li><a href="/listings">Listings</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h2>Flats for Sale</h2>
            <ul style={{fontSize:'17px'}}>
              <li><a href="#">Flats in Coimbatore</a></li>
              <li><a href="/about">Flats in Chennai</a></li>
              <li><a href="/contact">Flats in Kochi</a></li>
              <li><a href="/listings">Flats in Mumbai</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h2>Follow Us</h2>
            <div className="social-icons">
              <a href="https://facebook.com"><i><FacebookIcon/></i></a>
              <a href="https://twitter.com"><i><TwitterIcon/></i></a>
              <a href="https://instagram.com"><i><InstagramIcon/></i></a>
              <a href="https://www.linkedin.com"><i><LinkedInIcon/></i></a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="footer-bottom">
        <p> 2023 Dream Plots Website. All rights reserved.</p>
      </div> */}
    </footer>
  );
};

export default Footer;