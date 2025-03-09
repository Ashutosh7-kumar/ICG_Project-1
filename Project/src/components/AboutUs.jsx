import React from "react";
import "./AboutUs.css";

const About_Us = () => {
    return (
        <div className="about-container">
            <h1 className="about-title">About Us - Indian Coast Guard</h1>
            <p className="about-description">
                The Indian Coast Guard (ICG) is a maritime force responsible for safeguarding India’s vast coastline, ensuring national security, and protecting marine environments. Established in 1978, the ICG operates under the Ministry of Defence and works alongside the Indian Navy, Marine Police, and other agencies to ensure the safety of territorial waters.
            </p>

            <h2 className="about-heading">Our Mission</h2>
            <ul className="about-list">
                <li><strong>Maritime Security:</strong> Protecting Indian waters from threats like smuggling, piracy, and illegal fishing.</li>
                <li><strong>Search and Rescue Operations:</strong> Conducting lifesaving missions for distressed vessels and seafarers.</li>
                <li><strong>Environmental Protection:</strong> Preventing marine pollution and enforcing maritime laws.</li>
                <li><strong>Disaster Relief:</strong> Providing assistance during natural calamities such as cyclones and tsunamis.</li>
            </ul>

            <h2 className="about-heading">Roles & Responsibilities</h2>
            <ul className="about-list">
                <li>Patrolling and surveillance of Exclusive Economic Zone (EEZ).</li>
                <li>Preventing illegal immigration and human trafficking.</li>
                <li>Assisting in anti-narcotics and anti-smuggling operations.</li>
                <li>Enforcing international maritime laws within Indian waters.</li>
            </ul>
        </div>
    );
};

export default About_Us;



