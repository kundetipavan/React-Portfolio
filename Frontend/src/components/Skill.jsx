import React, { useEffect, useRef } from 'react';

const SkillSection = () => {
  const skillSectionRef = useRef(null);

  useEffect(() => {
    const cards = skillSectionRef.current?.querySelectorAll('.skill-card');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && cards) {
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animated');
            }, index * 150); // 150ms delay between each card
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
  }, []);

  return (
    <section className="skill-section" id="skills" ref={skillSectionRef}>
      <h2>My Skills</h2>
      <span className="section__subtitle">My Technical Skills</span><br /><br /> 

      <p>
        As a dedicated student pursuing a degree in B.sc, I am building a strong foundation in modern web development and version control. Below are the key skills I’ve mastered so far.
      </p>
      
      <div className="skills-grid">
        <div className="skill-card">
          <img src="/html.png" alt="HTML" />
          <p>HTML</p>
        </div>
        <div className="skill-card">
          <img src="/css.png" alt="CSS" />
          <p>CSS</p>
        </div>
        <div className="skill-card">
          <img src="/js.png" alt="JavaScript" />
          <p>JavaScript</p>
        </div>
        <div className="skill-card">
          <img src="/react.svg" alt="React" />
          <p>React</p>
        </div>
        <div className="skill-card">
          <img src="/node.png" alt="Node.js" />
          <p>Node.js</p>
        </div>
        <div className="skill-card">
          <img src="/sql.png" alt="MySql" />
          <p>MySql</p>
        </div>
        <div className="skill-card">
          <img src="/github.png" alt="GitHub" />
          <p>GitHub</p>
        </div>
        <div className="skill-card">
          <img src="/canva.png" alt="Canva" />
          <p>Canva</p>
        </div>
      </div><br /><br /><br />
    </section>
  );
};

export default SkillSection;
