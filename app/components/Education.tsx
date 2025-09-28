'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FaGraduationCap, FaLaptopCode } from 'react-icons/fa';
import styles from './Education.module.css';

interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  year: string;
  gpa?: string;
  coursework: string[];
  color: string;
  icon: React.ComponentType;
}

const Education: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const educationRef = useRef<HTMLDivElement>(null);

  const educations: EducationItem[] = [
    {
      id: 'masters',
      degree: 'Master of Science',
      field: 'Computer Science',
      institution: 'California Polytechnic State University, Pomona',
      year: '2023 - 2025',
      gpa: '4.0/4.0',
      coursework: [
        'Data Mining',
        'Advanced Algorithms',
        'Advanced Computer Architecture',
        'Human Computer Interaction',
        'Advanced Software Engineering',
        'Cloud Computing'
      ],
      color: '#40E0D0',
      icon: FaGraduationCap
    },
    {
      id: 'bachelors',
      degree: 'Bachelor of Technology',
      field: 'Computer Science & Engineering',
      institution: 'Osmania University',
      year: '2016 - 2020',
      gpa: '3.7/4.0',
      coursework: [
        'Data Structures and Algorithms',
        'Database Management Systems',
        'Operating Systems',
        'Computer Networks',
        'Artificial Intelligence'
      ],
      color: '#48D1CC',
      icon: FaLaptopCode
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    return () => observer.disconnect();
  }, []);


  return (
    <section ref={educationRef} className={styles.educationContainer}>
      <div className={styles.educationContent}>
        {/* Header */}
        <div className={`${styles.sectionHeader} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <p className={styles.sectionSubtitle}>
            Academic foundation in technology and data science
          </p>
        </div>

        {/* Education Grid */}
        <div className={styles.educationGrid}>
          {educations.map((education, index) => {
            const IconComponent = education.icon;
            return (
              <div 
                key={education.id}
                className={`${styles.educationCard} ${isVisible ? styles.visible : ''}`}
                style={{ '--accent-color': education.color } as React.CSSProperties}
              >
                {/* Card Header */}
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrapper}>
                    <IconComponent />
                  </div>
                  <div className={styles.yearBadge}>
                    {education.year}
                  </div>
                </div>

                {/* Card Content */}
                <div className={styles.cardBody}>
                  <h3 className={styles.degreeTitle}>{education.degree}</h3>
                  <h4 className={styles.fieldTitle}>{education.field}</h4>
                  <p className={styles.institution}>{education.institution}</p>
                  
                  {education.gpa && (
                    <div className={styles.gpaDisplay}>
                      <span className={styles.gpaLabel}>GPA:</span>
                      <span className={styles.gpaValue}>{education.gpa}</span>
                    </div>
                  )}
                </div>

                {/* Coursework */}
                <div className={styles.courseworkSection}>
                  <div className={styles.courseworkHeader}>
                    <h5 className={styles.courseworkTitle}>Key Coursework</h5>
                  </div>
                  <div className={styles.courseworkGrid}>
                    {education.coursework.map((course, idx) => (
                      <span key={idx} className={styles.courseChip}>
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;

