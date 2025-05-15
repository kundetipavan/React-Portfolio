import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
 
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Animation variants
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
  
  const socialVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const iconVariants = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    hover: { 
      scale: 1.2, 
      rotate: 5,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.9 }
  };
  
  return (
    <motion.footer 
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="container">
        <div className="footer-content">
          <motion.div 
            className="footer-logo"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2>PavanKundeti</h2>
            <p>Full Stack Developer & FreeLancer</p>
          </motion.div>
          
          <motion.div 
            className="footer-links"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="footer-newsletter"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>Stay Updated</h3>
            <p>Subscribe to my newsletter for the latest updates on my projects and tech insights.</p>
            <form>
              <input type="email" placeholder="Your Email" />
              <motion.button 
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
        
        <div className="footer-bottom">
          <motion.div 
            className="social-icons"
            variants={socialVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.a 
              href="https://github.com/kundetipavan" 
              target="_blank" 
              rel="noopener noreferrer"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FaGithub />
            </motion.a>
            
            <motion.a 
              href="https://linkedin.com/in/pavankundeti" 
              target="_blank" 
              rel="noopener noreferrer"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FaLinkedinIn />
            </motion.a>
            
            <motion.a 
              href="https://twitter.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FaTwitter />
            </motion.a>
            
            <motion.a 
              href="https://instagram.com/__.pavanuuu" 
              target="_blank" 
              rel="noopener noreferrer"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FaInstagram />
            </motion.a>
            
            <motion.a 
              href="pavankundeti2004@gmail.com" 
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FaEnvelope />
            </motion.a>
          </motion.div>
          
          <motion.p 
            className="copyright"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            &copy; {currentYear} YourName. All Rights Reserved.
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;