import React from 'react'
import { styled } from 'styled-components'
import pics from "../../assets/jeswin-thomas--hgJu2ykh4E-unsplash.jpg"
const ChoosingSchool = () => {
  return (
    <div>
      <Container>
        <Main>
          <LeftHolder>
            <ImageHolder>
              <Image src={pics}/>
            </ImageHolder>
          </LeftHolder>
          <RightHolder>
            <Title>Why Choose Excel Crest </Title>
            <Sub> The College
offer simple and flexible lectures structured for both onsite and online
platforms. <br/>  Academic pursuit with us will
offer you the quality learning experience based on skills and knowledge
sandwiched with quality practical/clinical internships. <br/>We have
positioned seasoned resource person(s) and professionals who will
teach, lead, guide and mentor you as you pursue your career in a decent
and comfortable learning environment </Sub>
          </RightHolder>
        </Main>
      </Container>
    </div>
  )
}

export default ChoosingSchool
const Sub = styled.div``
const Title = styled.div`
font-size: 30px;
font-weight:700;
border-bottom: 10px solid dodgerblue;
margin-bottom:20px;
width:60%;
`

const RightHolder = styled.div`
margin-left: 60px
`
const Image = styled.img`
height:100%;
width:100%;
`
const ImageHolder = styled.div`
width:500px;
height: 300px;
display:flex

`
const LeftHolder = styled.div`
align-items:center;
justify-content:center;
height: 400px;
display:flex
`
const Main = styled.div`
width: 90%;
height:100%;
display:flex;
align-items:center;

`
const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
height: 450px;
width:100%;
background-color: white;
`