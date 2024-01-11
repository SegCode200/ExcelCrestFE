import React, { useState } from 'react'
import { HiOutlineArrowNarrowUp } from "react-icons/hi"
import { styled } from 'styled-components'


const ButtonToTop = () => {

    const ScrollTop = ()=>{
        window.scrollTo(0,0)
    }
    const [Scroll, setScroll] = useState<boolean>(false)

    const onScroll = ()=>{
      if(window.scrollY <= 100){
          setScroll(false)
      }else{
        setScroll(true)
      }
    }
    window.addEventListener("scroll",onScroll)
  return (
    <div>
          {
        Scroll?
         <Top onClick={ScrollTop}>
      <HiOutlineArrowNarrowUp size={30} color="white"/>
    </Top>
      :    null
      
      }

    </div>
  )
}

export default ButtonToTop

const Top = styled.div`
position: fixed;
cursor:pointer;
padding:  15px;
background-color:dodgerblue;
right: 30px;
border-radius:50%;
display:flex;
align-items:center;
justify-content: center;
bottom:30px;


`