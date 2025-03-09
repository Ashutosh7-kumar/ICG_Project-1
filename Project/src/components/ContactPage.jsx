import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-sections">
        <div className="contact-section">
          <h2>OFFICERS CELL @ ICG</h2>
          <p>(For Queries / Clarifications regarding Eligibility, Advertisement, and Selection Procedure)</p>
          <h3>Public Relation Officer (Recruitment)</h3>
          <div className="contact-info">
            <p>
              <strong>E-Mail:</strong> dte-rectofficer@indiancoastguard.nic.in
            </p>
            <p>
              <strong>Tele:</strong> 0120-2201340
            </p>
          </div>
        </div>
        <div className="contact-section">
          <h2>OFFICERS CELL @ C-DAC</h2>
          <p>(For Queries / Clarifications regarding Online Registration, Payment Issues, e-Admit Card, etc.)</p>
          <h3>Helpdesk</h3>
          <div className="contact-info">
            <p>
              <strong>E-Mail:</strong> icg-officers@cdac.in
            </p>
            <p>
              <strong>Tele:</strong> 020-25503108 / +91 7620255991
            </p>
            <p>020-25503109 / +91 7620207872</p>
          </div>
        </div>
      </div>
      <div className="tele-timings">
        <h3>Tele Timings:</h3>
        <p>9:30 AM - 1 PM & 2 PM - 5:30 PM</p>
        <p>(Monday to Friday, except holidays)</p>
      </div>
    </div>
  );
};

export default ContactPage;
