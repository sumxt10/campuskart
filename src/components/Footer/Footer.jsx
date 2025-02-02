import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src="" alt="CampusSpot Logo" className="logo" />
        </div>

        {/* Main Links Section */}
        <div className="footer-links-container">
          <div className="footer-section">
            <h3>Top Colleges</h3>
            <ul>
              <li><a href="#">MBA</a></li>
              <li><a href="#">BE/ B.Tech</a></li>
              <li><a href="#">M.Tech</a></li>
              <li><a href="#">BCA</a></li>
              <li><a href="#">MCA</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Top Exams</h3>
            <ul>
              <li><a href="#">UPSC</a></li>
              <li><a href="#">JEE</a></li>
              <li><a href="#">NEET</a></li>
              <li><a href="#">CAT</a></li>
              <li><a href="#">GATE</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Top Cities</h3>
            <ul>
              <li><a href="#">Mumbai</a></li>
              <li><a href="#">Ahmedabad</a></li>
              <li><a href="#">Delhi</a></li>
              <li><a href="#">Chennai</a></li>
              <li><a href="#">Pune</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Top Courses</h3>
            <ul>
              <li><a href="#">Engineering</a></li>
              <li><a href="#">Medical</a></li>
              <li><a href="#">Design</a></li>
              <li><a href="#">Pharmacy</a></li>
              <li><a href="#">Civil</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Support</h3>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Online Chat</a></li>
              <li><a href="#">Whatsapp</a></li>
              <li><a href="#">Telegram</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>FAQ</h3>
            <ul>
              <li><a href="#">Account</a></li>
              <li><a href="#">My Applications</a></li>
              <li><a href="#">Saved Colleges</a></li>
              <li><a href="#">My Reviews</a></li>
              <li><a href="#">Admission Process</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="footer-bottom">
          <div className="bottom-links">
            <a href="#">About us</a>
            <a href="#">Contact</a>
            <a href="#">Privacy policy</a>
            <a href="#">Terms of Use</a>
          </div>
          <div className="copyright">
            © 2000-2021, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;