import React from 'react'
import styled from 'styled-components'
import {PiStudentFill} from "react-icons/pi"
import {FaUniversity} from "react-icons/fa"
import {IoSchoolSharp} from "react-icons/io5"
import {GiSoapExperiment} from "react-icons/gi"

const Details = () => {

    const Data = [
        {Title: "Education Services ", note: "Top-tier education and professional programs led by prestigious faculty using advanced tools, ensuring top-notch learning experiences for all", icon: <PiStudentFill size={40}  /> },
        {Title: "School Experience ", note: "Standardized facilities and healthcare promote an unmatched learning environment, ensuring an exceptional and unparalleled educational experience for all.", icon: <FaUniversity size={40}  /> },
        {Title: "Graduate Program ", note: "Our graduate programs nurture diverse talents, fostering individuals who catalyze change and innovation across various fields of expertise.", icon: <IoSchoolSharp size={40} /> },
        {Title: "Research & Innovation ", note: "Our cutting-edge research facilities facilitate the integration of theory and practice, fostering groundbreaking discoveries and meaningful influence", icon: <GiSoapExperiment size={40} /> }
    ]
  return (
    <div>
        <Container>
            <Main>
               
                <Holder>
                    {
                        Data.map((props)=>(
                            <Card>
                        <Logo>
                            {props.icon}
                        </Logo>
                        <BigText>{props.Title} </BigText>
                        <SmallText>{props.note}
                        </SmallText>
                        <Button>Click Here to Apply </Button>
                    </Card>
                        ))
                    }
                    </Holder>
            </Main>
        </Container>
    </div>
  )
}

export default Details
const Button = styled.button`
background-color: dodgerblue;
padding: 10px 20px;
font-family: Poppins;
font-size: 14px;
border: none;
margin: 10px 0;

cursor: pointer;
&:hover{
  /* background-color: dodgerblue;
  color: dodgerblue; */
}
`
const SmallText = styled.div`

`
const BigText = styled.div`
font-size: 19px;
margin: 5px 0;
text-transform: uppercase;
font-weight: 800;
`
const Logo = styled.div`


`
const Card = styled.div`
/* border: 1px solid black; */
padding: 15px;
height: 300px;
width:250px;
margin: 8px;
/* border-radius:10px; */
transition: all .3s ease-in-out;
text-align: center;
cursor:pointer;
background-color:white;
/* display: flex; */
&:hover{
    background-color:whitesmoke;
transform: scale(1.05) translateY(-7px);
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

`
const Holder = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;

width: 100%;
height: 100%;

`
const Main = styled.div`
width: 90%;
height: 100%;
display: flex;
align-items: center;
`
const Container = styled.div`
width: 100%;
height: auto;
padding: 70px 0;
display: flex;
align-items: center;
justify-content: center;
background-color: #F5F5F5;

`