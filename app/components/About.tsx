'use client'

import { useEffect, useLayoutEffect, useState, useRef } from 'react'
import styles from './About.module.css'
import { 
  SiPython, SiR, SiMysql, SiPandas, SiNumpy, SiPlotly, SiJupyter, SiApachespark, 
  SiTensorflow, SiPytorch, SiKeras, SiScikitlearn, SiOpencv,
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiExpress, 
  SiMongodb, SiPostgresql, SiGit, SiDocker, SiAmazon, 
  SiFirebase, SiVercel, SiTableau
} from 'react-icons/si'
import { 
  FaChartBar, FaChartLine, FaBrain, FaEye, FaLanguage, FaRandom, 
  FaProjectDiagram, FaNetworkWired, FaDatabase, FaCloud, FaFileExcel
} from 'react-icons/fa'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [stylesLoaded, setStylesLoaded] = useState(false)
  const aboutRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  // Ensure styles are loaded before showing content
  useLayoutEffect(() => {
    // Use layoutEffect to run before browser paint
    const timer = setTimeout(() => {
      setStylesLoaded(true)
    }, 0) // Immediate execution after layout
    
    return () => clearTimeout(timer)
  }, [])


  // Icon mapping for technologies
  const techIcons: { [key: string]: JSX.Element } = {
    // Data Science & Analytics
    "Python": <SiPython />,
    "R": <SiR />,
    "SQL": <FaDatabase />,
    "Pandas": <SiPandas />,
    "NumPy": <SiNumpy />,
    "Matplotlib": <FaChartLine />,
    "Seaborn": <FaChartBar />,
    "Plotly": <SiPlotly />,
    "Jupyter": <SiJupyter />,
    "Apache Spark": <SiApachespark />,
    "Hadoop": <FaDatabase />,
    "Excel": <FaFileExcel />,
    "Power BI": <FaChartBar />,
    "Tableau": <SiTableau />,
    
    // Machine Learning & AI
    "TensorFlow": <SiTensorflow />,
    "PyTorch": <SiPytorch />,
    "Keras": <SiKeras />,
    "Scikit-learn": <SiScikitlearn />,
    "XGBoost": <FaProjectDiagram />,
    "Random Forest": <FaRandom />,
    "SVM": <FaNetworkWired />,
    "Neural Networks": <FaBrain />,
    "Deep Learning": <FaBrain />,
    "NLP": <FaLanguage />,
    "Computer Vision": <FaEye />,
    "OpenCV": <SiOpencv />,
    "NLTK": <FaLanguage />,
    "spaCy": <FaLanguage />,
    
    // Full-Stack Development
    "JavaScript": <SiJavascript />,
    "TypeScript": <SiTypescript />,
    "React": <SiReact />,
    "Next.js": <SiNextdotjs />,
    "Node.js": <SiNodedotjs />,
    "Express": <SiExpress />,
    "MongoDB": <SiMongodb />,
    "PostgreSQL": <SiPostgresql />,
    "MySQL": <SiMysql />,
    "Git": <SiGit />,
    "Docker": <SiDocker />,
    "AWS": <SiAmazon />,
    "Azure": <FaCloud />,
    "Firebase": <SiFirebase />,
    "Vercel": <SiVercel />
  }

  const skills = [
    {
      title: "Data Science & Analytics",
      description: "Transforming raw data into actionable insights through statistical analysis and data mining",
      tech: ["Python", "R", "SQL", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Jupyter", "Apache Spark", "Hadoop", "Excel", "Power BI", "Tableau"],
      number: "01"
    },
    {
      title: "Machine Learning & AI",
      description: "Building intelligent systems that learn, predict, and adapt using advanced algorithms",
      tech: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "XGBoost", "Random Forest", "SVM", "Neural Networks", "Deep Learning", "NLP", "Computer Vision", "OpenCV", "NLTK", "spaCy"],
      number: "02"
    },
    {
      title: "Full-Stack Development",
      description: "Creating end-to-end solutions with modern web technologies and cloud platforms",
      tech: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL", "MySQL", "Git", "Docker", "AWS", "Azure", "Firebase", "Vercel"],
      number: "03"
    }
  ]

  // Creative About Me code content - static with syntax highlighting
  const aboutMeCode = {
    title: "about-me.tsx - Visual Studio Code",
    lines: [
      { 
        number: 1, 
        content: (
          <>
            <span className="keyword">import</span> <span className="bracket">{'{ '}</span>
            <span className="function">DataScientist</span><span className="operator">,</span> <span className="function">FullStackDeveloper</span>
            <span className="bracket">{' }'}</span> <span className="keyword">from</span> <span className="string">'./skills'</span>
          </>
        )
      },
      { 
        number: 2, 
        content: (
          <>
            <span className="comment">// Test colors: </span>
            <span className="keyword">const</span> <span className="function">test</span> <span className="operator">=</span> <span className="string">"working"</span><span className="bracket">;</span>
          </>
        )
      },
      { number: 3, content: "" },
      { 
        number: 4, 
        content: (
          <>
            <span className="keyword">type</span> <span className="function">PersonProps</span> <span className="operator">=</span> <span className="bracket">{'{'}</span>
          </>
        )
      },
      { 
        number: 5, 
        content: (
          <>
            &nbsp;&nbsp;<span className="variable">name</span><span className="operator">:</span> <span className="string">"Lahari"</span><span className="bracket">;</span>
          </>
        )
      },
      { 
        number: 6, 
        content: (
          <>
            &nbsp;&nbsp;<span className="variable">role</span><span className="operator">:</span> <span className="bracket">[</span>
            <span className="string">"Data Scientist"</span><span className="operator">,</span> <span className="string">"Full-Stack Developer"</span>
            <span className="bracket">]</span><span className="bracket">;</span>
          </>
        )
      },
      { 
        number: 7, 
        content: (
          <>
            &nbsp;&nbsp;<span className="variable">experience</span><span className="operator">:</span> <span className="string">"3+ years"</span><span className="bracket">;</span>
          </>
        )
      },
      { 
        number: 8, 
        content: (
          <>
            &nbsp;&nbsp;<span className="variable">passion</span><span className="operator">:</span> <span className="string">"transforming data into insights"</span><span className="bracket">;</span>
          </>
        )
      },
      { number: 9, content: <><span className="bracket">{'}'}</span></> },
      { number: 10, content: "" },
      { 
        number: 11, 
        content: (
          <>
            <span className="keyword">const</span> <span className="function">skills</span> <span className="operator">=</span> <span className="bracket">{'{'}</span>
          </>
        )
      },
      { 
        number: 12, 
        content: (
          <>
            &nbsp;&nbsp;<span className="variable">languages</span><span className="operator">:</span> <span className="bracket">[</span>
            <span className="string">"Python"</span><span className="operator">,</span> <span className="string">"JavaScript"</span><span className="operator">,</span> <span className="string">"TypeScript"</span><span className="operator">,</span> <span className="string">"R"</span>
            <span className="bracket">]</span><span className="operator">,</span>
          </>
        )
      },
      { 
        number: 13, 
        content: (
          <>
            &nbsp;&nbsp;<span className="variable">frameworks</span><span className="operator">:</span> <span className="bracket">[</span>
            <span className="string">"React"</span><span className="operator">,</span> <span className="string">"Next.js"</span><span className="operator">,</span> <span className="string">"TensorFlow"</span>
            <span className="bracket">]</span><span className="operator">,</span>
          </>
        )
      },
      { 
        number: 14, 
        content: (
          <>
            &nbsp;&nbsp;<span className="variable">databases</span><span className="operator">:</span> <span className="bracket">[</span>
            <span className="string">"MongoDB"</span><span className="operator">,</span> <span className="string">"PostgreSQL"</span><span className="operator">,</span> <span className="string">"MySQL"</span>
            <span className="bracket">]</span>
          </>
        )
      },
      { number: 15, content: <><span className="bracket">{'}'}</span></> },
      { number: 16, content: "" },
      { 
        number: 17, 
        content: <><span className="comment">// Building intelligent solutions that bridge</span></>
      },
      { 
        number: 18, 
        content: <><span className="comment">// advanced analytics with real-world applications</span></>
      },
      { 
        number: 19, 
        content: (
          <>
            <span className="keyword">const</span> <span className="function">mission</span> <span className="operator">=</span> <span className="string">"solving complex problems with data & code"</span><span className="bracket">;</span>
          </>
        )
      }
    ]
  }


  return (
    <section 
      ref={aboutRef} 
      className={styles.aboutContainer}
      style={{ 
        opacity: stylesLoaded ? 1 : 0, 
        transition: 'opacity 0.3s ease'
      }}
    >
      <div className={styles.aboutContent}>
        {/* Hero Section - Two Column Layout */}
        <div className={`${styles.heroIntro} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.heroColumns}>
            <div className={styles.heroLeft}>
              <h2 className={styles.mainTitle}>About Me</h2>
              <div className={styles.introContent}>
                <p className={styles.mainDescription}>
                  I'm a passionate Data Scientist and Full-Stack Developer who transforms complex data into meaningful insights 
                  and builds intelligent solutions that bridge the gap between advanced analytics and real-world applications.
                </p>
                <p className={styles.secondaryDescription}>
                  With over 3 years of experience in the tech industry, I specialize in creating end-to-end solutions 
                  that combine the power of machine learning with modern web technologies to solve real business problems.
                </p>
              </div>
            </div>
            <div className={styles.heroRight}>
              <div className={styles.codingInterface}>
                <div className={styles.vscodeWindow}>
                  {/* Window Controls */}
                  <div className={styles.windowHeader}>
                    <div className={styles.windowControls}>
                      <div className={`${styles.control} ${styles.close}`}></div>
                      <div className={`${styles.control} ${styles.minimize}`}></div>
                      <div className={`${styles.control} ${styles.maximize}`}></div>
                    </div>
                    <div className={styles.windowTitle}>{aboutMeCode.title}</div>
                  </div>
                  
                  {/* Code Editor - Full Height */}
                  <div className={`${styles.codeEditor} ${styles.fullHeight}`}>
                    <div className={styles.lineNumbers}>
                      {aboutMeCode.lines.map((line) => (
                        <div key={line.number} className={styles.lineNumber}>{line.number}</div>
                      ))}
                    </div>
                    <div className={styles.codeContent}>
                      {aboutMeCode.lines.map((line) => (
                        <div key={line.number} className={styles.codeLine}>
                          {line.content}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className={styles.skillsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Technical Expertise</h2>
            <p className={styles.sectionDescription}>
              My core competencies span across data science, machine learning, and full-stack development
            </p>
          </div>
          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <div key={index} className={`${styles.skillCard} ${isVisible ? styles.visible : ''}`}
                   style={{ animationDelay: `${index * 0.2}s` }}>
                <div className={styles.skillHeader}>
                  <div className={styles.skillNumber}>{skill.number}</div>
                  <h3 className={styles.skillTitle}>{skill.title}</h3>
                </div>
                <p className={styles.skillDescription}>{skill.description}</p>
                <div className={styles.techShowcase}>
                  {skill.tech.slice(0, 6).map((tech, techIndex) => (
                    <div key={techIndex} className={styles.techItem}>
                      <span className={styles.techIcon}>
                        {techIcons[tech] || <FaDatabase />}
                      </span>
                      <span className={styles.techName}>{tech}</span>
                    </div>
                  ))}
                </div>
                {skill.tech.length > 6 && (
                  <div className={styles.additionalTech}>
                    <div className={styles.additionalTechList}>
                      {skill.tech.slice(6).map((tech, techIndex) => (
                        <span key={techIndex} className={styles.additionalTechItem}>
                          <span className={styles.techIcon}>
                            {techIcons[tech] || <FaDatabase />}
                          </span>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className={styles.skillsFooter}>
            <p className={styles.skillsNote}>
              + Many more technologies and frameworks across various domains including DevOps, 
              Testing, Visualization, and Specialized ML libraries that I work with regularly
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className={styles.statsSection}>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>50+</div>
              <div className={styles.statLabel}>Projects Completed</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>3+</div>
              <div className={styles.statLabel}>Years Experience</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>15+</div>
              <div className={styles.statLabel}>Technologies Mastered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}