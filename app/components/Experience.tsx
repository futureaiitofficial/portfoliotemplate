'use client'

import { useState } from 'react'

export default function Experience() {
  const [activeCard, setActiveCard] = useState(0)
  const [expandedCards, setExpandedCards] = useState<{[key: number]: boolean}>({})

  const toggleExpanded = (cardId: number) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }))
  }

  const experiences = [
    {
      id: 1,
      year: '2022',
      role: 'Senior Full-Stack Developer',
      company: 'InnovateAI Labs',
      period: 'Jan 2022 - Present',
      type: 'Full-time',
      location: 'New York, NY',
      description: 'Leading full-stack development of AI-powered applications with modern web technologies, architecting scalable solutions that integrate machine learning models with user-friendly interfaces.',
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'GraphQL', 'Docker', 'AWS'],
      color: '#40E0D0'
    },
    {
      id: 2,
      year: '2021',
      role: 'Machine Learning Engineer',
      company: 'DataFlow Analytics',
      period: 'Mar 2021 - Dec 2021',
      type: 'Full-time',
      location: 'San Francisco, CA',
      description: 'Led the development of ML pipelines and deployed scalable machine learning solutions in production, serving over 1M users daily with improved model performance.',
      technologies: ['Python', 'TensorFlow', 'Docker', 'Kubernetes', 'AWS', 'MLflow', 'Scikit-learn', 'PostgreSQL'],
      color: '#48D1CC'
    },
    {
      id: 3,
      year: '2020',
      role: 'Data Science Intern',
      company: 'TechCorp Solutions',
      period: 'Jun 2020 - Aug 2020',
      type: 'Internship',
      location: 'Remote',
      description: 'Developed machine learning models for predictive analytics and created interactive data visualization dashboards, processing and analyzing millions of data points.',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Tableau', 'SQL', 'Git', 'Jupyter', 'NumPy'],
      color: '#20B2AA'
    }
  ]

  return (
    <div className="experience-container">
      <div className="experience-content">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">Journey through innovation and growth</p>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container">
          {/* Horizontal Timeline Line */}
          <div className="timeline-line"></div>
          
          {/* Experience Cards */}
          <div className="timeline-items">
            {experiences.map((experience, index) => (
              <div key={experience.id} className="timeline-item">
                {/* Timeline Dot */}
                <div className="timeline-dot" style={{ backgroundColor: experience.color }}>
                  <span className="timeline-year">{experience.year}</span>
                </div>
                
                {/* Flip Card */}
                <div className="flip-card">
                  <div className="flip-card-inner">
                    {/* Front Side */}
                    <div className="flip-card-front" style={{ borderTopColor: experience.color }}>
                      <div className="card-front-content">
                        <h3 className="front-role">{experience.role}</h3>
                        <h4 className="front-company">{experience.company}</h4>
                        <div className="front-details">
                          <span className="front-period">{experience.period}</span>
                          <div className="front-meta">
                            <span className="front-type">{experience.type}</span>
                            <span className="front-location">{experience.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Back Side */}
                    <div className="flip-card-back" style={{ borderTopColor: experience.color }}>
                      <div className="card-back-content">
                        <h4 className="back-tech-title">Technologies</h4>
                        <div className="back-tech-list">
                          {(expandedCards[experience.id] ? experience.technologies : experience.technologies.slice(0, 6)).map((tech, techIndex) => (
                            <span key={techIndex} className="back-tech-tag">{tech}</span>
                          ))}
                          {experience.technologies.length > 6 && (
                            <button
                              className="tech-expand-btn"
                              onClick={(e) => {
                                e.stopPropagation()
                                toggleExpanded(experience.id)
                              }}
                            >
                              {expandedCards[experience.id] 
                                ? '- show less' 
                                : `+${experience.technologies.length - 6} more`
                              }
                            </button>
                          )}
                        </div>
                        
                        <h4 className="back-title">Role Description</h4>
                        <p className="back-description">{experience.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="experience-cta">
          <div className="cta-content">
            <h3>Let's Build Something Amazing</h3>
            <p>Ready to bring your ideas to life with cutting-edge technology?</p>
            <div className="cta-buttons">
              <button className="cta-btn primary">Start a Project</button>
              <button className="cta-btn secondary">View Portfolio</button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .experience-container {
          position: relative;
          min-height: 100vh;
          background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #192f37 100%);
          padding: 4rem 0;
        }

        .experience-content {
          position: relative;
          max-width: 1000px;
          width: 100%;
          margin: 0 auto;
          padding: 2rem;
        }

        /* Section Header */
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 300;
          color: white;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: rgba(64, 224, 208, 0.8);
          margin: 0;
        }

        /* Timeline Container */
        .timeline-container {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Horizontal Timeline Line */
        .timeline-line {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(to right, 
            rgba(64, 224, 208, 0.6) 0%,
            rgba(64, 224, 208, 0.8) 50%,
            rgba(64, 224, 208, 0.6) 100%
          );
          transform: translateY(-50%);
        }

        /* Timeline Items Container */
        .timeline-items {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
        }

        /* Timeline Items */
        .timeline-item {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
        }

        /* Timeline Dots */
        .timeline-dot {
          position: relative;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
          border: 3px solid rgba(255, 255, 255, 0.1);
          margin-bottom: 2rem;
        }

        /* Flip Card */
        .flip-card {
          width: 100%;
          max-width: 350px;
          height: 350px;
          perspective: 1000px;
        }

        .timeline-year {
          color: white;
          font-size: 1.1rem;
          font-weight: 600;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(64, 224, 208, 0.2);
          border-top: 4px solid;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }

        /* Front Card Content */
        .card-front-content {
          padding: 1.5rem;
          text-align: left;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .front-role {
          font-size: 1.3rem;
          font-weight: 600;
          color: white;
          margin-bottom: 0.5rem;
          line-height: 1.2;
        }

        .front-company {
          font-size: 1.1rem;
          color: rgba(64, 224, 208, 0.9);
          margin-bottom: 1rem;
          font-weight: 500;
        }

        .front-details {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .front-period {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.8);
          font-weight: 500;
        }

        .front-meta {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .front-type, .front-location {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.6);
          background: rgba(255, 255, 255, 0.1);
          padding: 0.3rem 0.6rem;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* Back Card Content */
        .card-back-content {
          padding: 1.2rem;
          text-align: left;
          width: 100%;
          height: 100%;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }

        .back-tech-title {
          font-size: 0.9rem;
          color: rgba(64, 224, 208, 0.9);
          margin-bottom: 0.4rem;
          font-weight: 600;
        }

        .back-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.3rem;
          margin-bottom: 0.8rem;
          align-items: center;
        }

        .back-title {
          font-size: 1rem;
          color: rgba(64, 224, 208, 0.9);
          margin-bottom: 0.4rem;
          font-weight: 600;
        }

        .back-description {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.4;
          margin: 0;
          flex: 1;
        }

        .back-tech-tag {
          font-size: 0.7rem;
          background: rgba(64, 224, 208, 0.1);
          color: rgba(64, 224, 208, 0.9);
          padding: 0.2rem 0.5rem;
          border-radius: 6px;
          border: 1px solid rgba(64, 224, 208, 0.2);
          white-space: nowrap;
        }

        .tech-expand-btn {
          font-size: 0.7rem;
          background: rgba(255, 255, 255, 0.1);
          color: rgba(64, 224, 208, 0.8);
          padding: 0.2rem 0.5rem;
          border-radius: 6px;
          border: 1px dashed rgba(64, 224, 208, 0.4);
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .tech-expand-btn:hover {
          background: rgba(64, 224, 208, 0.1);
          border-color: rgba(64, 224, 208, 0.6);
          color: rgba(64, 224, 208, 1);
          transform: translateY(-1px);
        }

        /* Experience CTA */
        .experience-cta {
          text-align: center;
          margin-top: 4rem;
        }

        .cta-content {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 2rem;
          backdrop-filter: blur(15px);
          border: 1px solid rgba(64, 224, 208, 0.2);
          max-width: 500px;
          margin: 0 auto;
        }

        .cta-content h3 {
          font-size: 1.5rem;
          font-weight: 300;
          color: white;
          margin-bottom: 1rem;
        }

        .cta-content p {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-btn {
          padding: 0.8rem 1.5rem;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          text-decoration: none;
        }

        .cta-btn.primary {
          background: linear-gradient(135deg, rgba(64, 224, 208, 1), rgba(72, 209, 204, 1));
          color: #0f2027;
        }

        .cta-btn.secondary {
          background: transparent;
          color: rgba(64, 224, 208, 0.9);
          border: 1px solid rgba(64, 224, 208, 0.5);
        }

        .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(64, 224, 208, 0.3);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .timeline-container {
            max-width: 900px;
          }

          .flip-card {
            max-width: 300px;
            height: 320px;
          }

          .timeline-dot {
            width: 70px;
            height: 70px;
          }

          .timeline-year {
            font-size: 1rem;
          }
        }

        @media (max-width: 768px) {
          .experience-container {
            padding: 2rem 0;
          }

          .experience-content {
            padding: 1rem;
          }

          .timeline-items {
            flex-direction: column;
            gap: 3rem;
          }

          .timeline-line {
            top: 0;
            left: 50%;
            right: auto;
            bottom: 0;
            width: 2px;
            height: auto;
            background: linear-gradient(to bottom, 
              rgba(64, 224, 208, 0.6) 0%,
              rgba(64, 224, 208, 0.8) 50%,
              rgba(64, 224, 208, 0.6) 100%
            );
            transform: translateX(-50%);
          }

          .timeline-item {
            flex-direction: row;
            align-items: center;
            width: 100%;
          }

          .flip-card {
            max-width: 400px;
            height: 350px;
            margin-bottom: 0;
            margin-right: 2rem;
            order: 2;
          }

          .timeline-dot {
            width: 80px;
            height: 80px;
            order: 1;
            margin-bottom: 0;
            margin-right: 0;
          }

          .timeline-item:nth-child(even) {
            flex-direction: row-reverse;
          }

          .timeline-item:nth-child(even) .flip-card {
            margin-right: 0;
            margin-left: 2rem;
            order: 2;
          }

          .timeline-item:nth-child(even) .timeline-dot {
            order: 1;
          }

          .front-role {
            font-size: 1.3rem;
          }

          .front-company {
            font-size: 1.1rem;
          }

          .front-meta {
            flex-direction: column;
            gap: 0.5rem;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .cta-btn {
            width: 100%;
            max-width: 200px;
          }
        }

        @media (max-width: 480px) {
          .timeline-container {
            max-width: 100%;
          }

          .timeline-item {
            flex-direction: column !important;
            align-items: center;
          }

          .timeline-dot {
            width: 60px;
            height: 60px;
            order: 1;
            margin-bottom: 1rem;
          }

          .flip-card {
            max-width: 300px;
            height: 350px;
            margin: 0 !important;
            order: 2;
          }

          .timeline-year {
            font-size: 0.9rem;
          }

          .card-front-content, .card-back-content {
            padding: 1rem;
          }

          .front-role {
            font-size: 1.2rem;
          }

          .back-tech-list {
            gap: 0.3rem;
          }

          .back-tech-tag {
            font-size: 0.7rem;
            padding: 0.2rem 0.4rem;
          }

          .timeline-line {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}