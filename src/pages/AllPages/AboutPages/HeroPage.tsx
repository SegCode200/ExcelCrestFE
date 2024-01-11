import React, {useState} from 'react'
import { styled } from 'styled-components'
import {GiSoapExperiment} from "react-icons/gi"
import {PiStudentFill} from "react-icons/pi"
import {Link} from "react-router-dom"
import ButtonToTop from '../../../components/reuse/ButtonToTop'


const HeroPage = () => {

  return (
    <div>
      <Container>
        <Main>
            <Display style={{justifyContent: "space-between",}}>
            <LeftHolder>
                <Title>Vision </Title>
                <Note> To become one of the best private medical health tertiary institution in
Nigeria and African continent raising champions as a formidable human
capital workforce for the quality health care service delivery with a
clear cut strategic plans</Note>

            </LeftHolder>

            <RightHolder>
                <Title>Mission </Title>
                <Note> To equip Nigerians and Africans with best training medical health
sciences sandwiched with quality basic skills and knowledge in
practical/clinical posting for global competitiveness shaping the middle
cadre in the health sub-sector</Note>
            </RightHolder>
            </Display>

            <Display style={{ marginTop: "50px",justifyContent: "space-between" }}>
              <LeftHolder >
                <Icon/>
                <About style={{fontSize:"19px", fontWeight: "300"}}
              >ABOUT US</About>
                <About>Excel Crest College of Medical Health & Management Sciences</About>

              </LeftHolder>

              <RightHolder >
              <Note> Excel Crest College of Medical Health & Management Sciences in Lagos is dedicated to cultivating globally competitive medical health professionals. Our ambition is to emerge as one of Nigeria's foremost private medical health tertiary institutions, extending our influence throughout the African continent. The college provides accessible and adaptable lectures tailored for both on-site and online platforms. Esteemed students, your academic journey with us promises a high-quality learning experience, integrating skills and knowledge with hands-on practical/clinical internships. Our faculty comprises seasoned professionals committed to teaching, guiding, and mentoring you in a conducive and comfortable learning environment as you embark on your career path</Note>
              </RightHolder>
            </Display>
            <Display style={{ marginTop: "50px",justifyContent: "space-between" }}>
              <LeftHolder >
                <Icon1/>
                <About style={{fontSize:"19px", fontWeight: "300"}}
              >GET TO KNOW MORE</About>
                <About>Our Philosophy and Objective</About>

              </LeftHolder>

              <RightHolder>
              <Note> The philosophy of the various disciplines is derived from the national
philosophy of education as contained in section I paragraph 1 of the
National Policy on Education. The national philosophy aims precisely
at having:<br/>
</Note>
<NavHolder>
<br/>
  <Nav>(a) A free and democratic society</Nav><br/>
  <Nav>(b) A just and egalitarian society</Nav><br/>
  <Nav>(c) A united, strong and self-reliant nation</Nav><br/>
  <Nav>(d) A great and dynamic economy</Nav><br/>
  <Nav>(e) A land full of bright opportunities for all citizens.</Nav><br/>
  
</NavHolder>
              <Note> Based on the above national philosophy, the College is out with the
following objectives:
</Note>
<NavHolder>
<br/>
            
  <Nav>(a) To promote the acquisition of knowledge, and skill for national
development by Nigerians and non-Nigerians who are in dire
need of it and to further their studies to obtain Certificate,
Diploma and Higher Diploma in their chosen fields of study.</Nav><br/>
  <Nav>(b)To foster good fellowship and better understanding among the
people of various ethnic groups in Nigeria no matter the sex,
age, background and interest</Nav><br/>
  <Nav>(c) To conduct and promote research and scholarship on Medical
heath education related issues in Nigeria.</Nav><br/>

</NavHolder>
              </RightHolder>
            </Display>
            <Display style={{flexDirection: "column", marginTop: "50px"}}>
              <Title>Core Values</Title>
              <Note>Courage, Competence, Values, Service, Humanity</Note>
            </Display>

            
        </Main>
       
      </Container>
      <ButtonToTop/>
    
    </div>
  )
}

export default HeroPage

const Nav = styled.div``
const NavHolder = styled.div``
const Icon1 = styled(PiStudentFill)`
font-size: 100px;
position: absolute;
top: -60px;
color: #686767;
right: 50px;

`
const Icon = styled(GiSoapExperiment)`
font-size: 100px;
position: absolute;
top: -60px;
color: #686767;
right: 50px;

`
const About = styled.div`
font-size: 30px;
margin-top: 10px;
z-index: 6;
`
const Note = styled.div`
font-size: 16px;
font-weight: 400;
display: flex;



`
const RightHolder = styled.div`
width: 50%;
display: flex;
flex-direction: column;
`
const Title = styled.div`
font-size: 30px;
font-weight: 500;
margin-bottom: 20px;
border-bottom: 3px solid dodgerblue;
`
const LeftHolder = styled.div`
width: 45%;
position: relative;
z-index: 3;
`
const Display = styled.div`
width:100%;
height:100%;
display:flex;
align-items:center;
`
const Main = styled.div`
width:90%;
height:100%;
display:flex;
align-items:center;
flex-direction: column;
`
const Container = styled.div`
display:flex;
align-items: center;
justify-content: center;
width:100%;
height: auto;
padding: 50px 0;
background-color: #F5F5F5 ;
`