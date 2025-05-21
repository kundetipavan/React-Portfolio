import { useState, useEffect } from 'react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    // Apply theme to document body
    document.body.className = theme;
    localStorage.setItem('theme', theme);

    // Handle scroll for navbar background
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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
      { root: null, rootMargin: '0px', threshold: 0.5 }
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
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

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
            <button onClick={toggleTheme} style={{ background: 'none', border: 'none', cursor: 'pointer' , color:"black", className:"theme-bt" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={theme === 'light' ? '#000' : '#fff'}>
                {theme === 'light' ? (
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                ) : (
                  <path d="M12 7a5 5 0 0 0 0 10 5 5 0 0 0 0-10zM12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" id='sunn'/>
                )}
              </svg>
            </button>
          </div>
          
          <button 
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke={theme === 'light' ? 'currentColor' : '#fff'} 
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
        
        <div className={`mobile-menu ${mobileMenuOpen ? 'active animate-fade-in' : ''}`}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active-link' : ''}`} onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active-link' : ''}`} onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active-link' : ''}`} onClick={() => setMobileMenuOpen(false)}>Skills</a>
            <a href="#services" className={`nav-link ${activeSection === 'services' ? 'active-link' : ''}`} onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active-link' : ''}`} onClick={() => setMobileMenuOpen(false)}>Projects</a>
            <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active-link' : ''}`} onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <button onClick={toggleTheme} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={theme === 'light' ? '#000' : '#fff'}>
                {theme === 'light' ? (
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                ) : (
                  <path d="M12 7a5 5 0 0 0 0 10 5 5 0 0 0 0-10zM12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;