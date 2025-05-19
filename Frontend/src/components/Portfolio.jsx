import { useState, useEffect } from 'react';

function Projects() {
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });

    const projectsSection = document.querySelector('.projects-content');
    if (projectsSection) observer.observe(projectsSection);

    return () => {
      if (projectsSection) observer.unobserve(projectsSection);
    };
  }, []);

  const projects = [
    {
      title: "Portfolio Website",
      category: "frontend",
      image: "/pavank.jpg",
      description: "A responsive portfolio website with smooth animations and modern design.",
      technologies: ["HTML", "CSS", "ReactJS"],
      link: "https://github.com/kundetipavan/React-Portfolio",
      link1: "https://pavanu.netlify.app/#portfolio",
    },
    {
      title: "WeatherApp-Clone",
      category: "frontend",
      image: "/weather.jpg",
      description: "24 Hour Daily High and Low World Temperatures with Maximum World Precipitation/Rainfall.",
      technologies: [ "HTML", "CSS", "ReactJS"],
      link: "https://github.com/kundetipavan/WeatherApp",
      link1: "https://weatheraclone.netlify.app",
    },
    {
      title: "Instagram-Clone",
      category: "frontend",
      image: "/insta.jpg",
      description: "Creating an Instagram clone involves designing a user interface that mimics the look and feel of Instagram.",
      technologies: [" HTML", "CSS", "JS"],
      link: "https://github.com/kundetipavan/Insta-clone",
      link1: "https://instanetlify.netlify.app",
    },
    {
      title: "SignIn&SignUp",
      category: "backend",
      image: "/signup.webp",
      description: "Create a login form using NodeJS and MYSQL. NodeJS login form allows users to log in to the website after they have created their account using the signup form. ",
      technologies: ["HTML","CSS", "Node.js", "MySQL"],
      link: "https://github.com/kundetipavan/Backend-login",
      link1: "#",
    },
    {
      title: "StartUp-Demo",
      category: "frontend",
      image: "/demo.jpg",
      description: "Create React Website is an officially supported way to create single-page React applications. ",
      technologies: ["React.js", "HTML","CSS"],
      link: "https://github.com/kundetipavan/Start-Up-Demo",
      link1: "https://startupclone.netlify.app",
    },
        {
      title: "Skill.com",
      category: "frontend",
      image: "/skill.jpg",
      description: "Create a HTML Website is an officially supported by Node.JS and MYSQL DataBase for SingIn & SignUp and Forgot Password . ",
      technologies: ["React.js","NODE.JS","MYSQL", "HTML","CSS"],
      link: "https://github.com/Beharasaikumar/LomaaSkill.com",
      link1: "http://lomaaskill.com/",
    },

  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>My Projects</h2>
          <div className="header-underline"></div>
          <p>Here are some of my recent projects showcasing my skills and experience</p>
        </div>

        <div className="projects-content">
          <div className="filter-buttons">
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Projects
            </button>
            <button
              className={`filter-btn ${filter === 'frontend' ? 'active' : ''}`}
              onClick={() => setFilter('frontend')}
            >
              Frontend
            </button>
            <button
              className={`filter-btn ${filter === 'backend' ? 'active' : ''}`}
              onClick={() => setFilter('backend')}
            >
              Backend
            </button>
            <button
              className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`}
              onClick={() => setFilter('fullstack')}
            >
              Full Stack
            </button>
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div key={index} className="project-card animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      {project.link && (
                        <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                          <i class="fa-brands fa-github"></i>                        </a>
                      )}
                      {project.link1 && (
                        <a href={project.link1} className="project-link" target="_blank" rel="noopener noreferrer">
                          <i class="fa-solid fa-link"></i>                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-tags">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="no-projects">
              <p>No projects found for the selected filter.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;