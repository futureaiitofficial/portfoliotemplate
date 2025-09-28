'use client'

import { useState } from 'react'
import styles from './Experience.module.css'

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
      year: '2023',
      role: 'Software Engineer Engineer (AI/ML)',
      company: 'CalPoly Pomona',
      period: 'April 2024 - Present',
      type: 'Full-time',
      location: 'Los Angeles, CA',
      description: 'Leading full-stack development of AI-powered applications with modern web technologies, architecting scalable solutions that integrate machine learning models with user-friendly interfaces.',
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'GraphQL', 'Docker', 'AWS'],
      color: '#40E0D0'
    },
    {
      id: 2,
      year: '2021',
      role: 'Senior Software Engineer',
      company: 'Infosys',
      period: 'March 2021 - June 2023',
      type: 'Full-time',
      location: 'Hyderabad, India',
      description: 'Developed web-based applications for B2C models using ServiceNow technology, automating case management for Goldman Sachs and British American Tobacco clients.',
      technologies: ['Python', 'JavaScript', 'Scikit-learn', 'NLP', 'ServiceNow', 'Git', 'Jupyter', 'NumPy'],
      color: '#20B2AA'
    },
    {
      id: 3,
      year: '2021',
      role: 'Data Science Intern',
      company: 'EduGrad',
      period: 'May 2019 - August 2019',
      type: 'Part-time',
      location: 'Hyderabad, India',
      description: 'Led the development of ML pipelines and deployed scalable machine learning solutions in production, serving over 1M users daily with improved model performance.',
      technologies: ['Python', 'TensorFlow', 'Docker', 'Kubernetes', 'AWS', 'MLflow', 'Scikit-learn', 'PostgreSQL'],
      color: '#48D1CC'
    },
  ]

  return (
    <div className={styles.experienceContainer}>
      <div className={styles.experienceContent}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Work Experience</h2>
          <p className={styles.sectionSubtitle}>Journey through innovation and growth</p>
        </div>

        {/* Timeline Container */}
        <div className={styles.timelineContainer}>
          {/* Horizontal Timeline Line */}
          <div className={styles.timelineLine}></div>
          
          {/* Experience Cards */}
          <div className={styles.timelineItems}>
            {experiences.map((experience, index) => (
              <div key={experience.id} className={styles.timelineItem}>
                {/* Timeline Dot */}
                <div className={styles.timelineDot} style={{ backgroundColor: experience.color }}>
                  <span className={styles.timelineYear}>{experience.year}</span>
                </div>
                
                {/* Flip Card */}
                <div className={styles.flipCard}>
                  <div className={styles.flipCardInner}>
                    {/* Front Side */}
                    <div className={styles.flipCardFront} style={{ borderTopColor: experience.color }}>
                      <div className={styles.cardFrontContent}>
                        <h3 className={styles.frontRole}>{experience.role}</h3>
                        <h4 className={styles.frontCompany}>{experience.company}</h4>
                        <div className={styles.frontDetails}>
                          <span className={styles.frontPeriod}>{experience.period}</span>
                          <div className={styles.frontMeta}>
                            <span className={styles.frontType}>{experience.type}</span>
                            <span className={styles.frontLocation}>{experience.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Back Side */}
                    <div className={styles.flipCardBack} style={{ borderTopColor: experience.color }}>
                      <div className={styles.cardBackContent}>
                        <h4 className={styles.backTechTitle}>Technologies</h4>
                        <div className={styles.backTechList}>
                          {(expandedCards[experience.id] ? experience.technologies : experience.technologies.slice(0, 6)).map((tech, techIndex) => (
                            <span key={techIndex} className={styles.backTechTag}>{tech}</span>
                          ))}
                          {experience.technologies.length > 6 && (
                            <button
                              className={styles.techExpandBtn}
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
                        
                        <h4 className={styles.backTitle}>Role Description</h4>
                        <p className={styles.backDescription}>{experience.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={styles.experienceCta}>
          <div className={styles.ctaContent}>
            <h3>Let's Build Something Amazing</h3>
            <p>Ready to bring your ideas to life with cutting-edge technology?</p>
            <div className={styles.ctaButtons}>
              <button className={`${styles.ctaBtn} ${styles.primary}`}>Start a Project</button>
              <button className={`${styles.ctaBtn} ${styles.secondary}`}>View Portfolio</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}