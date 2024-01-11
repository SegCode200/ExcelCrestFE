import React, { useState } from 'react'
import HeroResuse from '../../../components/reuse/HeroResuse'
import pics from "../../../assets/wsi-imageoptim-lab-work-vials-testing-medical-1024x682.jpg"
import styled from 'styled-components'
import { LuPlus,LuMinus  } from "react-icons/lu"
import ButtonToTop from '../../../components/reuse/ButtonToTop'

const MedicalCard = () => {

  const [Upset, setUpset] = useState<boolean>(false)

  const onUpset = ()=>{
    setUpset(!Upset);
  }
  const [Upset1, setUpset1] = useState<boolean>(false)

  const onUpset1 = ()=>{
    setUpset1(!Upset1)
  }
  const [Upset2, setUpset2] = useState<boolean>(false)

  const onUpset2 = ()=>{
    setUpset2(!Upset2)
  }
  return (
    <div>
      <HeroResuse title='Medical Health Assistant; Excel Crest' description='Medical Health Assistant' photo={pics}/>

      <Container>
        <Main>
        <LeftHolder>
        <Title>About Medical Health Assistant</Title>
          

        </LeftHolder>

        <RightHolder>
          <Card>
            <Items><div style={{fontWeight: "600", marginRight: "10px" }}>Course ID</div> Medical Health Assistant</Items>
            <Items><div style={{fontWeight: "600" , marginRight: "10px"}}>Semester</div> 4 Semester</Items>
            <Items><div style={{fontWeight: "600", marginRight: "10px" }}>Duration</div> 2 Years</Items>
            <Items> <div style={{fontWeight: "600" , marginRight: "10px"}}>Certification</div> Diploma in Health Assistant Medical
</Items>

          </Card>
          <Holder onClick={()=>{
            onUpset()
            
          }}>
          <Sub>About</Sub>
          {
            Upset? <Icon />: <Icon1 />
          }
          
          </Holder>
          {
            Upset ? <Subtitle>Health assistant medical are trained health professionals who assist in
            the prevention and control of health related problems. These problems
            may led to impairment in a state of complete health or wellbeing of an
            individual in the community. The health care assistant assists physicians and nurses with patient care
            and administrative duties. They maintain exam room equipment, space,
            and sanitize for patients. The health care assistant also perform
            administrative duties such as scheduling patient appointments,
            cancellations, and updating records as well as take patient information,
            record documentation, and monitor patient vital signs.</Subtitle> : null
          }
          <Holder  onClick={()=>{
            onUpset1()
          }}>
          <Sub>Entry Requirement</Sub>
          {
            Upset1? <Icon />: <Icon1 />
          }
          
          </Holder>
          {
            Upset1 ? <Subtitle>The admission requirement for Diploma and certificate programmes in
            all disciplines is the same as in the regular programmes. It include five
            credit level passes in SSCE, GCE or their equivalent at not more than
            two sittings in the relevant subjects combination, which must include, at
            all cases, credit passes in English Language and Mathematics</Subtitle> : null
          }
          <Holder onClick={()=>{
            onUpset2()
          }}>
          <Sub>Career Opportunities</Sub>
          {
            Upset2? <Icon />: <Icon1 />
          }
          
          </Holder>
          {
            Upset2 ? <Subtitle>
              <ul style={{ listStyleType: 'circle' }}>
              <li>Assistant practitioner</li>
            <li>Nursing associate</li>
            <li>Occupational therapy support worker</li>
            <li>Healthcare science assistants and associates</li>
              </ul>

            </Subtitle> : null
          }
          <Button>Apply</Button>
          
        
    

        </RightHolder>
        </Main>
      </Container>
      <ButtonToTop/>


    </div>
  )
}

export default MedicalCard
const Button = styled.button`
background-color: dodgerblue;
padding: 10px 20px;
font-family: Poppins;
font-size: 14px;
border: none;
margin: 10px 0;
color: white;
cursor: pointer;
&:hover{
  background-color: white;
  color: dodgerblue;
}
`
const Icon1 = styled(LuMinus)`
font-size: 25px;
`
const Icon = styled(LuPlus)`
font-size: 25px;
`
const Sub = styled.div`
`
const Holder = styled.div`
width: 100%;
height: 50px;
background-color: white;
color: dodgerblue;
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px 20px;
margin: 20px 0;
cursor: pointer;

`
const Items = styled.div`
display: flex;
margin: 20px 0;
font-size: 17px;
`
const Card = styled.div`
width: 100%;
height: auto;
padding: 10px 20px;
background-color: dodgerblue;
color: white;
`
const RightHolder = styled.div`
/* width: 65%; */
height: 100%;
flex: 1;
margin-top: 60px;
`
const Subtitle = styled.div`
font-size: 17px;
margin: 20px 0;
padding: 0 20px;

`
const Title = styled.div`
font-size: 30px;
border-bottom: 2px solid dodgerblue;
padding: 5px 0;
font-weight: 700;

`
const LeftHolder = styled.div`
width: 43%;
height: 100%;

`
const Main = styled.div`
width: 90%;
height: 100%;
display: flex;
justify-content: space-between;
`
const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: auto;
background-color: #F5F5F5;
padding: 30px 0;
`