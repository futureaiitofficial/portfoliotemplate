'use client'

import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart, FaCode, FaDatabase, FaRocket } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

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

  const quickLinks = [
    { label: 'About Me', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' }
  ]

  const skills = [
    { name: 'Data Science', icon: <FaDatabase /> },
    { name: 'Full-Stack Dev', icon: <FaCode /> },
    { name: 'Machine Learning', icon: <FaRocket /> }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''))
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-circle">
                <span className="logo-text">L</span>
                <div className="logo-glow"></div>
              </div>
              <div className="brand-info">
                <h3 className="brand-name">Lahari</h3>
                <p className="brand-tagline">Transforming data into insights</p>
              </div>
            </div>
            <p className="brand-description">
              Passionate Data Scientist and Full-Stack Developer with 3+ years of experience 
              building intelligent solutions that bridge advanced analytics with real-world applications.
            </p>
            <div className="social-links">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ '--hover-color': link.color } as React.CSSProperties}
                >
                  {link.icon}
                  <span className="social-tooltip">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="section-title">Quick Links</h4>
            <ul className="link-list">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    className="footer-link"
                    onClick={() => scrollToSection(link.href)}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div className="footer-section">
            <h4 className="section-title">Expertise</h4>
            <div className="skills-list">
              {skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="section-title">Let's Connect</h4>
            <div className="contact-info">
              <p className="contact-text">
                Ready to collaborate on your next project?
              </p>
              <a 
                href="mailto:your.email@example.com" 
                className="contact-button"
              >
                <FaEnvelope />
                Get In Touch
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Lahari. Made with <FaHeart className="heart-icon" /> and lots of coffee.
            </p>
            <div className="footer-tech">
              <span className="tech-text">Built with</span>
              <div className="tech-stack">
                <span className="tech-item">Next.js</span>
                <span className="tech-item">TypeScript</span>
                <span className="tech-item">React</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
          color: white;
          position: relative;
          overflow: hidden;
        }

        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(64, 224, 208, 0.5), transparent);
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 2rem 2rem;
        }

        .footer-main {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        /* Brand Section */
        .footer-brand {
          max-width: 400px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
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
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: 700;
          color: rgba(64, 224, 208, 1);
        }

        .logo-glow {
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          border: 2px solid rgba(64, 224, 208, 0.2);
          border-radius: 50%;
          animation: logoGlow 3s ease-in-out infinite;
        }

        .brand-name {
          font-size: 1.5rem;
          font-weight: 600;
          color: white;
          margin: 0 0 0.25rem 0;
        }

        .brand-tagline {
          font-size: 0.9rem;
          color: rgba(64, 224, 208, 0.8);
          margin: 0;
        }

        .brand-description {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-size: 1.2rem;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .social-link:hover {
          background: var(--hover-color, rgba(64, 224, 208, 0.2));
          border-color: var(--hover-color, rgba(64, 224, 208, 0.5));
          color: white;
          transform: translateY(-2px);
        }

        .social-tooltip {
          position: absolute;
          top: -35px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.7rem;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .social-link:hover .social-tooltip {
          opacity: 1;
        }

        /* Footer Sections */
        .footer-section {
          
        }

        .section-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: rgba(64, 224, 208, 1);
          margin: 0 0 1.5rem 0;
          position: relative;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 30px;
          height: 2px;
          background: rgba(64, 224, 208, 0.5);
        }

        .link-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .link-list li {
          margin-bottom: 0.75rem;
        }

        .footer-link {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.7);
          cursor: pointer;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          text-align: left;
          padding: 0;
        }

        .footer-link:hover {
          color: rgba(64, 224, 208, 1);
          transform: translateX(5px);
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .skill-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .skill-icon {
          color: rgba(64, 224, 208, 1);
          font-size: 1.1rem;
        }

        .skill-name {
          font-size: 0.9rem;
        }

        .contact-info {
          
        }

        .contact-text {
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }

        .contact-button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, rgba(64, 224, 208, 0.2), rgba(64, 224, 208, 0.1));
          border: 1px solid rgba(64, 224, 208, 0.3);
          color: rgba(64, 224, 208, 1);
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .contact-button:hover {
          background: linear-gradient(135deg, rgba(64, 224, 208, 0.3), rgba(64, 224, 208, 0.2));
          border-color: rgba(64, 224, 208, 0.5);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(64, 224, 208, 0.3);
        }

        /* Footer Bottom */
        .footer-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          margin-bottom: 2rem;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .copyright {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .heart-icon {
          color: #ff6b6b;
          font-size: 0.8rem;
          animation: heartbeat 2s ease-in-out infinite;
        }

        .footer-tech {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .tech-text {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.8rem;
        }

        .tech-stack {
          display: flex;
          gap: 0.5rem;
        }

        .tech-item {
          background: rgba(64, 224, 208, 0.1);
          color: rgba(64, 224, 208, 0.8);
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.7rem;
          border: 1px solid rgba(64, 224, 208, 0.2);
        }

        /* Animations */
        @keyframes logoGlow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
          }
        }

        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .footer-main {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }

          .footer-brand {
            grid-column: 1 / -1;
            max-width: none;
          }
        }

        @media (max-width: 768px) {
          .footer-content {
            padding: 3rem 1rem 2rem;
          }

          .footer-main {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
          }

          .social-links {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .footer-logo {
            flex-direction: column;
            text-align: center;
            gap: 0.5rem;
          }

          .tech-stack {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  )
}
