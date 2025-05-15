import React, { useState } from 'react';
 
const Service = () => {
  const [showDetails, setShowDetails] = useState(null);

  const backendDetails = [
    "Development of secure user login and registration systems.",
    "End-to-end web page development and optimization.",
    "Implementation of intuitive UX element interactions.",
    "Strategic positioning and branding for your company."
  ];

  const frontendDetails = [
    "Crafting professional UI/UX designs.",
    "Building responsive and adaptive web applications.",
    "Creating dynamic and interactive user interfaces."
  ];

  const handleViewMore = (service) => {
    setShowDetails(showDetails === service ? null : service);
  };

  return (
    <div className="services-container" id='services'>
      {showDetails && (
        <div className="details-modal" onClick={(e) => e.stopPropagation()}>
          <span className="close-modal" onClick={() => setShowDetails(null)}>×</span>
          <h3>{showDetails === 'backend' ? 'Backend Developer' : 'Frontend Developer'}</h3>
          <ul>
            {(showDetails === 'backend' ? backendDetails : frontendDetails).map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      )}
      {showDetails && <div className="modal-backdrop" onClick={() => setShowDetails(null)} />}
      <h2>Services</h2>
      <p className="subtext">What I offer</p>
      <div className="services-grid">
        <div className="service-card">
          <span role="img" aria-label="backend">📊</span>
          <h3>Backend Developer</h3>
          <a href="#" className="view-more" onClick={(e) => { e.preventDefault(); handleViewMore('backend'); }}>
            View More →
          </a>
        </div>
        <div className="service-card">
          <span role="img" aria-label="frontend">💻</span>
          <h3>Frontend Developer</h3>
          <a href="#" className="view-more" onClick={(e) => { e.preventDefault(); handleViewMore('frontend'); }}>
            View More →
          </a>
        </div>
      </div>
    </div>

  );
};
 
export default Service;