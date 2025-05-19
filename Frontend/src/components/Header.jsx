import { useState, useEffect } from 'react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // Handle scroll for navbar background
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Intersection Observer for section highlighting
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: 0.5 } // Trigger when 50% of section is visible
    );

    // Observe all sections
    const sections = [
      document.querySelector('#home'),
      document.querySelector('#about'),
      document.querySelector('#skills'),
      document.querySelector('#services'),
      document.querySelector('#projects'),
      document.querySelector('#contact')
    ];

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0' }}>
          <a href="#" className="logo">Pavann.</a>
          
          <div className="desktop-menu">
            <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active-link' : ''}`}>Home</a>
            <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active-link' : ''}`}>About</a>
            <a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active-link' : ''}`}>Skills</a>
            <a href="#services" className={`nav-link ${activeSection === 'services' ? 'active-link' : ''}`}>Services</a>
            <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active-link' : ''}`}>Projects</a>
            <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active-link' : ''}`}>Contact</a>
          </div>
          
          <button 
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'active animate-fade-in' : ''}`}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active-link' : ''}`} onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active-link' : ''}`} onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active-link' : ''}`} onClick={() => setMobileMenuOpen(false)}>Skills</a>
            <a href="#services" className={`nav-link ${activeSection === 'services' ? 'active-link' : ''}`} onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active-link' : ''}`} onClick={() => setMobileMenuOpen(false)}>Projects</a>
            <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active-link' : ''}`} onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;