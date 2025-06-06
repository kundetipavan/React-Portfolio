import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import Framer Motion

const Skill = () => {
  const [visibleSkills, setVisibleSkills] = useState('frontend');
  const skillSectionRef = useRef(null);

  // Intersection Observer for initial card animations
  useEffect(() => {
    const cards = skillSectionRef.current?.querySelectorAll('.skill-card');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && cards) {
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animated');
            }, index * 150);
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (skillSectionRef.current) {
      observer.observe(skillSectionRef.current);
    }

    return () => observer.disconnect();
  }, [visibleSkills]);

  const frontendSkills = [
    { image: "/html.png", name: "HTML" },
    { image: "/css.png", name: "CSS" },
    { image: "/js.png", name: "JavaScript" },
    { image: "/react.svg", name: "React" },
  ];

  const backendSkills = [
    { image: "/node.png", name: "Node.js" },
    { image: "/sql.png", name: "MySQL" },
    { image: "/github.png", name: "GitHub" },
    { image: "/express.webp", name: "Express.js", className: "express" },
  ];

  // Animation variant for skill cards (similar to zAxisVariant)
  const cardVariant = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      rotateX: -90,
      transformOrigin: "top center",
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      rotateX: 90,
      transition: { duration: 0.5, ease: "easeIn" },
    },
  };

  return (
    <section className="skill-section" id="skills" ref={skillSectionRef}>
      <h2>My Skills</h2>
      <span className="section__subtitle">My Technical Skills</span>
      <p >
        As a dedicated student pursuing a degree in B.Sc, I am building a strong foundation in modern web development and version control. Below are the key skills I’ve mastered so far.
      </p>

      <div className="skills-tabs">
        <button
          className={`tab-btn ${visibleSkills === 'frontend' ? 'active' : ''}`}
          onClick={() => setVisibleSkills('frontend')}
        >
          Frontend Development
        </button>
        <button
          className={`tab-btn ${visibleSkills === 'backend' ? 'active' : ''}`}
          onClick={() => setVisibleSkills('backend')}
        >
          Backend Development
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={visibleSkills} // Key ensures animation triggers on tab change
          className="skills-grid"
          variants={cardVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {(visibleSkills === 'frontend' ? frontendSkills : backendSkills).map((skill, index) => (
            <div key={index} className={`skill-card ${skill.className || ''}`}>
              <img src={skill.image} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Skill;