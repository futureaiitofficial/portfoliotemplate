'use client'

import { useState, useEffect } from 'react'

interface PreloaderProps {
  onLoadingComplete?: () => void
}

export default function Preloader({ onLoadingComplete }: PreloaderProps) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  const terminalLines = [
    { text: 'ssh lahari@portfolio.dev', delay: 100, type: 'command' },
    { text: 'Connecting to portfolio.dev...', delay: 200, type: 'output' },
    { text: 'Connection established.', delay: 150, type: 'success' },
    { text: '', delay: 100, type: 'empty' },
    { text: 'cd /portfolio && npm run build', delay: 150, type: 'command' },
    { text: 'Building production bundle...', delay: 200, type: 'output' },
    { text: '✓ Compiled successfully', delay: 300, type: 'success' },
    { text: '✓ Optimizing components', delay: 200, type: 'success' },
    { text: '✓ Neural networks initialized', delay: 200, type: 'success' },
    { text: '', delay: 100, type: 'empty' },
    { text: 'npm start', delay: 150, type: 'command' },
    { text: 'Starting portfolio server...', delay: 200, type: 'output' },
    { text: 'Server ready at http://localhost:3000', delay: 300, type: 'success' },
    { text: 'Welcome to Lahari\'s Portfolio! 🚀', delay: 400, type: 'highlight' }
  ]

  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = []

    const typeText = (text: string, callback: () => void) => {
      let charIndex = 0
      setCurrentText('')
      
      const typeChar = () => {
        if (charIndex < text.length) {
          setCurrentText(text.substring(0, charIndex + 1))
          charIndex++
          timeouts.push(setTimeout(typeChar, 30 + Math.random() * 40))
        } else {
          callback()
        }
      }
      
      typeChar()
    }

    const processLines = () => {
      if (currentLineIndex < terminalLines.length) {
        const currentLine = terminalLines[currentLineIndex]
        
        if (currentLine.type === 'empty') {
          setCurrentText('')
          timeouts.push(setTimeout(() => {
            setCurrentLineIndex(prev => prev + 1)
          }, currentLine.delay))
        } else {
          typeText(currentLine.text, () => {
            timeouts.push(setTimeout(() => {
              setCurrentLineIndex(prev => prev + 1)
            }, currentLine.delay))
          })
        }
      } else {
        // All lines completed
        timeouts.push(setTimeout(() => {
          setIsComplete(true)
          timeouts.push(setTimeout(() => {
            onLoadingComplete?.()
          }, 800))
        }, 500))
      }
    }

    processLines()

    return () => {
      timeouts.forEach(clearTimeout)
    }
  }, [currentLineIndex, onLoadingComplete])

  // Cursor blinking effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)

    return () => clearInterval(cursorTimer)
  }, [])

  if (isComplete) {
    return (
      <div className="preloader complete">
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-controls">
              <div className="control close"></div>
              <div className="control minimize"></div>
              <div className="control maximize"></div>
            </div>
            <div className="terminal-title">lahari@portfolio:~</div>
          </div>
          <div className="terminal-body">
            <div className="terminal-line success">
              <span className="prompt">$</span>
              <span className="command">Portfolio loaded successfully! ✓</span>
            </div>
            <div className="terminal-line">
              <span className="prompt">$</span>
              <span className="command">Redirecting to main site...</span>
            </div>
            <div className="loading-dots">
              <span>.</span><span>.</span><span>.</span>
            </div>
          </div>
        </div>

        <style jsx>{`
          .preloader.complete {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #000000;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            animation: fadeOut 0.8s ease-in-out 0.5s forwards;
          }

          .preloader.complete .terminal-window {
            background: #1a1a1a;
            border-radius: 8px;
            box-shadow: 0 8px 32px rgba(0, 255, 0, 0.2);
            overflow: hidden;
            width: 600px;
            max-width: 90vw;
            border: 1px solid #333;
          }

          .preloader.complete .terminal-header {
            background: #2d2d2d;
            padding: 0.75rem 1rem;
            display: flex;
            align-items: center;
            gap: 1rem;
            border-bottom: 1px solid #333;
          }

          .preloader.complete .terminal-controls {
            display: flex;
            gap: 0.5rem;
          }

          .preloader.complete .control {
            width: 12px;
            height: 12px;
            border-radius: 50%;
          }

          .preloader.complete .control.close { background: #ff5f57; }
          .preloader.complete .control.minimize { background: #ffbd2e; }
          .preloader.complete .control.maximize { background: #28ca42; }

          .preloader.complete .terminal-title {
            color: #cccccc;
            font-size: 0.9rem;
            font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Courier New', monospace;
          }

          .preloader.complete .terminal-body {
            background: #000000;
            padding: 1.5rem;
            min-height: 150px;
            font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Courier New', monospace;
            font-size: 0.95rem;
          }

          .preloader.complete .terminal-line {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 0.5rem;
          }

          .preloader.complete .terminal-line.success .command {
            color: #00ff41;
            font-weight: bold;
          }

          .preloader.complete .prompt {
            color: #00ff00;
            font-weight: bold;
          }

          .preloader.complete .command {
            color: #ffffff;
          }

          .preloader.complete .loading-dots {
            display: flex;
            gap: 0.2rem;
            margin-left: 1.5rem;
            margin-top: 0.5rem;
          }

          .preloader.complete .loading-dots span {
            color: #00ff00;
            animation: dotPulse 1.4s ease-in-out infinite;
            font-size: 1.2rem;
          }

          .preloader.complete .loading-dots span:nth-child(2) {
            animation-delay: 0.2s;
          }

          .preloader.complete .loading-dots span:nth-child(3) {
            animation-delay: 0.4s;
          }

          @keyframes fadeOut {
            0% { opacity: 1; }
            100% { opacity: 0; visibility: hidden; }
          }

          @keyframes dotPulse {
            0%, 80%, 100% {
              opacity: 0.3;
            }
            40% {
              opacity: 1;
            }
          }
        `}</style>
      </div>
    )
  }

  return (
    <div className="preloader">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-controls">
            <div className="control close"></div>
            <div className="control minimize"></div>
            <div className="control maximize"></div>
          </div>
          <div className="terminal-title">lahari@portfolio:~</div>
        </div>
        <div className="terminal-body">
          <div className="terminal-output">
            {terminalLines.slice(0, currentLineIndex).map((line, index) => (
              <div key={index} className={`terminal-line ${line.type}`}>
                {line.type === 'command' && <span className="prompt">$ </span>}
                <span className="text">{line.text}</span>
              </div>
            ))}
            {currentLineIndex < terminalLines.length && (
              <div className={`terminal-line ${terminalLines[currentLineIndex]?.type} current`}>
                {terminalLines[currentLineIndex]?.type === 'command' && <span className="prompt">$ </span>}
                <span className="text">{currentText}</span>
                <span className={`cursor ${showCursor ? 'visible' : ''}`}>█</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .preloader {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #000000;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          overflow: hidden;
        }

        .terminal-window {
          background: #1a1a1a;
          border-radius: 8px;
          box-shadow: 0 8px 32px rgba(0, 255, 0, 0.1);
          overflow: hidden;
          width: 700px;
          max-width: 90vw;
          border: 1px solid #333;
        }

        .terminal-header {
          background: #2d2d2d;
          padding: 0.75rem 1rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          border-bottom: 1px solid #333;
        }

        .terminal-controls {
          display: flex;
          gap: 0.5rem;
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

        .terminal-title {
          color: #cccccc;
          font-size: 0.9rem;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Courier New', monospace;
          font-weight: 500;
        }

        .terminal-body {
          background: #000000;
          padding: 1.5rem;
          min-height: 300px;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Courier New', monospace;
          font-size: 0.95rem;
          line-height: 1.4;
        }

        .terminal-output {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .terminal-line {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          min-height: 1.4rem;
        }

        .terminal-line.empty {
          min-height: 0.7rem;
        }

        .prompt {
          color: #00ff00;
          font-weight: bold;
          flex-shrink: 0;
        }

        .text {
          color: #00ff00;
          word-break: break-word;
        }

        .terminal-line.command .text {
          color: #ffffff;
        }

        .terminal-line.output .text {
          color: #00ff00;
        }

        .terminal-line.success .text {
          color: #00ff41;
          font-weight: 500;
        }

        .terminal-line.highlight .text {
          color: #00ffff;
          font-weight: bold;
          animation: glow 1s ease-in-out infinite alternate;
        }

        .cursor {
          color: #00ff00;
          animation: blink 1s step-end infinite;
          font-weight: bold;
        }

        .cursor.visible {
          opacity: 1;
        }

        @keyframes blink {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0;
          }
        }

        @keyframes glow {
          0% {
            text-shadow: 0 0 5px #00ffff;
          }
          100% {
            text-shadow: 0 0 10px #00ffff, 0 0 15px #00ffff;
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .terminal-window {
            width: 95vw;
            margin: 0 1rem;
          }

          .terminal-body {
            padding: 1rem;
            font-size: 0.85rem;
          }

          .terminal-header {
            padding: 0.5rem 1rem;
          }

          .terminal-title {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .terminal-body {
            padding: 0.75rem;
            font-size: 0.8rem;
            min-height: 250px;
          }

          .control {
            width: 10px;
            height: 10px;
          }
        }
      `}</style>
    </div>
  )
}