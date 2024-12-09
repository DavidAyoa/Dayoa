import './App.css'
import { useEffect, useRef, useState } from 'react'
import { LenisRef, ReactLenis } from 'lenis/react'
import { cancelFrame, frame } from "motion/react"
import Preloader from './components/Preloader'
import Navigation from './components/Navigation'
import Intro from './components/Intro'
import FrontendHero from './components/FrontendHero'
import Footer from './components/Footer'

interface FrameData {
  delta: number
  timestamp: number
  isProcessing: boolean
}

function App() {
  const lenisRef = useRef<LenisRef | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    function update(data: FrameData) {
      if (lenisRef.current?.lenis) {
        lenisRef.current.lenis.raf(data.timestamp)
      }
    }

    frame.update(update, true)
    return () => {
      cancelFrame(update)
    }
  }, [])

  return (
    <>
      <Preloader onLoadingComplete={() => setIsLoading(false)} />
      <ReactLenis 
        options={{ 
          autoRaf: false,
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 2,
        }} 
        ref={lenisRef} 
        className={`font-satoshi flex justify-center items-center h-[300vh] transition-opacity duration-500 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } ${isLoading ? 'mt-[100vh]' : 'mt-0'}`} 
        root
      >
        <div className='bg-primary-light'>
          {!isLoading && <Navigation />}
          <Intro />
          <FrontendHero />
          {!isLoading && <Footer />}
        </div>
      </ReactLenis>
    </>
  )
}

export default App
