import React from 'react'
import  styled  from 'styled-components'
import pics from "../../assets/Excel_Crest_Logo-removebg-preview.png"
import { TiSocialTwitter, TiSocialLinkedin, TiSocialInstagram, TiSocialFacebook,TiSocialGooglePlus } from "react-icons/ti"

const Footer = () => {
  return (
    <div>
      <Container>
        <Main>
        <Display>
          <Title>Quick Checks</Title>
          <Sub>Courses</Sub>
          <Sub>Admission</Sub>
          <Sub>Learn More</Sub>
          <Sub>Admission Req.</Sub>
          
          
          </Display>

          <Contain >
          <LogoHolder>
            <Logo src={pics}/>
            <Text>Excel Crest College of Medical<br/> <span >Health & Management  </span><br/>Sciences, Lagos</Text>
          </LogoHolder>
          {/* style={{color: "blue"}} */}
          <Details>


            <Note>
              
The College are ready to prepare top-tier, globally competitive medical health professionals with a goal to emerge as a leading private medical health tertiary institution in Nigeria and, by extension, the African continent. 
            </Note>
            <div style={{margin: "20px 0"}}>.........................................................................................................</div>

            <Title style={{fontSize: "16px"}}>Quick Contact</Title>
            <Address>
             Address: 17, Nimota Street, Sari Iganmu, Off Chemist Bus-Stop, Lagos State 

            </Address>

            <AdmissionNumber>
              For Admission Enquiries: 08079865934,
              09112183400
              
            </AdmissionNumber>
            <AdmissionNumber>
              Email: excelcrestcollege.edu@gmail.com
            </AdmissionNumber>
          
          </Details>
          <IconHolder>
            <Icon>
              <TiSocialTwitter/>
            </Icon>
            <Icon>
              <TiSocialFacebook/>
            </Icon>
            <Icon>
              <TiSocialInstagram/>
            </Icon>
            <Icon>
              <TiSocialGooglePlus/>
            </Icon>
            <Icon>
              <TiSocialLinkedin/>
            </Icon>
          </IconHolder>

          </Contain>

          <Display>
          <Title>Quick Checks</Title>
          <Sub>Apply Now</Sub>
          <Sub>Student Portal</Sub>
          <Sub>About us </Sub>
          <Sub>Contact us </Sub>
          
          
          </Display>

        </Main>
      </Container>

    </div>
  )
}

export default Footer
const Icon = styled.div`
border-radius: 50%;
color: black;
display:flex;
padding:5px;
align-items:center;
justify-content: center;
background-color:white;
cursor:pointer;
margin: 0px 5px;
`
const IconHolder = styled.div`
display:flex;
margin:10px 0;
`
const Sub = styled.div`
font-size: 13px;
margin: 5px 0;
cursor:pointer;
`
const Title = styled.div`
margin: 10px 0;
color: white;
`
const AdmissionNumber = styled.div`
text-align: center;
margin: 10px 0;
`
const Note = styled.div`
/* width:100%; */
font-weight: 500;
text-align: center;
font-size: 13px;
margin-top: 10px;
`
const Address = styled.div`
text-align: center;
margin: 10px 0;
`
const Details = styled.div`
display: flex;
font-size: 13px;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Text = styled.div`
text-align: center;
font-size: 13px;
font-weight: 500;
text-transform: uppercase;
font-weight: 600;
`
const Logo = styled.img`
width: 130px;
height: 100px;
`
const LogoHolder = styled.div`
display: flex;
align-items: center;
cursor: pointer;
width: 100%;
margin-bottom: 15px;
justify-content: center;
color: white;

`
const Display = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height:100%;
width:10%;
justify-content: center;

`
const Contain = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 50%;
height: 100%;
padding: 0 15px;
justify-content: center;
border-left:  1px solid #666666;
border-right:  1px solid #666666;

`
const Main = styled.div`
display: flex;
width: 90%;
align-items: center;
height: 100%;
justify-content: space-between;

`
const Container = styled.div`
width:100%;
height: 500px;
/* padding: 50px 0; */
display:flex;
align-items:center;
justify-content: center;
background-color: #111111;
color: #a5a4a4;
`