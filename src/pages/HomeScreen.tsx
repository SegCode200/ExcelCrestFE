import React, { useEffect, useRef } from 'react'
import Hero from './AllPages/Hero'
import WelcomeComp from './AllPages/WelcomeComp'
import Details from './AllPages/Details'
import Programs from './AllPages/Programs'
import ChoosingSchool from './AllPages/ChoosingSchool'
import { motion, useAnimation, useInView } from 'framer-motion'

const HomeScreen = () => {

  const ref = useRef(null)
  const isinView = useInView(ref )
  const mainControls = useAnimation()

  useEffect(()=>{
    if(isinView){
      mainControls.start("visible")
    }
  })
  return (
    <div ref={ref} style={{position:"relative",  overflow: "hidden"}}>
       <motion.div 
    variants={{
    hidden: {opacity: 0, y: 75},
    visible: {opacity: 1, y: 0},
    }}
    initial= "hidden"
    animate= {mainControls}
    transition={{
    delay: 0.25,
    duration: 0.5
    }
    }>
      <Hero/>
      <Details/>
      <WelcomeComp/>
      <Programs/>
      <ChoosingSchool/>
      </motion.div>
    </div>
  )
}

export default HomeScreen