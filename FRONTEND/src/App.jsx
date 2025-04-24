import React from 'react'
import './components/Header.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

import Header from './components/Header.jsx'
  import Home from './components/Home.jsx'
  import About from './components/About.jsx'
  import Skill from './components/Skill.jsx'
  import Services from './components/Services.jsx'
  import Certificates from './components/Certificate.jsx'
  import Portfolio from './components/Portfolio.jsx'
   import Project from './components/Project.jsx'
  import Contact from './components/Contact.jsx'
  import Footer from './components/Footer.jsx'

function App() {
 
  return (
    <>
    <Header/>
    <Home/>
    <About/>
    <Skill/>
    <Services/>
    <Certificates/>
     <Portfolio/>
    <Project/>
    <Contact/>
    <Footer/>
     </>
  )
}

export default App
