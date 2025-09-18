'use client'

import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaCode, FaDatabase, FaRocket, FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaGraduationCap, FaPhone } from 'react-icons/fa'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50
      setIsScrolled(scrolled)

      // Update active section based on scroll position
      const sections = ['hero', 'about', 'experience', 'education']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { id: 'hero', label: 'Home', icon: <FaRocket /> },
    { id: 'about', label: 'About', icon: <FaCode /> },
    { id: 'experience', label: 'Experience', icon: <FaDatabase /> },
    { id: 'education', label: 'Education', icon: <FaGraduationCap /> },
    { id: 'contact', label: 'Contact', icon: <FaPhone /> }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/yourusername',
      color: '#333'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://linkedin.com/in/yourusername',
      color: '#0077b5'
    },
    {
      name: 'Twitter',
      icon: <FaTwitter />,
      url: 'https://twitter.com/yourusername',
      color: '#1da1f2'
    },
    {
      name: 'Email',
      icon: <FaEnvelope />,
      url: 'mailto:your.email@example.com',
      color: '#ea4335'
    }
  ]

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        {/* Logo/Brand */}
        <div className="logo">
          <div className="logo-icon">
            <div className="logo-circle">
              <span className="logo-text">L</span>
              <div className="logo-pulse"></div>
            </div>
          </div>
          <div className="brand-text">
            <span className="brand-name">Lahari</span>
            <span className="brand-title">Data Scientist & Developer</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                  <button
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links */}
        <div className="social-links">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              style={{ '--hover-color': link.color } as React.CSSProperties}
              title={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          {navItems.map((item) => (
            <li key={item.id} className="mobile-nav-item">
              <button
                className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            </li>
            ))}
          </ul>
          
          {/* Mobile Social Links */}
          <div className="mobile-social">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-link"
                style={{ '--hover-color': link.color } as React.CSSProperties}
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(15, 32, 39, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(64, 224, 208, 0.1);
          transition: all 0.3s ease;
        }

        .header.scrolled {
          background: rgba(15, 32, 39, 0.98);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          border-bottom-color: rgba(64, 224, 208, 0.2);
        }

        .header-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }

        /* Logo Styles */
        .logo {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .logo-icon {
          position: relative;
        }

        .logo-circle {
          position: relative;
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, rgba(64, 224, 208, 0.2), rgba(64, 224, 208, 0.1));
          border: 2px solid rgba(64, 224, 208, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: 700;
          color: rgba(64, 224, 208, 1);
          z-index: 2;
          position: relative;
        }

        .logo-pulse {
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          border: 2px solid rgba(64, 224, 208, 0.4);
          border-radius: 50%;
          animation: logoPulse 2s ease-in-out infinite;
        }

        .brand-text {
          display: flex;
          flex-direction: column;
        }

        .brand-name {
          font-size: 1.5rem;
          font-weight: 600;
          color: white;
          line-height: 1.2;
        }

        .brand-title {
          font-size: 0.8rem;
          color: rgba(64, 224, 208, 0.8);
          font-weight: 400;
        }

        /* Desktop Navigation */
        .desktop-nav {
          display: flex;
          max-width: 400px;
          flex-shrink: 0;
        }

        .nav-list {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 0.75rem;
        }

        .nav-item {
          position: relative;
        }

        .nav-link {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.7);
          cursor: pointer;
          padding: 0.5rem 1rem;
          border-radius: 3px;
          transition: all 0.3s ease;
          font-size: 0.9rem;
          font-weight: 400;
          text-decoration: none;
          position: relative;
        }

        .nav-link:hover {
          color: rgba(64, 224, 208, 1);
          background: rgba(64, 224, 208, 0.08);
        }

        .nav-link.active {
          color: rgba(64, 224, 208, 1);
          background: rgba(64, 224, 208, 0.12);
        }


        /* Social Links */
        .social-links {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          position: relative;
        }

        .social-link:hover {
          background: var(--hover-color, rgba(64, 224, 208, 0.2));
          border-color: var(--hover-color, rgba(64, 224, 208, 0.5));
          color: white;
          transform: translateY(-2px) scale(1.05);
        }

        .social-link:hover::after {
          content: attr(title);
          position: absolute;
          top: -35px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.7rem;
          white-space: nowrap;
          z-index: 1000;
        }

        /* Mobile Menu Button */
        .mobile-menu-btn {
          display: none;
          background: rgba(64, 224, 208, 0.1);
          border: 1px solid rgba(64, 224, 208, 0.3);
          color: rgba(64, 224, 208, 1);
          padding: 0.75rem;
          border-radius: 8px;
          cursor: pointer;
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }

        .mobile-menu-btn:hover {
          background: rgba(64, 224, 208, 0.2);
          transform: scale(1.05);
        }

        /* Mobile Navigation */
        .mobile-nav {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(15, 32, 39, 0.98);
          backdrop-filter: blur(20px);
          border-top: 1px solid rgba(64, 224, 208, 0.1);
          transform: translateY(-100%);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .mobile-nav.open {
          transform: translateY(0);
          opacity: 1;
          visibility: visible;
        }

        .mobile-nav-list {
          list-style: none;
          margin: 0;
          padding: 1rem;
        }

        .mobile-nav-item {
          margin-bottom: 0.5rem;
        }

        .mobile-nav-link {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.8);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          border-radius: 12px;
          transition: all 0.3s ease;
          width: 100%;
          text-align: left;
        }

        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          color: rgba(64, 224, 208, 1);
          background: rgba(64, 224, 208, 0.1);
        }

        /* Mobile Social Links */
        .mobile-social {
          padding: 1rem;
          border-top: 1px solid rgba(64, 224, 208, 0.1);
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .mobile-social-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          font-size: 0.9rem;
        }

        .mobile-social-link:hover {
          background: var(--hover-color, rgba(64, 224, 208, 0.2));
          border-color: var(--hover-color, rgba(64, 224, 208, 0.5));
          color: white;
          transform: translateY(-2px);
        }

        /* Animations */
        @keyframes logoPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
          }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .nav-list {
            gap: 0.5rem;
          }

          .nav-link {
            padding: 0.4rem 0.8rem;
            font-size: 0.85rem;
          }

          .social-links {
            gap: 0.75rem;
          }

          .social-link {
            width: 36px;
            height: 36px;
            font-size: 1rem;
          }
        }

        @media (max-width: 768px) {
          .header-content {
            padding: 1rem;
          }

          .desktop-nav {
            display: none;
          }

          .social-links {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .brand-name {
            font-size: 1.3rem;
          }

          .brand-title {
            font-size: 0.7rem;
          }

          .logo-circle {
            width: 40px;
            height: 40px;
          }

          .logo-text {
            font-size: 1.3rem;
          }
        }

        @media (max-width: 480px) {
          .brand-text {
            display: none;
          }

          .nav-list {
            gap: 0.3rem;
          }

          .nav-link {
            padding: 0.3rem 0.6rem;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </header>
  )
}
