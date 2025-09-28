'use client'

import Image from 'next/image'
import { useEffect, useState, useLayoutEffect } from 'react'
import styles from './Hero.module.css'

// Declare tsParticles for TypeScript
declare global {
  interface Window {
    particlesJS: any;
  }
}

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [stylesReady, setStylesReady] = useState(false)

  // Use layoutEffect to prevent FOUC
  useLayoutEffect(() => {
    // Immediately set styles ready to prevent flash
    setStylesReady(true)
    setIsLoaded(true)
  }, [])

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
    <section className={`${styles.heroContainer} ${stylesReady ? styles.loaded : styles.loading}`}>
      {/* Particles.js Container */}
      <div id="particles-canvas" className={styles.particlesCanvas}></div>

      {/* Background Pattern */}
      <div className={styles.backgroundPattern}>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className={styles.patternRow}>
            <span className={styles.patternText}>DESIGN</span>
            <span className={styles.patternText}>DEVELOP</span>
            <span className={styles.patternText}>DEPLOY</span>
          </div>
        ))}
      </div>
      
      {/* Main Content */}
      <div className={styles.heroContent}>
        <div className={styles.profileContainer}>
          <div className={styles.circleAndPhoto}>
            <div className={styles.photoWrap}>
                <Image
                  src="/LaharibgMain.png"
                  alt="Lahari Profile"
                  width={400}
                  height={600}
                  className={styles.profileImage}
                  priority
              />
            </div>
          </div>
          
          {/* Simple Quote at Right Bottom */}
          <div className={styles.bottomQuote}>
            <p className={styles.quoteText}>"Data is the new oil, and I'm here to refine it into insights."</p>
          </div>
        </div>
      </div>
    </section>
  )
}
