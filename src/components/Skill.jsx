import React from 'react';
 
const SkillSection = () => {
  return (
    <section className="skill-section" id='skills'>
      <h2>My Skills</h2>
      <span className="section__subtitle">My Technical Skills</span><br /><br />

      <p>As a dedicated student pursuing a degree in B.sc, I am building a strong foundation in modern web development and version control. Below are the key skills I’ve mastered so far.</p>
      <div className="skills-grid">
        <div className="skill-card">
          <img src="src/assets/html.png" alt="HTML" />
          <p>HTML</p>
        </div>
        <div className="skill-card">
          <img src="src/assets/css.png" alt="CSS" />
          <p>CSS</p>
        </div>
        <div className="skill-card">
          <img src="src/assets/js.png" alt="JavaScript" />
          <p>JavaScript</p>
        </div>
        <div className="skill-card">
          <img src="src/assets/react.svg" alt="React" />
          <p>React</p>
        </div>
        <div className="skill-card">
          <img src="src/assets/node.png" alt="Node.js" />
          <p>Node.js</p>
        </div>
        <div className="skill-card">
          <img src="src/assets/sql.png" alt="Git" />
          <p>MySql</p>
        </div>
        <div className="skill-card">
          <img src="src/assets/github.png" alt="Git" />
          <p>Git</p>
        </div>
 
      </div><br /><br /><br />
    </section>
  );
};

export default SkillSection;