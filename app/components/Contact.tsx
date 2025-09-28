'use client'

import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaDownload, FaPaperPlane, FaUser, FaBuilding, FaClock } from 'react-icons/fa'
import styles from './Contact.module.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission (replace with actual API call)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'laharisandepudi9@gmail.com',
      href: 'mailto:laharisandepudi9@gmail.com',
      color: '#ea4335'
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Los Angeles, CA',
      href: 'https://maps.google.com/?q=Los Angeles,CA',
      color: '#4285f4'
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/lahari-sandepudi',
      href: 'https://linkedin.com/in/lahari-sandepudi',
      color: '#0077b5'
    }
  ]

  const quickActions = [
    {
      icon: <FaGithub />,
      label: 'View Projects',
      description: 'Check out my GitHub',
      href: 'https://github.com/lahari-sandepudi',
      color: '#333'
    },
    {
      icon: <FaLinkedin />,
      label: 'Connect on LinkedIn',
      description: 'Let\'s connect professionally',
      href: 'https://linkedin.com/in/lahari-sandepudi',
      color: '#0077b5'
    }
  ]

  return (
    <section className={styles.contactSection}>
      <div className={styles.contactContainer}>
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">
            Ready to bring data-driven solutions to your team? I'm always interested in discussing new opportunities, 
            innovative projects, and ways to create meaningful impact through technology.
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Information & Quick Actions */}
          <div className="contact-info-section">
            <div className="contact-info">
              <h3 className="info-title">Get In Touch</h3>
              <div className="contact-methods">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : '_self'}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="contact-method"
                    style={{ '--accent-color': item.color } as React.CSSProperties}
                  >
                    <div className="method-icon">
                      {item.icon}
                    </div>
                    <div className="method-details">
                      <span className="method-label">{item.label}</span>
                      <span className="method-value">{item.value}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="quick-actions">
              <h3 className="info-title">Quick Actions</h3>
              <div className="action-buttons">
                {quickActions.map((action, index) => (
                  <a
                    key={index}
                    href={action.href}
                    target={action.href.startsWith('http') ? '_blank' : '_self'}
                    rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="action-button"
                    style={{ '--accent-color': action.color } as React.CSSProperties}
                  >
                    <div className="action-icon">
                      {action.icon}
                    </div>
                    <div className="action-content">
                      <span className="action-label">{action.label}</span>
                      <span className="action-description">{action.description}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="availability-status">
              <div className="status-indicator">
                <div className="status-dot"></div>
                <span className="status-text">Available for new opportunities</span>
              </div>
              <div className="response-time">
                <FaClock />
                <span>Usually responds within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3 className="form-title">Send a Message</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">
                    <FaUser />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">
                    <FaEnvelope />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company">
                    <FaBuilding />
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="job-opportunity">Job Opportunity</option>
                    <option value="freelance-project">Freelance Project</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="consultation">Consultation</option>
                    <option value="speaking-engagement">Speaking Engagement</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project, opportunity, or how I can help..."
                />
              </div>

              <button
                type="submit"
                className={`submit-button ${isSubmitting ? 'submitting' : ''} ${submitStatus}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="form-message success">
                  Thank you! Your message has been sent successfully. I'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="form-message error">
                  Sorry, there was an error sending your message. Please try again or contact me directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #192f37 100%);
          padding: 6rem 0;
          position: relative;
          overflow: hidden;
        }

        .contact-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(64, 224, 208, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(72, 209, 204, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(64, 224, 208, 0.05) 0%, transparent 50%);
          pointer-events: none;
        }

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 1;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 700;
          background: linear-gradient(135deg, #40e0d0, #48d1cc, #00ced1);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: #d4d4d4;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 4rem;
          align-items: start;
        }

        /* Contact Information Section */
        .contact-info-section {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .info-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 1.5rem;
          position: relative;
        }

        .info-title::after {
          content: '';
          position: absolute;
          bottom: -0.5rem;
          left: 0;
          width: 50px;
          height: 3px;
          background: linear-gradient(90deg, #40e0d0, #48d1cc);
          border-radius: 2px;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-method {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: rgba(64, 224, 208, 0.05);
          border: 1px solid rgba(64, 224, 208, 0.1);
          border-radius: 12px;
          text-decoration: none;
          color: #d4d4d4;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .contact-method:hover {
          background: rgba(64, 224, 208, 0.1);
          border-color: var(--accent-color, rgba(64, 224, 208, 0.5));
          transform: translateY(-2px);
          color: #ffffff;
        }

        .method-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: var(--accent-color, rgba(64, 224, 208, 0.2));
          border-radius: 10px;
          color: white;
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .method-details {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .method-label {
          font-size: 0.9rem;
          color: rgba(212, 212, 212, 0.7);
          font-weight: 500;
        }

        .method-value {
          font-size: 1rem;
          color: #ffffff;
          font-weight: 600;
        }

        /* Quick Actions */
        .action-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .action-button {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem;
          background: rgba(64, 224, 208, 0.05);
          border: 1px solid rgba(64, 224, 208, 0.1);
          border-radius: 12px;
          text-decoration: none;
          color: #d4d4d4;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .action-button:hover {
          background: var(--accent-color, rgba(64, 224, 208, 0.1));
          border-color: var(--accent-color, rgba(64, 224, 208, 0.5));
          transform: translateY(-2px);
          color: #ffffff;
        }

        .action-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: var(--accent-color, rgba(64, 224, 208, 0.2));
          border-radius: 10px;
          color: white;
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .action-content {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .action-label {
          font-size: 1rem;
          color: #ffffff;
          font-weight: 600;
        }

        .action-description {
          font-size: 0.9rem;
          color: rgba(212, 212, 212, 0.7);
        }

        /* Availability Status */
        .availability-status {
          padding: 1.5rem;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          border-radius: 12px;
          backdrop-filter: blur(10px);
        }

        .status-indicator {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .status-dot {
          width: 12px;
          height: 12px;
          background: #22c55e;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        .status-text {
          font-weight: 600;
          color: #ffffff;
        }

        .response-time {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #d4d4d4;
          font-size: 0.9rem;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.1);
          }
        }

        /* Contact Form */
        .contact-form-section {
          background: rgba(64, 224, 208, 0.05);
          border: 1px solid rgba(64, 224, 208, 0.1);
          border-radius: 20px;
          padding: 2.5rem;
          backdrop-filter: blur(10px);
        }

        .form-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 2rem;
          position: relative;
        }

        .form-title::after {
          content: '';
          position: absolute;
          bottom: -0.5rem;
          left: 0;
          width: 50px;
          height: 3px;
          background: linear-gradient(90deg, #40e0d0, #48d1cc);
          border-radius: 2px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #d4d4d4;
          font-weight: 500;
          font-size: 0.9rem;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 1rem;
          background: rgba(64, 224, 208, 0.05);
          border: 1px solid rgba(64, 224, 208, 0.2);
          border-radius: 8px;
          color: #ffffff;
          font-size: 1rem;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: rgba(64, 224, 208, 0.5);
          background: rgba(64, 224, 208, 0.08);
          box-shadow: 0 0 0 3px rgba(64, 224, 208, 0.1);
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: rgba(212, 212, 212, 0.5);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          width: 100%;
          padding: 1.25rem;
          background: linear-gradient(135deg, #40e0d0, #48d1cc);
          border: none;
          border-radius: 8px;
          color: #0f2027;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 1rem;
        }

        .submit-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(64, 224, 208, 0.3);
          background: linear-gradient(135deg, #48d1cc, #40e0d0);
        }

        .submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .submit-button.submitting {
          background: linear-gradient(135deg, #40e0d0, #40e0d0);
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(15, 32, 39, 0.3);
          border-top: 2px solid #0f2027;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .form-message {
          margin-top: 1rem;
          padding: 1rem;
          border-radius: 8px;
          font-weight: 500;
          animation: slideIn 0.3s ease;
        }

        .form-message.success {
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          color: #22c55e;
        }

        .form-message.error {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #ef4444;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .section-title {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .contact-section {
            padding: 4rem 0;
          }

          .contact-container {
            padding: 0 1rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .section-subtitle {
            font-size: 1rem;
          }

          .contact-form-section {
            padding: 2rem;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .action-buttons {
            gap: 0.75rem;
          }

          .action-button,
          .contact-method {
            padding: 1rem;
          }

          .method-icon,
          .action-icon {
            width: 45px;
            height: 45px;
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 1.75rem;
          }

          .contact-form-section {
            padding: 1.5rem;
          }

          .contact-info-section {
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  )
}
