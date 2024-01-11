import React, { useState } from 'react'
import HeroResuse from '../../../components/reuse/HeroResuse'
import pics from "../../../assets/istockphoto-1468520185-2048x2048.jpg"
import { styled } from 'styled-components'
import { LuMinus, LuPlus } from 'react-icons/lu'
import ButtonToTop from '../../../components/reuse/ButtonToTop'

const CommunityHealth = () => {
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
      <HeroResuse title='Community Health Technician; Excel Crest' description='Community Health Technician' photo={pics}/>
      <Container>
        <Main>
        <LeftHolder>
        <Title>Community Health Technician</Title>
          

        </LeftHolder>

        <RightHolder>
          <Card>
            <Items><div style={{fontWeight: "600", marginRight: "10px" }}>Course ID</div> Community Health Technician</Items>
            <Items><div style={{fontWeight: "600" , marginRight: "10px"}}>Semester</div> 6 Semester</Items>
            <Items><div style={{fontWeight: "600", marginRight: "10px" }}>Duration</div> 3 Years</Items>
            <Items> <div style={{fontWeight: "600" , marginRight: "10px"}}>Certification</div>  Diploma in Community Health

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
            Upset ? <Subtitle>The Community Health Extension Worker (CHEW) is a member of the
            health team for Primary Health Care (PHC). The Community Health
            Extension Worker will spend 50% of his time on Community based
            functions and 50% in the Clinic. He/She has the responsibility of
            supervising the Junior Community Health Extension Workers
            (JCHEWs) the Community Health Extension Worker in-training, the
            Volunteer Village Health Workers and Traditional Birth Attendants.
            He/She is to be supervised by the Community Health Officer (CHO).</Subtitle> : null
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
              As a community health technician, job opportunities exist in both public and private sectors, such as:
              <ul style={{ listStyleType: 'disc' }}>
              
              <li>Local government service commission – primary health care unit</li>
            <li>General and teaching hospitals – community health unit</li>
            <li>Organizations involved in community health promotion/education services.</li>
            <li>Private healthcare facility</li>
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

export default CommunityHealth
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