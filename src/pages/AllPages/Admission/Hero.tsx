import React from "react"
import styled from "styled-components"

const Hero =()=>{
    return(
        <div>
            <Container>
                <Main>
                    <Title>
                        Admission Requirement
                    </Title>
                    <Sub>
                    The admission requirement for Diploma and certificate programmes in
all disciplines is the same as in the regular programmes. It include five
credit level passes in SSCE, GCE or their equivalent at not more than
two sittings in the relevant subjects combination, which must include, at
all cases, credit passes in English Language and Mathematics. 
                    </Sub>
                </Main>
            </Container>

        </div>
    )
}

export default Hero
const Sub = styled.div`
font-size: 17px;
`
const Title = styled.div`
text-transform: uppercase;
font-size: 30px;
margin-bottom:10px;
font-weight: 600;
`
const Main = styled.div`
width:90%;
height: 100%;
display: flex;
flex-direction:column;
`
const Container = styled.div`
display:flex;
width:100%;
height: 200px;
padding: 30px 0;
background:white;
align-items:center;
justify-content:center;
`
