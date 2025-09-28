'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  FaReact, FaNodeJs, FaPython, FaDatabase, FaGithub, FaExternalLinkAlt,
  FaBrain, FaChartBar, FaRobot, FaCode, FaServer, FaPalette, FaFilter,
  FaChevronLeft, FaChevronRight, FaAws
} from 'react-icons/fa'
import { 
  SiTensorflow, SiPytorch, SiNextdotjs, SiMongodb, SiPostgresql, 
  SiTypescript, SiJavascript, SiDocker, SiKubernetes, SiGo, SiScikitlearn,
  SiJupyter, SiNumpy, SiPlotly, SiPython, SiPandas, SiAngular
} from 'react-icons/si'
import styles from './Projects.module.css'

// Custom XGBoost icon component
const XGBoostIcon = () => (
  <div style={{
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '1em',
    height: '1em',
    fontSize: '0.75em',
    fontWeight: 'bold',
    color: 'currentColor',
    border: '1.5px solid currentColor',
    borderRadius: '3px',
    fontFamily: 'monospace'
  }}>
    XGB
  </div>
)

// Project categories with icons
const categories = [
  { id: 'all', label: 'All Projects', icon: <FaCode />, color: '#40E0D0' },
  { id: 'fullstack', label: 'Full Stack', icon: <FaReact />, color: '#61DAFB' },
  { id: 'ai', label: 'Artificial Intelligence', icon: <FaBrain />, color: '#FF6B6B' },
  { id: 'ml', label: 'Machine Learning', icon: <FaRobot />, color: '#4ECDC4' },
  { id: 'backend', label: 'Backend', icon: <FaServer />, color: '#45B7D1' },
  { id: 'frontend', label: 'Frontend', icon: <FaPalette />, color: '#96CEB4' },
  { id: 'analytics', label: 'Data Analytics', icon: <FaChartBar />, color: '#FECA57' }
]

