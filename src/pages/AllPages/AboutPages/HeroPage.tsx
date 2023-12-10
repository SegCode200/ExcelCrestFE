import React from 'react'
import { styled } from 'styled-components'

const HeroPage = () => {
  return (
    <div>
      <Container>
        <Main>
            <LeftHolder>
                <Title>History of the College</Title>

            </LeftHolder>

            <RightHolder>
                <Note></Note>
            </RightHolder>
        </Main>
       
      </Container>
    </div>
  )
}

export default HeroPage
const Note = styled.div``
const RightHolder = styled.div``
const Title = styled.div``
const LeftHolder = styled.div``
const Main = styled.div`
width:90%;
height:100%;
display:flex;
align-items:center;
`
const Container = styled.div`
display:flex;
align-items: center;
justify-content: center;
width:100%;
height: 400px;
background-color: whitesmoke ;
`