import React from 'react';
import './Details.css';

export function Details ()  {
  return (
    <div className="details-container">
      <h1 className="details-title">Indian Coast Guard - Detailed Information</h1>

      <section className="details-section">
        <h2 className="section-title">History and Formation</h2>
        <p className="section-description">
          The Indian Coast Guard was formally established on 1 February 1977 by the Coast Guard Act, 1978 of the Parliament of India. It operates under the Ministry of Defence. Its primary mission is to safeguard India's maritime interests and enforce maritime law, with jurisdiction over the territorial waters of India, including its contiguous zone and exclusive economic zone.
        </p>
        <div className="image-grid">
            <div className="image-item">
              <img src="/images/icg.png" alt="ICG History 1" className="clickable-image" />
            </div>
            <div className="image-item">
              <img src="/images/icg2.png" alt="ICG History 2" className="clickable-image" />
            </div>
        </div>
      </section>

      <section className="details-section">
        <h2 className="section-title">Key Roles and Responsibilities</h2>
        <p className="section-description">
          The ICG plays a vital role in maritime security, search and rescue, pollution response, and enforcing maritime laws. Its responsibilities include patrolling, surveillance, anti-smuggling, anti-piracy, and environmental protection.
        </p>
        <div className="image-grid">
            <div className="image-item">
              <img src="/images/icg3.png" alt="ICG Roles 1" className="clickable-image" />
            </div>
            <div className="image-item">
              <img src="/images/icg4.png" alt="ICG Roles 2" className="clickable-image" />
            </div>
            <div className="image-item">
                <img src="/images/icg5.png" alt="ICG Roles 3" className="clickable-image"/>
            </div>
        </div>
      </section>

      <section className="details-section">
        <h2 className="section-title">Fleet and Assets</h2>
        <p className="section-description">
          The ICG maintains a modern fleet of ships, aircraft, and hovercraft to carry out its diverse operations. This includes advanced offshore patrol vessels, fast patrol vessels, interceptor boats, Dornier aircraft, and helicopters.
        </p>
        <div className="image-grid">
            <div className="image-item">
              <img src="/images/slide1.png" alt="ICG Fleet 1" className="clickable-image" />
            </div>
            <div className="image-item">
              <img src="/images/slide4.png" alt="ICG Fleet 2" className="clickable-image" />
            </div>
        </div>
      </section>
    </div>
  );
};

export default Details;