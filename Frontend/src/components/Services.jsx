import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Service = () => {
  const [showDetails, setShowDetails] = useState(null);
  const sectionRef = useRef(null);
  const controls = useAnimation();

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

  // Animation variants for cards
  const cardVariants = {
    hidden: (direction) => ({
      y: direction === 'top' ? -120 : 120,
      opacity: 0,
    }),
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Intersection Observer to trigger animation when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [controls]);

  return (
    <div className="services-container" id='services' ref={sectionRef}>
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
        <motion.div
          className="service-card"
          custom="top" // Frontend card comes from left
          variants={cardVariants}
          initial="hidden"
          animate={controls}
        >
          <span role="img" aria-label="frontend">💻</span>
          <h3>Frontend Developer</h3>
          <a href="#" className="view-more" onClick={(e) => { e.preventDefault(); handleViewMore('frontend'); }}>
            View More →
          </a>
        </motion.div>
        <motion.div
          className="service-card"
          custom="bottom" // Backend card comes from right
          variants={cardVariants}
          initial="hidden"
          animate={controls}
        >
          <span role="img" aria-label="backend">📊</span>
          <h3>Backend Developer</h3>
          <a href="#" className="view-more" onClick={(e) => { e.preventDefault(); handleViewMore('backend'); }}>
            View More →
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Service;