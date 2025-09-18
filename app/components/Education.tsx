'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FaGraduationCap, FaLaptopCode } from 'react-icons/fa';

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
      field: 'Data Science',
      institution: 'University of Technology',
      year: '2021 - 2023',
      gpa: '3.9/4.0',
      coursework: [
        'Machine Learning',
        'Deep Learning',
        'Statistical Analysis',
        'Data Mining',
        'Computer Vision',
        'Natural Language Processing'
      ],
      color: '#40E0D0',
      icon: FaGraduationCap
    },
    {
      id: 'bachelors',
      degree: 'Bachelor of Technology',
      field: 'Computer Science & Engineering',
      institution: 'Institute of Engineering',
      year: '2017 - 2021',
      gpa: '3.8/4.0',
      coursework: [
        'Data Structures & Algorithms',
        'Database Management',
        'Software Engineering',
        'Web Development',
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
    <section ref={educationRef} className="education-container">
      <div className="education-content">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Academic foundation in technology and data science
          </p>
        </div>

        {/* Education Grid */}
        <div className="education-grid">
          {educations.map((education, index) => {
            const IconComponent = education.icon;
            return (
              <div 
                key={education.id}
                className="education-card"
                style={{ '--accent-color': education.color } as React.CSSProperties}
              >
                {/* Card Header */}
                <div className="card-header">
                  <div className="icon-wrapper">
                    <IconComponent />
                  </div>
                  <div className="year-badge">
                    {education.year}
                  </div>
                </div>

                {/* Card Content */}
                <div className="card-body">
                  <h3 className="degree-title">{education.degree}</h3>
                  <h4 className="field-title">{education.field}</h4>
                  <p className="institution">{education.institution}</p>
                  
                  {education.gpa && (
                    <div className="gpa-display">
                      <span className="gpa-label">GPA:</span>
                      <span className="gpa-value">{education.gpa}</span>
                    </div>
                  )}
                </div>

                {/* Coursework */}
                <div className="coursework-section">
                  <div className="coursework-header">
                    <h5 className="coursework-title">Key Coursework</h5>
                  </div>
                  <div className="coursework-grid">
                    {education.coursework.map((course, idx) => (
                      <span key={idx} className="course-chip">
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

      <style jsx>{`
        .education-container {
          min-height: 80vh;
          background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #192f37 100%);
          padding: 4rem 2rem;
          position: relative;
          overflow: hidden;
        }

        .education-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 25% 25%, rgba(64, 224, 208, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(72, 209, 204, 0.08) 0%, transparent 50%);
          pointer-events: none;
        }

        .education-content {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* Section Header */
        .section-header {
          text-align: center;
          margin-bottom: 3rem;
          opacity: ${isVisible ? '1' : '0'};
          transform: translateY(${isVisible ? '0' : '30px'});
          transition: all 0.8s ease;
        }

        .section-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          background: linear-gradient(135deg, #40E0D0, #48D1CC, #20B2AA);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
          position: relative;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, transparent, #40E0D0, transparent);
          border-radius: 2px;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.8);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Education Grid */
        .education-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          max-width: 900px;
          margin: 0 auto;
        }

        /* Education Cards */
        .education-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-top: 4px solid var(--accent-color, #40E0D0);
          overflow: hidden;
          position: relative;
          transition: all 0.6s ease;
          opacity: ${isVisible ? '1' : '0'};
          transform: translateY(${isVisible ? '0' : '30px'});
          height: auto;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        }

        .education-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 60px rgba(var(--accent-color-rgb, 64, 224, 208), 0.3);
        }

        /* Card Header */
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 2rem 1rem;
        }

        .icon-wrapper {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, var(--accent-color, #40E0D0), rgba(var(--accent-color-rgb, 64, 224, 208), 0.6));
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(var(--accent-color-rgb, 64, 224, 208), 0.3);
        }

        .icon-wrapper svg {
          font-size: 1.4rem;
          color: white;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
        }

        .year-badge {
          background: rgba(var(--accent-color-rgb, 64, 224, 208), 0.2);
          border: 1px solid var(--accent-color, #40E0D0);
          border-radius: 8px;
          padding: 0.5rem 0.8rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--accent-color, #40E0D0);
        }

        /* Card Body */
        .card-body {
          padding: 0.5rem 2rem 1rem;
        }

        .degree-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.3rem;
          line-height: 1.3;
        }

        .field-title {
          font-size: 1rem;
          font-weight: 600;
          color: var(--accent-color, #40E0D0);
          margin-bottom: 0.5rem;
          line-height: 1.4;
        }

        .institution {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 400;
          margin-bottom: 0.8rem;
        }

        .gpa-display {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .gpa-label {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .gpa-value {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--accent-color, #40E0D0);
          background: rgba(var(--accent-color-rgb, 64, 224, 208), 0.1);
          padding: 0.2rem 0.6rem;
          border-radius: 6px;
        }

        /* Coursework Section */
        .coursework-section {
          padding: 0 2rem 2rem;
        }

        .coursework-header {
          margin-bottom: 1rem;
        }

        .coursework-title {
          font-size: 1rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
        }

        /* Coursework Grid */
        .coursework-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .course-chip {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(var(--accent-color-rgb, 64, 224, 208), 0.3);
          border-radius: 20px;
          padding: 0.4rem 0.8rem;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.9);
          transition: all 0.3s ease;
        }

        .course-chip:hover {
          background: rgba(var(--accent-color-rgb, 64, 224, 208), 0.2);
          border-color: var(--accent-color, #40E0D0);
          transform: translateY(-2px);
        }


        /* Animation Delays */
        .education-card:nth-child(1) {
          transition-delay: 0.1s;
        }

        .education-card:nth-child(2) {
          transition-delay: 0.2s;
        }

        .education-card:nth-child(3) {
          transition-delay: 0.3s;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .education-grid {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .education-container {
            padding: 3rem 1.5rem;
          }

          .education-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .card-header {
            padding: 1.2rem 1.5rem 0.8rem;
          }

          .icon-wrapper {
            width: 45px;
            height: 45px;
          }

          .icon-wrapper svg {
            font-size: 1.2rem;
          }

          .card-body {
            padding: 0.4rem 1.5rem 0.8rem;
          }

          .degree-title {
            font-size: 1.2rem;
          }

          .field-title {
            font-size: 0.95rem;
          }
        }

        @media (max-width: 480px) {
          .education-container {
            padding: 2rem 1rem;
          }

          .education-grid {
            grid-template-columns: 1fr;
            gap: 1.2rem;
          }

          .card-header {
            padding: 1rem 1.2rem 0.6rem;
          }

          .card-body {
            padding: 0.3rem 1.2rem 0.6rem;
          }

          .course-chip {
            font-size: 0.7rem;
            padding: 0.25rem 0.5rem;
          }

          .section-subtitle {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;

