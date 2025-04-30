import React from "react";
 
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h1 className="footer__title">Pavan</h1>
        <p className="footer__subtitle">Frontend Developer</p>

        <ul className="footer__links">
          <li><a href="#services" className="footer__link">Services</a></li>
          <li><a href="#portfolio" className="footer__link">Portfolio</a></li>
          <li><a href="#contact" className="footer__link">Contactme</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://instagram.com" className="footer__social" target="_blank" rel="noopener noreferrer">
           </a>
          <a href="https://github.com/kundetipavan" className="footer__social" target="_blank" rel="noopener noreferrer">
           </a>
          <a href="https://twitter.com" className="footer__social" target="_blank" rel="noopener noreferrer">
           </a>
        </div>

        <span className="footer__copy">© 2025 PavanKundeti | All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
