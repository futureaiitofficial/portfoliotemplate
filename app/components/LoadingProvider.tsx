'use client'

import { useState, useEffect, createContext, useContext } from 'react'
import Preloader from './Preloader'

interface LoadingContextType {
  isLoading: boolean
  isLoaded: boolean
}

const LoadingContext = createContext<LoadingContextType>({
  isLoading: true,
  isLoaded: false
})

export const useLoading = () => useContext(LoadingContext)

interface LoadingProviderProps {
  children: React.ReactNode
}

export default function LoadingProvider({ children }: LoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)
  const [showContent, setShowContent] = useState(false)

  const handleLoadingComplete = () => {
    setIsLoading(false)
    // Small delay to ensure smooth transition
    setTimeout(() => {
      setShowContent(true)
      setTimeout(() => {
        setIsLoaded(true)
      }, 100)
    }, 200)
  }

  // Prevent scrolling while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isLoading])

  return (
    <LoadingContext.Provider value={{ isLoading, isLoaded }}>
      {isLoading && <Preloader onLoadingComplete={handleLoadingComplete} />}
      
      <div 
        className="main-content"
        style={{
          opacity: showContent ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out',
          visibility: showContent ? 'visible' : 'hidden'
        }}
      >
        {children}
      </div>
    </LoadingContext.Provider>
  )
}
