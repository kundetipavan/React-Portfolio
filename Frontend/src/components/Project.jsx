import React, { useEffect, useRef } from "react";

const Project = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const element = containerRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('animated');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="project section">
      <div className="project__container" ref={containerRef}>
        <div className="project__data">
          <h2 className="project__title">You have a new project</h2>
          <p className="project__description">
            Contact me now on your new project.
          </p>
          <a href="#contact" className="project__button">
            Contact Me <i className="project__icon">≫</i>
          </a>
        </div>
        <img src="/project.png" alt="Project Visual" className="project__img" />
      </div>
    </section>
  );
};

export default Project;
