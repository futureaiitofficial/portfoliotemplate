'use client'

import { useState, useEffect } from 'react'
import { FaFileAlt, FaExternalLinkAlt, FaCalendarAlt, FaBookOpen, FaQuoteLeft, FaUsers, FaGlobe } from 'react-icons/fa'
import styles from './Publications.module.css'

export default function Publications() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const publications = [
    {
      id: 1,
      title: "PERSONAL VOICE ASSISTANT",
      journal: "International Journal of Emerging Technologies and Innovative Research (JETIR)",
      issn: "2349-5162",
      volume: "Vol.7",
      issue: "Issue 6",
      pages: "830-835",
      date: "June 2020",
      url: "http://www.jetir.org/papers/JETIR2006456.pdf",
      abstract: "This research paper investigates the development of voice-controlled personal assistants (VPAs) leveraging Natural Language Processing (NLP) and Machine Learning. It emphasizes the shift from pattern to context-based text recognition using NLP techniques, enabling offline functionality and data storage within the application. The study underscores the importance of enhanced accuracy, cost reduction, and improved user experience in voice recognition systems, proposing future enhancements like multilingual support and cloud deployment.",
      keywords: ["Natural Language Processing", "Machine Learning", "Voice Recognition", "Personal Assistant", "Offline Functionality"],
      type: "Research Paper",
      status: "Published",
      impact: "Contributed to advancing offline voice assistant technology with improved accuracy and cost-effectiveness"
    }
  ]

  if (!isMounted) {
    return (
      <div className={styles.container}>
        <div className={styles.loadingState}>
          <div className={styles.loadingSpinner}></div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            <FaFileAlt className={styles.titleIcon} />
            Publications
          </h2>
          <p className={styles.subtitle}>Research contributions in technology and innovation</p>
        </div>

        {/* Publications Grid */}
        <div className={styles.publicationsGrid}>
          {publications.map((publication) => (
            <article key={publication.id} className={styles.publicationCard}>
              {/* Publication Header */}
              <div className={styles.publicationHeader}>
                <h3 className={styles.publicationTitle}>{publication.title}</h3>
                <span className={styles.statusBadge}>{publication.status}</span>
              </div>

              {/* Journal & Details */}
              <div className={styles.journalInfo}>
                <div className={styles.journalName}>
                  <FaGlobe />
                  <span>{publication.journal}</span>
                </div>
                <div className={styles.publicationMeta}>
                  <span>{publication.volume}, {publication.issue}</span>
                  <span>•</span>
                  <span>{publication.pages}</span>
                  <span>•</span>
                  <span>{publication.date}</span>
                </div>
              </div>

              {/* Abstract - Shortened */}
              <p className={styles.abstractText}>
                {publication.abstract.length > 200 
                  ? `${publication.abstract.substring(0, 200)}...` 
                  : publication.abstract}
              </p>

              {/* Keywords */}
              <div className={styles.keywordsList}>
                {publication.keywords.slice(0, 4).map((keyword, index) => (
                  <span key={index} className={styles.keywordTag}>
                    {keyword}
                  </span>
                ))}
                {publication.keywords.length > 4 && (
                  <span className={styles.keywordTag}>+{publication.keywords.length - 4} more</span>
                )}
              </div>

              {/* Actions */}
              <div className={styles.publicationActions}>
                <a
                  href={publication.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.readPaperBtn}
                >
                  <FaExternalLinkAlt />
                  Read Paper
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
