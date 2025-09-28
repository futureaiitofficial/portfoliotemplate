'use client'

import { useState, useEffect, useLayoutEffect } from 'react'
import { FaBars, FaTimes, FaCode, FaDatabase, FaRocket, FaGithub, FaLinkedin, FaGraduationCap, FaPhone } from 'react-icons/fa'
import styles from './Header.module.css'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [isHydrated, setIsHydrated] = useState(false)

  // Prevent hydration mismatch
  useLayoutEffect(() => {
    setIsHydrated(true)
  }, [])

  // Handle scroll effects
  useEffect(() => {
    if (!isHydrated) return

    const handleScroll = () => {
      const scrolled = window.scrollY > 50
      setIsScrolled(scrolled)

      // Update active section based on scroll position
      const sections = ['hero', 'about', 'experience', 'education', 'contact']
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

    // Initial scroll check
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHydrated])

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
    { id: 'projects', label: 'Projects', icon: <FaCode /> },
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
    }
  ]

  return (
    <header className={`${styles.header} ${isHydrated && isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerContent}>
        {/* Logo/Brand */}
        <div className={styles.logo}>
          <div className={styles.logoIcon}>L</div>
          <div className={styles.logoText}>
            <span className={styles.logoName}>Lahari</span>
            <span className={styles.logoTitle}>Data Scientist & Software Developer</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.id} className={styles.navItem}>
                  <button
                    className={`${styles.navLink} ${isHydrated && activeSection === item.id ? styles.active : ''}`}
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links */}
        <div className={styles.socialLinks}>
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              style={{ '--hover-color': link.color } as React.CSSProperties}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileMenuBtn}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.open : ''}`}>
        <ul className={styles.mobileNavList}>
          {navItems.map((item) => (
            <li key={item.id} className={styles.mobileNavItem}>
              <button
                className={`${styles.mobileNavLink} ${isHydrated && activeSection === item.id ? styles.active : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            </li>
            ))}
          </ul>
          
          {/* Mobile Social Links */}
          <div className={styles.mobileSocial}>
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileSocialLink}
                style={{ '--hover-color': link.color } as React.CSSProperties}
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
    </header>
  )
}
