import React, { useState, useEffect } from 'react';
  
 
const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  // Close nav on link click
  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <header className ="header" id="header">
       <nav className="nav container">
        <a href="home" className="nav__logo">Pavan</a>

        <div className={`nav__menu ${navOpen ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__items">
              <a href="#home" className="nav__link active-link" onClick={closeNav}>
                <i className="nav__icon"  id='homee'></i> Home
              </a>
            </li>
            <li className="nav__items">
              <a href="#about" className="nav__link" onClick={closeNav}>
                <i className="nav__icon" ></i> About
              </a>
            </li>
            <li className="nav__items">
              <a href="#skills" className="nav__link" onClick={closeNav}>
                <i className="nav__icon" id='homeee' ></i> Skills
              </a>
            </li>
            <li className="nav__items">
              <a href="#services" className="nav__link" onClick={closeNav}>
                <i className="nav__icon" ></i> Services
              </a>
            </li>
            <li className="nav__items">
              <a href="#portfolio" className="nav__link" onClick={closeNav}>
                <i className="nav__icon"></i>Portfolio
              </a>
            </li>
            <li className="nav__items">
              <a href="#contact" className="nav__link" onClick={closeNav}>
                <i className="nav__icon" ></i> Contact
              </a>
            </li>
          </ul>
          <i className="nav__close" id="nav-close" onClick={toggleNav}></i>
        </div>

       <div className="nav__btns">
          <i className="change-theme" id="theme-button" ></i>
          <div className="nav__toggle" id="nav-toggle" onClick={toggleNav}>
           </div>
        </div>
      </nav>
    </header>
    );
};

export default Header;
