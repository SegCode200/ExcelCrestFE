import React, { useEffect, useRef } from 'react'
import Hero from './AllPages/Hero'
import WelcomeComp from './AllPages/WelcomeComp'
import Details from './AllPages/Details'
import Programs from './AllPages/Programs'
import ChoosingSchool from './AllPages/ChoosingSchool'
import ButtonToTop from '../components/reuse/ButtonToTop'

const HomeScreen = () => {

 
  
  return (
    
    <div>
      <Hero/>
      <Details/>
      <WelcomeComp/>
      <Programs/>
      <ChoosingSchool/>
      <ButtonToTop/>
     
    </div>
  )
}

export default HomeScreen