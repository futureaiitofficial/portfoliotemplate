'use client'

import { useEffect, useLayoutEffect, useState, useRef } from 'react'
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
      className="about-container"
      style={{ 
        opacity: stylesLoaded ? 1 : 0, 
        transition: 'opacity 0.3s ease',
        position: 'relative',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #192f37 100%)',
        padding: '6rem 0'
      }}
    >
      <div 
        className="about-content"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}
      >
        {/* Hero Section - Two Column Layout */}
        <div className={`hero-intro ${isVisible ? 'visible' : ''}`}>
          <div className="hero-columns">
            <div className="hero-left">
              <h2 className="main-title">About Me</h2>
              <div className="intro-content">
                <p className="main-description">
                  I'm a passionate Data Scientist and Full-Stack Developer who transforms complex data into meaningful insights 
                  and builds intelligent solutions that bridge the gap between advanced analytics and real-world applications.
                </p>
                <p className="secondary-description">
                  With over 3 years of experience in the tech industry, I specialize in creating end-to-end solutions 
                  that combine the power of machine learning with modern web technologies to solve real business problems.
                </p>
              </div>
            </div>
            <div className="hero-right">
              <div className="coding-interface">
                <div className="vscode-window">
                  {/* Window Controls */}
                  <div className="window-header">
                    <div className="window-controls">
                      <div className="control close"></div>
                      <div className="control minimize"></div>
                      <div className="control maximize"></div>
                    </div>
                    <div className="window-title">{aboutMeCode.title}</div>
                  </div>
                  
                  {/* Code Editor - Full Height */}
                  <div className="code-editor full-height">
                    <div className="line-numbers">
                      {aboutMeCode.lines.map((line) => (
                        <div key={line.number} className="line-number">{line.number}</div>
                      ))}
                    </div>
                    <div className="code-content">
                      {aboutMeCode.lines.map((line) => (
                        <div key={line.number} className="code-line">
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
        <div className="skills-section">
          <div className="section-header">
            <h2 className="section-title">Technical Expertise</h2>
            <p className="section-description">
              My core competencies span across data science, machine learning, and full-stack development
            </p>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className={`skill-card ${isVisible ? 'visible' : ''}`}
                   style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="skill-header">
                  <div className="skill-number">{skill.number}</div>
                  <h3 className="skill-title">{skill.title}</h3>
                </div>
                <p className="skill-description">{skill.description}</p>
                <div className="tech-showcase">
                  {skill.tech.slice(0, 6).map((tech, techIndex) => (
                    <div key={techIndex} className="tech-item">
                      <span className="tech-icon">
                        {techIcons[tech] || <FaDatabase />}
                      </span>
                      <span className="tech-name">{tech}</span>
                    </div>
                  ))}
                </div>
                {skill.tech.length > 6 && (
                  <div className="additional-tech">
                    <div className="additional-tech-list">
                      {skill.tech.slice(6).map((tech, techIndex) => (
                        <span key={techIndex} className="additional-tech-item">
                          <span className="tech-icon">
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
          
          <div className="skills-footer">
            <p className="skills-note">
              + Many more technologies and frameworks across various domains including DevOps, 
              Testing, Visualization, and Specialized ML libraries that I work with regularly
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Technologies Mastered</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-container {
          position: relative;
          min-height: 100vh;
          background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #192f37 100%);
          padding: 6rem 0;
          transition: opacity 0.3s ease;
        }

        .about-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Hero Section */
        .hero-intro {
          margin-bottom: 5rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }

        .hero-intro.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-columns {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 3rem;
          align-items: center;
          min-height: 60vh;
          max-width: 100%;
        }

        .hero-left {
          padding-right: 1rem;
          min-width: 0; /* Prevent flex item from growing */
        }

        .hero-right {
          position: relative;
          height: 100%;
          min-height: 450px;
          max-height: 500px;
          overflow: hidden;
        }

        .main-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 300;
          color: white;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .intro-content {
          max-width: 600px;
        }

        .main-description {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .secondary-description {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
        }

        /* VS Code Interface */
        .coding-interface {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .vscode-window {
          background: #1e1e1e;
          border-radius: 8px;
          border: 1px solid #323233;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
          width: 100%;
          max-width: 500px;
          height: 100%;
          max-height: 450px;
          overflow: hidden;
          font-family: 'Monaco', 'Menlo', 'Consolas', monospace;
          animation: windowAppear 1s ease-out;
          margin: 0 auto;
        }

        .window-header {
          background: #2d2d30;
          height: 35px;
          display: flex;
          align-items: center;
          padding: 0 1rem;
          border-bottom: 1px solid #323233;
        }

        .window-controls {
          display: flex;
          gap: 8px;
          margin-right: 1rem;
        }

        .control {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          cursor: pointer;
        }

        .control.close { background: #ff5f57; }
        .control.minimize { background: #ffbd2e; }
        .control.maximize { background: #28ca42; }

        .window-title {
          color: #cccccc;
          font-size: 0.7rem;
          font-weight: 400;
        }

        .tab-bar {
          background: #2d2d30;
          display: flex;
          border-bottom: 1px solid #323233;
        }

        .tab {
          background: #2d2d30;
          color: #969696;
          padding: 0.5rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          border-right: 1px solid #323233;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .tab.active {
          background: #1e1e1e;
          color: #ffffff;
        }

        .tab:hover {
          background: #323233;
        }

        .tab-icon {
          font-size: 0.9rem;
        }

        .tab-name {
          font-size: 0.7rem;
        }

        .tab-close {
          margin-left: 0.5rem;
          opacity: 0.6;
          font-size: 1rem;
        }

        .tab-close:hover {
          opacity: 1;
        }

        .code-editor {
          display: flex;
          height: 65%;
          background: #1e1e1e;
          min-height: 200px;
        }

        .code-editor.full-height {
          height: calc(100% - 35px); /* Full height minus header */
          min-height: 350px;
        }

        .line-numbers {
          background: #1e1e1e;
          color: #858585;
          padding: 0.5rem 0.3rem;
          text-align: right;
          font-size: 0.7rem;
          line-height: 1.3;
          border-right: 1px solid #323233;
          user-select: none;
          min-width: 40px;
        }

        .line-number {
          padding: 0 0.3rem;
          height: 1.3rem;
        }

        .code-content {
          flex: 1;
          padding: 0.5rem;
          font-size: 0.7rem;
          line-height: 1.3;
          overflow: hidden;
        }
        
        .code-content > .code-line {
          color: #d4d4d4;
        }

        .code-line {
          height: 1.3rem;
          white-space: nowrap;
        }

        .code-content .keyword { color: #c586c0 !important; font-weight: 500; }
        .code-content .module { color: #4fc1ff !important; }
        .code-content .function { color: #dcdcaa !important; }
        .code-content .variable { color: #9cdcfe !important; }
        .code-content .string { color: #ce9178 !important; }
        .code-content .comment { color: #6a9955 !important; font-style: italic; }
        .code-content .number { color: #b5cea8 !important; }
        .code-content .parameter { color: #9cdcfe !important; }
        .code-content .operator { color: #d4d4d4 !important; }
        .code-content .bracket { color: #ffd700 !important; }
        .code-content .jsx-tag { color: #569cd6 !important; }
        .code-content .jsx-attribute { color: #92c5f8 !important; }
        .code-content .jsx-string { color: #ce9178 !important; }


        .terminal {
          background: #1e1e1e;
          border-top: 1px solid #323233;
          height: 35%;
          min-height: 120px;
        }

        .terminal-header {
          background: #2d2d30;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 1rem;
          border-bottom: 1px solid #323233;
        }

        .terminal-title {
          color: #cccccc;
          font-size: 0.7rem;
          font-weight: 500;
        }

        .terminal-controls {
          display: flex;
          gap: 0.5rem;
          color: #969696;
          font-size: 0.8rem;
        }

        .terminal-control {
          cursor: pointer;
          padding: 0.2rem;
        }

        .terminal-control:hover {
          color: #ffffff;
        }

        .terminal-content {
          padding: 0.5rem;
          color: #d4d4d4;
          font-size: 0.7rem;
          line-height: 1.3;
        }

        .terminal-line {
          margin-bottom: 0.3rem;
        }

        .prompt {
          color: #569cd6;
          margin-right: 0.5rem;
        }

        .command {
          color: #ffffff;
        }

        .output {
          margin-left: 1rem;
        }

        .success {
          color: #4ec9b0;
        }

        .info {
          color: #dcdcaa;
        }

        .typing-cursor {
          background: #ffffff;
          color: #1e1e1e;
          animation: blink 1s infinite;
        }

        @keyframes windowAppear {
          0% {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }


        /* Skills Section */
        .skills-section {
          margin-bottom: 5rem;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 2.5rem);
          font-weight: 300;
          color: white;
          margin-bottom: 1rem;
        }

        .section-description {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.7);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.5;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .skill-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(64, 224, 208, 0.1);
          border-radius: 16px;
          padding: 2rem;
          opacity: 0;
          transform: translateY(30px);
          animation: slideUp 0.6s ease forwards;
          transition: all 0.3s ease;
        }

        .skill-card:hover {
          transform: translateY(-5px);
          border-color: rgba(64, 224, 208, 0.3);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .skill-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .skill-number {
          font-size: 1.5rem;
          font-weight: 300;
          color: rgba(64, 224, 208, 0.8);
          background: rgba(64, 224, 208, 0.1);
          padding: 0.5rem 1rem;
          border-radius: 8px;
          min-width: 60px;
          text-align: center;
        }

        .skill-title {
          font-size: 1.4rem;
          font-weight: 500;
          color: white;
          margin: 0;
        }

        .skill-description {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }

        .tech-showcase {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 0.75rem;
        }

        .tech-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(64, 224, 208, 0.05);
          padding: 0.5rem 0.75rem;
          border-radius: 8px;
          border: 1px solid rgba(64, 224, 208, 0.1);
          transition: all 0.2s ease;
        }

        .tech-item:hover {
          background: rgba(64, 224, 208, 0.1);
          border-color: rgba(64, 224, 208, 0.3);
        }

        .tech-icon {
          font-size: 1rem;
          color: rgba(64, 224, 208, 1);
        }

        .tech-name {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .additional-tech {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(64, 224, 208, 0.1);
        }

        .additional-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .additional-tech-item {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          background: rgba(64, 224, 208, 0.03);
          color: rgba(255, 255, 255, 0.6);
          padding: 0.3rem 0.6rem;
          border-radius: 6px;
          font-size: 0.8rem;
          border: 1px solid rgba(64, 224, 208, 0.05);
        }

        .additional-tech-item .tech-icon {
          font-size: 0.9rem;
          color: rgba(64, 224, 208, 0.7);
        }

        .skills-footer {
          margin-top: 3rem;
          text-align: center;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 12px;
          border: 1px solid rgba(64, 224, 208, 0.1);
        }

        .skills-note {
          color: rgba(255, 255, 255, 0.6);
          font-size: 1rem;
          line-height: 1.5;
          margin: 0;
          font-style: italic;
        }

        /* Stats Section */
        .stats-section {
          text-align: center;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }

        .stat-item {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(64, 224, 208, 0.1);
          border-radius: 12px;
          padding: 2rem 1rem;
          transition: all 0.3s ease;
        }

        .stat-item:hover {
          border-color: rgba(64, 224, 208, 0.3);
          transform: translateY(-2px);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 300;
          color: rgba(64, 224, 208, 1);
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: rgba(255, 255, 255, 0.7);
          font-size: 1rem;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .hero-columns {
            gap: 2rem;
            grid-template-columns: 1fr 1fr;
          }

          .hero-left {
            padding-right: 0.5rem;
          }

          .hero-right {
            min-height: 350px;
            max-height: 400px;
          }

          .vscode-window {
            max-width: 450px;
            max-height: 350px;
          }
        }

        @media (max-width: 768px) {
          .about-container {
            padding: 4rem 0;
          }

          .about-content {
            padding: 0 1rem;
          }

          .hero-columns {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }

          .hero-left {
            padding-right: 0;
          }

          .hero-right {
            min-height: 300px;
            order: -1;
          }

          .vscode-window {
            max-width: 100%;
            max-height: 300px;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }

          .skill-card {
            padding: 1.5rem;
          }

          .tech-showcase {
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
          }

          .stats-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }

        @media (max-width: 480px) {
          .hero-intro {
            margin-bottom: 3rem;
          }

          .hero-right {
            min-height: 250px;
          }

          .vscode-window {
            max-width: 100%;
            max-height: 250px;
          }

          .window-title {
            font-size: 0.7rem;
          }

          .tab-name {
            display: none;
          }

          .code-content {
            font-size: 0.7rem;
            padding: 0.5rem;
          }

          .line-numbers {
            padding: 0.5rem 0.3rem;
            font-size: 0.7rem;
          }

          .terminal-content {
            padding: 0.5rem;
            font-size: 0.7rem;
          }

          .main-description {
            font-size: 1.1rem;
          }

          .skill-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }

          .tech-showcase {
            grid-template-columns: 1fr 1fr;
          }

        }
      `}</style>
    </section>
  )
}