// Sample project data
const projects = [
  {
    id: 'travel-connect',
    title: 'Travel Connect',
    category: 'fullstack',
    description: 'A social travel platform where users can connect with fellow travelers, share trip plans, and join collaborative travel experiences. Deployed using Docker on AWS Linux instance.',
    image: '/projects/travel-connect.jpg',
    technologies: ['Angular', 'Node.js', 'MongoDB', 'Express.js', 'Socket.io', 'Docker', 'AWS'],
    techIcons: [<SiAngular key="angular" />, <FaNodeJs key="node" />, <SiMongodb key="mongo" />, <SiDocker key="docker" />, <FaAws key="aws" />],
    github: 'https://github.com/yourusername/travel-connect',
    demo: 'https://travel-connect-demo.vercel.app',
    featured: true,
    status: 'completed',
    duration: '4 months',
    team: 'Solo Project'
  },
  {
    id: 'fraud-detection',
    title: 'Financial Fraud Detection',
    category: 'ml',
    description: 'ML system handling extreme class imbalance (1:578) for credit card fraud detection with 96.9% precision and real-time API.',
    image: '/projects/fraud-detection.jpg',
    technologies: ['Python', 'Scikit-learn', 'FastAPI', 'Docker', 'SMOTE'],
    techIcons: [<FaPython key="python" />, <SiScikitlearn key="sklearn" />, <FaServer key="api" />],
    github: 'https://github.com/yourusername/fraud-detection',
    demo: 'https://fraud-detection-api.herokuapp.com',
    featured: true,
    status: 'completed',
    duration: '3 months',
    team: 'Solo Project'
  },
  {
    id: 'api-performance-monitor',
    title: 'API Performance Monitor',
    category: 'backend',
    description: 'A concurrent Go application that monitors multiple URLs for uptime and latency with real-time alerts.',
    image: '/projects/apiperformance.png',
    technologies: ['Go', 'Goroutines', 'net/http', 'SMTP', 'Discord API'],
    techIcons: [<SiGo key="go" />, <FaServer key="server" />, <FaDatabase key="monitor" />],
    github: 'https://github.com/yourusername/api-performance-monitor',
    demo: null,
    featured: false,
    status: 'completed',
    duration: '1.5 months',
    team: 'Solo Project'
  },
  {
    id: 'supply-chain-demand',
    title: 'Supply Chain Demand Forecasting',
    category: 'analytics',
    description: 'M5 Walmart forecasting system processing 58M+ sales records to predict 28-day demand with XGBoost and advanced feature engineering.',
    image: '/projects/supplychain.png',
    technologies: ['Python', 'XGBoost', 'Pandas', 'NumPy', 'Plotly'],
    techIcons: [
      <SiPython key="python" />,        // Python
      <XGBoostIcon key="xgboost" />,    // XGBoost (custom icon)
      <SiPandas key="pandas" />,        // Pandas
      <SiNumpy key="numpy" />,          // NumPy
      <SiPlotly key="plotly" />         // Plotly
    ],
    github: 'https://github.com/yourusername/supply-chain-demand',
    demo: 'https://supply-chain-dashboard.streamlit.app',
    featured: true,
    status: 'completed',
    duration: '3 months',
    team: 'Solo Project'
  },
  {
    id: 'fake-news-detection',
    title: 'Fake News Detection using Machine Learning',
    category: 'ml',
    description: 'Comprehensive ML research project achieving 94.47% accuracy using Passive Aggressive algorithm. Features advanced text preprocessing, TF-IDF vectorization, and comparative analysis of 5 ML algorithms on balanced 6,335-article dataset.',
    image: '/projects/fakenewsml.png',
    technologies: ['Python', 'Scikit-learn', 'NLP', 'TF-IDF', 'BeautifulSoup'],
    techIcons: [
      <SiPython key="python" />,        // Python
      <SiScikitlearn key="sklearn" />,  // Scikit-learn
      <FaBrain key="nlp" />,            // NLP
      <SiPandas key="pandas" />,        // Pandas
      <SiNumpy key="numpy" />           // NumPy
    ],
    github: 'https://github.com/yourusername/fake-news-detection',
    demo: 'https://fake-news-detector.streamlit.app',
    featured: true,
    status: 'completed',
    duration: '2 months',
    team: 'Solo Project'
  }
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [isVisible, setIsVisible] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const projectsRef = useRef<HTMLElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  // Mount effect
  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  // Intersection Observer for animations
  useEffect(() => {
    if (!isMounted) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const currentRef = projectsRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
      observer.disconnect()
    }
  }, [isMounted])

  // Filter projects based on category
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory))
    }
  }, [activeCategory])

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return '#22c55e'
      case 'in-progress': return '#f59e0b'
      case 'planning': return '#6366f1'
      default: return '#64748b'
    }
  }

  // Slider navigation functions
  const scrollLeft = () => {
    if (!isMounted) return
    
    try {
      if (sliderRef.current && sliderRef.current.scrollBy) {
        sliderRef.current.scrollBy({
          left: -300,
          behavior: 'smooth'
        })
      }
    } catch (error) {
      console.warn('Scroll left error:', error)
    }
  }

  const scrollRight = () => {
    if (!isMounted) return
    
    try {
      if (sliderRef.current && sliderRef.current.scrollBy) {
        sliderRef.current.scrollBy({
          left: 300,
          behavior: 'smooth'
        })
      }
    } catch (error) {
      console.warn('Scroll right error:', error)
    }
  }

  if (!isMounted) {
    return null
  }

  return (
    <section ref={projectsRef} className={styles.projectsContainer}>
      <div className={styles.projectsContent}>
        {/* Section Header */}
        <div className={`${styles.sectionHeader} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <p className={styles.sectionSubtitle}>
            A showcase of my work across different domains - from full-stack applications to AI/ML solutions
          </p>
        </div>

        {/* Category Filters */}
        <div className={`${styles.filtersContainer} ${isVisible ? styles.visible : ''}`}>
          {/* Mobile Filter Toggle */}
          <button 
            className={styles.mobileFilterToggle}
            onClick={() => setShowFilters(!showFilters)}
          >
            <FaFilter />
            <span>Filter Projects</span>
          </button>

          {/* Filter Buttons */}
          <div className={`${styles.categoryFilters} ${showFilters ? styles.showMobile : ''}`}>
            {categories.map((category) => (
              <button
                key={category.id}
                className={`${styles.categoryButton} ${activeCategory === category.id ? styles.active : ''}`}
                onClick={() => handleCategoryChange(category.id)}
                style={{ '--category-color': category.color } as React.CSSProperties}
              >
                <span className={styles.categoryIcon}>{category.icon}</span>
                <span className={styles.categoryLabel}>{category.label}</span>
                <span className={styles.projectCount}>
                  {category.id === 'all' 
                    ? projects.length 
                    : projects.filter(p => p.category === category.id).length
                  }
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Slider */}
        <div className={`${styles.projectsSlider} ${isVisible ? styles.visible : ''}`}>
          <div ref={sliderRef} className={styles.sliderContainer}>
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className={`${styles.projectCard} ${project.featured ? styles.featured : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className={styles.projectImage}>
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className={styles.projectImg}
                    />
                  ) : (
                    <div className={styles.imagePlaceholder}>
                      <div className={styles.projectIcon}>
                        {categories.find(cat => cat.id === project.category)?.icon}
                      </div>
                    </div>
                  )}
                  
                  {/* Status Badge */}
                  <div 
                    className={styles.statusBadge}
                    style={{ backgroundColor: getStatusColor(project.status) }}
                  >
                    {project.status.replace('-', ' ')}
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className={styles.featuredBadge}>
                      ⭐
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className={styles.projectContent}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  
                  <div className={styles.projectCategory}>
                    {categories.find(cat => cat.id === project.category)?.label}
                  </div>

                  <p className={styles.projectDescription}>
                    {project.description.length > 80 
                      ? `${project.description.substring(0, 80)}...` 
                      : project.description
                    }
                  </p>

                  {/* Technologies - Show only top 3 */}
                  <div className={styles.techList}>
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className={styles.techMore}>
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className={styles.cardActions}>
                    <Link 
                      href={`/projects/${project.id}`}
                      className={styles.viewButton}
                    >
                      View Details
                    </Link>
                    <div className={styles.externalLinks}>
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={styles.iconLink}
                          title="GitHub"
                        >
                          <FaGithub />
                        </a>
                      )}
                      {project.demo && (
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={styles.iconLink}
                          title="Live Demo"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Buttons */}
          <div className={styles.sliderNavigation}>
            <button 
              className={styles.navButton}
              onClick={scrollLeft}
              aria-label="Previous projects"
            >
              <FaChevronLeft />
              Previous
            </button>
            
            <button 
              className={styles.navButton}
              onClick={scrollRight}
              aria-label="Next projects"
            >
              Next
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>🔍</div>
            <h3>No projects found</h3>
            <p>Try selecting a different category to see more projects.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className={`${styles.projectsCta} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.ctaContent}>
            <h3>Interested in Working Together?</h3>
            <p>I'm always open to discussing new projects and opportunities.</p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={`${styles.ctaButton} ${styles.primary}`}>
                Get In Touch
              </Link>
              <a 
                href="https://github.com/lahari17" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${styles.ctaButton} ${styles.secondary}`}
              >
                <FaGithub />
                View All Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
