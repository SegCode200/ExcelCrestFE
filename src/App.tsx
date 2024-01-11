import React, {useEffect, useRef} from 'react'
import {RouterProvider, BrowserRouter as Router} from "react-router-dom"
import { mainRoute } from './router/mainRoute'
import ScrollToTop from './components/reuse/ScrolltoTop'
import { motion, useAnimation, useInView,AnimatePresence } from 'framer-motion'

const App = () => {
  const ref = useRef(null)
  const isinView = useInView(ref, {once: true} )
  const mainControls = useAnimation()

  useEffect(()=>{
    if(isinView){
      mainControls.start("visible")
    }
  })

  return (
      <AnimatePresence mode='wait'>
   
       <motion.div 
       ref={ref} style={{position:"relative",  overflow: "hidden"}}

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
      <RouterProvider router={mainRoute}/>

    </motion.div>
    
   

     

      
      

      </AnimatePresence>
  )
}

export default App