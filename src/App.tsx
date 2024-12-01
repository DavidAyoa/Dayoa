import './App.css'
import { useEffect, useRef } from 'react'
import { LenisRef, ReactLenis } from 'lenis/react'
import { cancelFrame, frame } from "motion/react"
// import Preloader from './components/Preloader'
// import MotionText from './components/MotionText'
import Navigation from './components/Navigation'
import Intro from './components/Intro'
import Footer from './components/Footer'

interface FrameData {
  delta: number
  timestamp: number
  isProcessing: boolean
}

function App() {
  const lenisRef = useRef<LenisRef | null>(null);

  useEffect(() => {
    function update(data: FrameData) {
      const time = data.timestamp
      lenisRef.current?.lenis?.raf(time)
    }

    frame.update(update, true)

    return () => cancelFrame(update)
  }, [])

  return (
    <div id='dayoa' className='bg-primary-light font-satoshi h-dvh flex justify-center items-center'>
      <ReactLenis options={{ autoRaf: false }} ref={lenisRef}>
        {/* <Preloader /> */}
        {/* <MotionText
          className='text-sub-heading-large flex justify-center items-center flex-wrap gap-2 w-[550px] leading-9 text-primary-light mix-blend-difference'
        >
          Early Adopter Token Rewards: Tiered reward system based on order priority for the first 69,000 eligible controller purchase
        </MotionText> */}
        <Navigation />
        <Intro />
        <Footer />
      </ReactLenis>
    </div>
  )
}

export default App
