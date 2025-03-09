import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-section">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="#">ICG Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">ICG History</a></li>
            <li><a href="#">Organization</a></li>
            <li><a href="#">Life at Sea</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Directorate of Recruitment,<br />
             Indian Coast Guard,<br />
             A Wing (Ground Floor), C-1, Sector-62,<br />
             Near Indus Valley Public School, Gautam Budh Nagar,<br />
             Noida, UP – 201309</p>
        </div>

        <div className="footer-logo">
          <img src="./images/coast-guard-logo.png" alt="Indian Coast Guard" />
          <p>Indian Coast Guard</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Designed & Developed by: <strong>AU_AEC</strong></p>
        <p>Last Updated: 03 March 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
