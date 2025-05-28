import React, { useEffect, useRef } from 'react';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section ref={aboutRef} className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span><br /><br />

      <div className="about__container container grid">
        <img src="/pavan.png" alt="About" className="about__img" />

        <div className="about__data">
          <p className="about__description">
            Hi I'm Pavan Kundeti I'm 21 years old. When I have free time, it's great to indulge in
            some of my favorite hobbies like studying & playing games and exploring different kinds of new technology.<br />
            I'm a full-stack developer. I have learnt HTML, CSS, JS and NodeJS. I am interested in working on projects
            with an open-source focus.
          </p>

          <div className="about__info">
            <div>
              <span className="about__info-title">01</span>
              <span className="about__info-name">Year<br />experience</span>
            </div>

            <div>
              <span className="about__info-title">5+</span>
              <span className="about__info-name">Completed<br />project</span>
            </div>

            <div>
              <span className="about__info-title">24/7</span>
              <span className="about__info-name">Online<br />support</span>
            </div>
          </div>

          <a download="" href="/Pavankundeti.docx" className="button button--flex">&nbsp;&nbsp;&nbsp;
            Download CV &nbsp;&nbsp;&nbsp; <i className="fa-solid fa-down-long"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
