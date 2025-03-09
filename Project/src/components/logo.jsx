import React from "react";
import "./logo.css";

const logo = () => {
  return (
    <header className="header">
      <div className="header-section">
        <img src="/images/coast-guard-logo.png" alt="Indian Coast Guard Logo" className="logo" />
        <div>
          <h1 className="title">भारतीय तटरक्षक</h1>
          <h2 className="subtitle">Indian Coast Guard</h2>
        </div>
      </div>
      
      <div className="header-center">
      <img src="/images/indian-flag-coast-guard.png" alt="Indian Flag with Coast Guard" className="flag" />
      <div>
        <h3 className="motto">तैयार... तत्पर... जवाबदेह</h3>
        <h3 className="motto">Ready...Relevant...and Responsive</h3>
       </div>
      </div>

      <div className="header-section">
        <img src="/images/defence-ministry-logo.png" alt="Ministry of Defence Logo" className="logo2" />
        <div>
          <h1 className="title">रक्षा मंत्रालय</h1>
          <h2 className="subtitle">Ministry Of Defence</h2>
        </div>
      </div>
    </header>
  );
};

export default logo;
