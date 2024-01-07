import React from 'react'
import { styled } from 'styled-components'
import pics from "../../../assets/young-handsome-physician-medical-robe-with-stethoscope.jpg"
import HeroPage from './HeroPage'
import Transition from '../../../components/reuse/ScrolltoTop'


const AboutPage = () => {
  return (
    <div>
   
      <Container style={{backgroundImage: `url(${pics})`}}>
      <Blur>
        <Main>
        <Text>Discover Excel Crest College of Medical Health & Management Sciences, Lagos  </Text>
        <Sub>ABOUT US</Sub>
        


        </Main>
        </Blur>
       
      </Container>
      <HeroPage/>
      
     
    </div>
  )
}

export default  AboutPage 
const Sub = styled.div`
font-size: 50px;
font-weight: 900;
color:white;
margin:20px 0;
color: dodgerblue;
`

const Text = styled.div`
font-weight: 600;
color:white;
font-size: 27px;
`
const Blur = styled.div`
width: 100%;
height: 100%;
background-color: rgba(0,0,0, 0.7);
display: flex;
align-items: center;
justify-content: center;
`
const Main = styled.div`
width: 90%;
height: 100%;
display: flex;
justify-content: flex-end;
/* align-items: center; */
z-index: 3;
flex-direction: column;
`
const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100vh;
object-fit: cover;
background-size: cover;
background-repeat: no-repeat;

`