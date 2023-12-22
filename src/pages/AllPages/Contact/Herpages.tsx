import React from 'react'
import styled from 'styled-components'
import { LuPhoneCall } from "react-icons/lu"
import { IoIosSend } from "react-icons/io"
import { MdLocationPin } from "react-icons/md"
import { TiSocialTwitter, TiSocialLinkedin, TiSocialInstagram, TiSocialFacebook,TiSocialGooglePlus } from "react-icons/ti"

const Herpages = () => {
  return (
    <div>
        <Container>
            <Main>
                <LeftHolder>
                    <Title>Contact the College</Title>
                    <Hold>

                    <Holder>
                        <InputHolder>
                        <Input placeholder='FullName'/>
                        </InputHolder>
                        <InputHolder >
                        <Input placeholder='Email'/>
                        </InputHolder>
                        <InputHolder >
                        <Input placeholder='Subject'/>
                        </InputHolder>

                    </Holder>
                    <TextHolder>
                        <TextHold placeholder='Send Message'/>
                    </TextHolder>
                    </Hold>
                    <div style={{width: "90%", display: "flex", alignItems: "center", justifyContent: "center"}}><Button>Submit</Button></div>

                </LeftHolder>

                <RightHolder>
                    <TelPhoneHolder>
                        <Icon/>
                        Phone: 08079865934, 09112183400
                    </TelPhoneHolder>
                    <EmailHolder>
                        <Icon1/>
                        Email: excelcrestcollege.edu@gmail.com
                    </EmailHolder>
                    <AdressHolder>
                        <Icon2/>
                        Adress: 17, Nimota Street, Sari Iganmu, Off Chemist Bus-Stop, Lagos State
                    </AdressHolder>

                    <Text>FOLLOW US</Text>
                    <IconHolder>
            <Icon3>
              <TiSocialTwitter size={30}/>
            </Icon3>
            <Icon3>
              <TiSocialFacebook size={30}/>
            </Icon3>
            <Icon3>
              <TiSocialInstagram size={30}/>
            </Icon3>
            <Icon3>
              <TiSocialGooglePlus size={30}/>
            </Icon3>
            <Icon3>
              <TiSocialLinkedin size={30}/>
            </Icon3>
          </IconHolder>


                </RightHolder>
            </Main>
        </Container>
    </div>
  )
}

export default Herpages

const Text = styled.div`
margin: 0px 10px;
font-size: 20px;
font-weight: 600;
`
const Icon3 = styled.div`
border-radius: 50%;
color: black;
display:flex;
padding:5px;
align-items:center;
justify-content: center;
background-color:white;
cursor:pointer;
margin: 0px 10px;


&:hover{
    background-color: dodgerblue;
    color: white;
}
`
const IconHolder = styled.div`
display:flex;
margin:10px 0;
`
const Icon2 = styled(MdLocationPin)`
font-size: 30px;
color: dodgerblue;
margin-right: 10px;
`
const AdressHolder = styled.div`
display: flex;
margin-bottom: 50px;
`
const Icon1 = styled(IoIosSend)`
font-size: 25px;
color: dodgerblue;
margin-right: 10px;
`
const EmailHolder = styled.div`
display: flex;
align-items: center;
margin-bottom: 50px;
`
const Icon = styled(LuPhoneCall)`
font-size: 25px;
color: dodgerblue;
margin-right: 10px;
`
const TelPhoneHolder = styled.div`
display: flex;
align-items: center;
margin-bottom: 50px;
`
const RightHolder = styled.div`
flex: 1;
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
justify-content: center;
`
const Button = styled.button`
border: 0;
font-family: Poppins;
padding: 20px 30px;
margin: 20px 0;
display: flex;
width: 100%;
justify-content:center;
align-items: center;
background-color: dodgerblue;
cursor:pointer;
color:white;
&:hover{
    background-color:white ;
color:black;
}
`
const TextHold = styled.textarea`
font-family: Poppins;
width:100%;
height: 100%;
border: 0;
padding: 5px;
&:focus{
    
    outline: none;
}

`
const TextHolder = styled.div`
width: 90%;
height: 300px;
margin: 10px 0;
`
const Input = styled.input`
border: 0px;
width:100%;
height: 100%;
padding: 5px;
font-family: Poppins;
caret-color: dodgerblue;

&:focus{
    border: 2px solid dodgerblue;
    outline: none;
}
`
const InputHolder = styled.div`
width: 100%;
height: 40px;
margin: 20px 0;

`
const Holder = styled.div`
display:flex;
width: 90%;
flex-direction: column;
`
const Hold = styled.div`
display: flex;
flex-direction: column;
`
const Title = styled.div`
font-size: 40px;
border-bottom: 3px solid dodgerblue;
margin-bottom: 5%;
font-weight: 500;
width: 60%;

`
const LeftHolder = styled.div`
width: 65%;
height: 100%;
`
const Main = styled.div`
display: flex;
width: 90%;
align-items: center;
height: 100%;
justify-content: space-between;
`
const Container = styled.div`
width: 100%;
height: auto;
display: flex;
align-items: center;
justify-content: center;
background-color: #F5F5F5;
padding: 50px 0;
`