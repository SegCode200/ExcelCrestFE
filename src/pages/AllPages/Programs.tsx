import React from 'react'
import styled from 'styled-components'
import {MdHealthAndSafety} from "react-icons/md"
import {FaUserDoctor, FaBedPulse} from "react-icons/fa6"
import {BsFillHeartPulseFill} from "react-icons/bs"
import {FcBiotech} from "react-icons/fc"

const Data = [
  {title: "HEALTH ASSISTANT MEDICAL", note: "For Diploma in Health Assistant Medical, admitted students stay a minimum of 2 academic years to qualify for the degree", icon: <div><BsFillHeartPulseFill color='dodgerblue' size={30} /> </div>}, 
  {title: "PUBLIC HEALTH TECHNICIAN", note: "For  Diploma in Public Health Technician, admitted students stay a minimum of 3 academic years to qualify for the degree", icon: <div><FaBedPulse color='dodgerblue' size={30} /> </div> }, 
  {title: "COMMUNITY HEALTH TECHNICIAN", note: "For Diploma in Community Health technician, admitted students stay a minimum of 3 academic years to qualify for the degree", icon: <div><MdHealthAndSafety color='dodgerblue' size={30} /> </div> }, 
  {title: "PHARMACY TECHNICIAN", note: "For Diploma in Pharmacy Technician, admitted students stay a minimum of 2 academic years to qualify for the degree", icon: <div><FaUserDoctor color='dodgerblue' size={30} /> </div>}, 
]

const Programs = () => {
  return (
    <div>
        <Container>
            <Main>
              

                <BigText>
                AVAILABLE PROGRAMMES
                </BigText>
                <Icon/>
                <SmallText>
                Applications are invited from suitably qualified candidates for Admission into Excel Crest College of Medical Health and Management 
                </SmallText>
             
                <Holder>
            {
              Data.map((props, )=>(
                <Card >
                  
                   {props.icon}
                <Div>
                    <Title>{props.title}</Title>
                    <Details> {props.note} </Details>
                </Div>
            </Card>
              ))
            }
            </Holder>  
            </Main>
        </Container>
    </div>
  )
}

export default Programs
const Details = styled.div`
/* width: 80%; */
font-size: 15px;
font-weight: 300;
`
const Icon = styled(FcBiotech)`
font-size: 50px;
color: dodgerblue;
transform: rotate(-90deg);


`
const Title = styled.div`
font-size: 17px;
font-weight: 500;
margin-bottom: 10px;
`
const Div = styled.div`
margin-left:30px ;
`
const Card = styled.div`
display: flex;
/* justify-content: space-around; */
margin: 20px 10px;
width: 350px;
align-items: start;

`
const Holder = styled.div`
display: flex;
flex-wrap: wrap;
margin-top: 50px;
width: 100%;
flex-direction: row;
align-items: center;
justify-content: center;

`
const SmallText = styled.div`
font-size: 16px;
font-weight: 400;
width: 60%;
text-align: center;
`
const BigText = styled.div`
font-size: 30px;
font-weight: 800;
`
const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 10px;
margin: auto;
width: 90%;
height: 100%;
/* justify-content: center; */
`
const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
/* flex-direction: column; */
width: 100%;
height: auto;
padding: 50px 0;
background-color: #F5F5F5;
`