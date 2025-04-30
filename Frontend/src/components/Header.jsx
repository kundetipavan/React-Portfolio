import React, { useState, useEffect } from 'react';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home'); // Track the active section

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  // Function to detect the active section on scroll
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'services', 'portfolio', 'contact'];
    
    const handleScroll = () => {
      let currentSection = 'home';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the section is in the viewport (adjust the threshold as needed)
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">Pavan</a>

        <div className={`nav__menu ${navOpen ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__items">
              <a
                href="#home"
                className={`nav__link ${activeSection === 'home' ? 'active-link' : ''}`}
                onClick={closeNav}
              >
                <i className="nav__icon" id="homee"></i> Home
              </a>
            </li>
            <li className="nav__items">
              <a
                href="#about"
                className={`nav__link ${activeSection === 'about' ? 'active-link' : ''}`}
                onClick={closeNav}
              >
                <i className="nav__icon"></i> About
              </a>
            </li>
            <li className="nav__items">
              <a
                href="#skills"
                className={`nav__link ${activeSection === 'skills' ? 'active-link' : ''}`}
                onClick={closeNav}
              >
                <i className="nav__icon" id="homeee"></i> Skills
              </a>
            </li>
            <li className="nav__items">
              <a
                href="#services"
                className={`nav__link ${activeSection === 'services' ? 'active-link' : ''}`}
                onClick={closeNav}
              >
                <i className="nav__icon"></i> Services
              </a>
            </li>
            <li className="nav__items">
              <a
                href="#portfolio"
                className={`nav__link ${activeSection === 'portfolio' ? 'active-link' : ''}`}
                onClick={closeNav}
              >
                <i className="nav__icon"></i> Portfolio
              </a>
            </li>
            <li className="nav__items">
              <a
                href="#contact"
                className={`nav__link ${activeSection === 'contact' ? 'active-link' : ''}`}
                onClick={closeNav}
              >
                <i className="nav__icon"></i> Contact
              </a>
            </li>
          </ul>
          <i className="nav__close" id="nav-close" onClick={toggleNav}></i>
        </div>

        <div className="nav__btns">
          <i className="change-theme" id="theme-button"></i>
          <div className="nav__toggle" id="nav-toggle" onClick={toggleNav}></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;