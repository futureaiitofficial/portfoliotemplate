'use client'

import Image from 'next/image'
import { useEffect } from 'react'

// Declare tsParticles for TypeScript
declare global {
  interface Window {
    particlesJS: any;
  }
}

export default function Hero() {

  useEffect(() => {
    // Load particles.js script (Vincent Garreau's version)
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = () => {
      // Initialize particles after script loads
      console.log('Particles.js script loaded');
      if (window.particlesJS) {
        console.log('Initializing particles...');
        window.particlesJS('particles-canvas', {
          "particles": {
            "number": {
              "value": 80,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": ["#40E0D0", "#48D1CC", "#00CED1"]
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              }
            },
            "opacity": {
              "value": 0.8,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 3,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#40E0D0",
              "opacity": 0.6,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 2,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": false,
                "mode": "repulse"
              },
              "onclick": {
                "enable": false,
                "mode": "push"
              },
              "resize": true
            }
          },
          "retina_detect": true
        });
        console.log('Particles initialized successfully!');
      } else {
        console.error('particlesJS not available on window object');
      }
    };
    
    script.onerror = () => {
      console.error('Failed to load particles.js from CDN');
    };
    
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src*="particles.min.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section className="hero-container">
      {/* Particles.js Container */}
      <div id="particles-canvas" className="particles-canvas"></div>

      {/* Background Pattern */}
      <div className="background-pattern">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="pattern-row">
            <span className="pattern-text">DESIGN</span>
            <span className="pattern-text">DEVELOP</span>
            <span className="pattern-text">DEPLOY</span>
          </div>
        ))}
      </div>
      
      {/* Main Content */}
      <div className="hero-content">
        <div className="profile-container">
          <div className="circle-and-photo">
            <div className="photo-wrap">
                <Image
                  src="/LaharibgMain.png"
                  alt="Lahari Profile"
                  width={400}
                  height={600}
                  className="profile-image"
                  priority
              />
            </div>
          </div>
          
          {/* Simple Quote at Right Bottom */}
          <div className="bottom-quote">
            <p className="quote-text">"Data is the new oil, and I'm here to refine it into insights."</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-container {
          position: relative;
          min-height: 100vh;
          background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #192f37 100%);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          overflow: hidden;
          padding: 2rem 2rem 0;
        }

        .background-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          opacity: 1;
          pointer-events: none;
          z-index: 1;
          padding-top: 200px;
          gap: 60px;
        }

        .pattern-row {
          display: flex;
          justify-content: center;
          column-gap: clamp(8px, 2vw, 20px);
          row-gap: clamp(4px, 1vh, 12px);
          width: 100%;
          max-width: min(800px, 75vw);
          margin: 0 auto;
          white-space: nowrap;
          text-align: center;
        }

        .pattern-text {
          font-family: 'Apple Symbols', 'Arial', sans-serif;
          font-size: 5.5rem !important;
          font-weight: bold;
          color: rgb(242, 238, 238);
          letter-spacing: 0.1em;
        }

        .background-pattern .pattern-row:nth-child(1) { opacity: 0.30; }
        .background-pattern .pattern-row:nth-child(2) { opacity: 0.20; }
        .background-pattern .pattern-row:nth-child(3) { opacity: 0.10; }
        .background-pattern .pattern-row:nth-child(4) { opacity: 0.05; }

        /* Particles.js Canvas */
        .particles-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
          opacity: 0.4;
        }

        /* Custom particle styling */
        #particles-canvas {
          filter: brightness(0.8) contrast(1.1);
        }

        #particles-canvas canvas {
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          z-index: -1 !important;
        }

        .hero-content {
          position: relative;
          z-index: 3;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          max-width: 1200px;
          width: 100%;
          padding-bottom: 0;
        }

        .profile-container {
          display: flex;
          align-items: center;
          gap: 0rem;
          flex-wrap: wrap;
          justify-content: center;
          position: relative;
        }

        /* Simple Bottom Quote */
        .bottom-quote {
          position: absolute;
          bottom: 40px;
          right: 40px;
          max-width: 320px;
          z-index: 4;
        }

        .quote-text {
          margin: 0;
          font-size: 1.1rem;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 400;
          font-style: italic;
          text-align: right;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }


        @keyframes bubbleFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .circle-and-photo {
          position: relative;
          width: clamp(320px, 48vw, 560px);
          height: clamp(320px, 48vw, 560px);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          margin-bottom: 0;
        }


        .photo-wrap {
          position: relative;
          z-index: 2;
          width: 85%;
          height: 90%;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }

        .profile-image {
          width: 100%;
          height: auto;
          object-fit: contain;
          filter: none;
          pointer-events: none;
          user-select: none;
        }

        /* Tablet styles */
        @media (max-width: 1024px) {
          .circle-and-photo {
            width: clamp(280px, 55vw, 480px);
            height: clamp(280px, 55vw, 480px);
          }
          
          .pattern-text {
            font-size: 4rem;
          }
        }

        /* Mobile landscape and small tablets */
        @media (max-width: 768px) {
          .hero-container {
            padding: 1rem 1rem 0;
            min-height: 100vh;
          }

          .hero-content {
            padding-bottom: 0;
          }

          .circle-and-photo {
            width: clamp(260px, 65vw, 400px);
            height: clamp(260px, 65vw, 400px);
            margin-bottom: 0;
          }

          .profile-container {
            flex-direction: column;
            gap: 0rem;
            text-align: center;
          }

          .bottom-quote {
            bottom: 30px;
            right: 30px;
            max-width: 280px;
          }

          .quote-text {
            font-size: 1rem;
            line-height: 1.4;
          }

          .pattern-text {
            font-size: 4rem;
          }

          .background-pattern .pattern-row {
            max-width: min(700px, 80vw);
            column-gap: clamp(6px, 1.5vw, 16px);
          }
        }

        /* Mobile portrait */
        @media (max-width: 480px) {
          .hero-container {
            padding: 0.5rem 0.5rem 0;
          }

          .circle-and-photo { 
            width: clamp(220px, 75vw, 320px); 
            height: clamp(220px, 75vw, 320px);
          }

          .bottom-quote {
            bottom: 20px;
            right: 20px;
            max-width: 240px;
          }

          .quote-text {
            font-size: 0.9rem;
            line-height: 1.3;
          }

          .pattern-text {
            font-size: 4rem;
          }

          .background-pattern .pattern-row {
            max-width: min(600px, 85vw);
            column-gap: clamp(4px, 1vw, 12px);
          }

          .hero-content {
            padding-bottom: 0;
          }
        }

        /* Extra small devices */
        @media (max-width: 360px) {
          .circle-and-photo { 
            width: clamp(180px, 80vw, 260px); 
            height: clamp(180px, 80vw, 260px);
          }

          .pattern-text {
            font-size: 4rem;
          }

          .background-pattern .pattern-row {
            column-gap: clamp(3px, 0.8vw, 8px);
            max-width: min(500px, 90vw);
          }
        }

        /* Large screens */
        @media (min-width: 1440px) {
          .circle-and-photo {
            width: clamp(480px, 40vw, 640px);
            height: clamp(480px, 40vw, 640px);
          }

          .pattern-text {
            font-size: 4rem;
          }
        }
      `}</style>
    </section>
  )
}
