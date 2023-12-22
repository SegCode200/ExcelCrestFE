import React, { FC } from 'react'
import { styled } from 'styled-components'


interface iData {
    title: string,
    description?: string,
    photo: any,
}

const HeroResuse:React.FC<iData> = ({title, description, photo}) => {
  return (
    <div>
            <Container style={{backgroundImage: `url(${photo})`}}>
      <Blur>
        <Main>
        <Text>{title} </Text>
        <Sub>{description}</Sub>
        


        </Main>
        </Blur>
       
      </Container>

    </div>
  )
}

export default HeroResuse
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