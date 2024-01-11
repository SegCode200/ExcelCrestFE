import React from 'react'
import pics from "../../../assets/national-cancer-institute-701-FJcjLAQ-unsplash.jpg"
import { styled } from 'styled-components'
import Hero from "./Hero"
import Programs from '../Programs'
import Transition from '../../../components/reuse/ScrolltoTop'
import ButtonToTop from '../../../components/reuse/ButtonToTop'


const AdmissionReq = () => {

  return (
    <div>
     
        
        <Container style={{backgroundImage: `url(${pics})`}}>
      <Blur>
        <Main>
        <Text>Apply for Excel Crest College of Medical Health & Management Sciences, Lagos  </Text>
        <Sub>ADMISSION REQUIREMENT</Sub>
        


        </Main>
        </Blur>
       
      </Container>
      <Hero/>
      <Programs/>

      <ButtonToTop/>
       
    </div>
  )
}

export default AdmissionReq
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
height: 100vh;;
object-fit: cover;
background-size: cover;
background-repeat: no-repeat;

`