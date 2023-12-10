import React from 'react'
import styled from 'styled-components'
import pics from "../../assets/myriam-zilles-7V95FwS2Ss4-unsplash.jpg"

const WelcomeComp = () => {
  return (
    <div>
        <Container style={{backgroundImage: `url(${pics})`}}>
            <Blur>
            <Main>
                <Left>
                    <Text>Welcome to Excel Crest College </Text>
                    <Details>
                    I welcome you all to this great citadel of learning. Excel Crest College 
of Medical Health & Management Sciences, Lagos. We are poised to 
equip world class global competitive medical health professionals with 
a vision to become one of the leading private medical health tertiary 
institution in Nigeria and by extension Africa continent. The College 
offer simple and flexible lectures structured for both onsite and online 
platforms. Dear Esteemed students, your academic pursuit with us will 
offer you the quality learning experience based on skills and knowledge 
sandwiched with quality practical/clinical internships.
                    </Details>
                    <div style={{display: "flex", alignItems: "center"}}>

                    <Button>Learn More</Button>
                    </div>

                </Left>
                {/* <Right>
                    <ImageHolder>
                        <Image src={pics}/>
                    </ImageHolder>

                </Right> */}

            </Main>
            </Blur>
        </Container>
    </div>
  )
}

export default WelcomeComp
const Button = styled.div`
background-color: dodgerblue;
padding: 10px 20px;
font-family: Poppins;
font-size: 14px;
border: none;
display: flex;
align-items: center;
margin: 10px 0;
cursor: pointer;
&:hover{
  background-color: whitesmoke ;
  color: black;

}
`
// const Image = styled.img`
// object-fit: cover;
// width: 100%;
// height: 100%;
// `
// const ImageHolder = styled.div`
// /* width: 40%; */
// height: 300px;
// `
// const Right = styled.div`
// flex: 1;
// width: 40%;
// display: flex;
// justify-content: center;
// align-items: center;
// height: 100%;
// `
const Details = styled.div`
color: whitesmoke;
margin: 15px 0;
`
const Text = styled.div`
font-size: 40px;
color: whitesmoke;
font-weight: 800;
border-bottom: 10px solid dodgerblue;
width: 55%;

`
const Left = styled.div`
height: 100%;
display: flex;
justify-content: center;
/* align-items: center; */
flex-direction: column;
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
justify-content: center;
align-items: center;
z-index: 3;
`
const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 500px;
object-fit: contain;
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;

`