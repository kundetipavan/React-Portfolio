import React, { useState } from "react";

const Portfolio = () => {
  const projects = [
    {
      image: '/2.jpg',
      title: "Deadpool",
      description: "A DeadPool web site built with Html,Css.",
      link: "https://wardw.netlify.app/",
    },
    {
      image: '/food.jpeg',
       title: "indian-team",
       description: "A food web site built with Html,Css.",
       link: "https://cricket21.netlify.app/",
    },
    {
      image: '/coffe.jpeg',
       title: "Project Three",
       description: "A modern web site built with Html,Css.",
       link: "#",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="portfolio-slider" id="portfolio">
      <h2 className="portfolio__title">Portfolio</h2>
      <p className="portfolio__subtitle">My Recent Work</p>

      <div className="slider-wrapper">
        <button className="nav-button left" onClick={prevSlide}>
          &lt;
        </button>

        <div className="slider-card" id="flex">
          <img src={projects[currentIndex].image} alt={projects[currentIndex].title} />
          <h3>{projects[currentIndex].title}</h3>
          <div>
            <p>{projects[currentIndex].description}</p>
            <a href={projects[currentIndex].link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </div>

        <button className="nav-button right" onClick={nextSlide}>
          &gt;
        </button>
      </div>

      <div className="dots">
        {projects.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
