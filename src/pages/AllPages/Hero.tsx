import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import pics from "../../assets/coronavirus-vaccine-composition-lab.jpg"
import pics1 from "../../assets/pharmcy-with-person-holding-medicine.jpg"
import pics2 from "../../assets/young-handsome-physician-medical-robe-with-stethoscope.jpg"
import pics3 from "../../assets/wooden-spoon-filled-with-pills-medical-supplies.jpg"
import pics4 from "../../assets/stethoscope-copy-space.jpg"

const Hero = () => {
  const settings = {
    dots: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 7000,
    
    
  };
  return (
    <div>

        <Container>
            <Main>
              <Slider {...settings}>
                        <ImageHolder>
                            <Image src={pics}/>
                            <Blur/>
                        <TextHolder>
                          <Details>Welcome to Excel Crest College of Medical Health & Management </Details>
                          <SmallText> We are poised to 
        equip world class global competitive medical health professionals with 
        a vision to become one of the leading private medical health tertiary 
        institution in Nigeria and by extension Africa continent.</SmallText>
                          <Button>Learn More </Button>
                        </TextHolder>
                        </ImageHolder>
                        <ImageHolder >
                            <Image src={pics1}/>
                            <Blur/>
                        <TextHolder style={{display: "flex", alignItems: "start"}}>
                          <Details>Admission in Progress for 2023/2024 Academic Year </Details>
                          <SmallText> Join our Medical and Health Management Programmes </SmallText>
                          <Button>Apply Now </Button>
                        </TextHolder>
                        </ImageHolder>
                        <ImageHolder>
                            <Image src={pics2}/>
                            <Blur/>
                        <TextHolder >
                          <Details>Medical Health Assistant  </Details>
                          <SmallText > Health assistant medical are trained health professionals who assist in 
the prevention and control of health related problems. These problems 
may led to impairment in a state of complete health or wellbeing of an 
individual in the community.</SmallText>
                          <Button>Join Now </Button>
                        </TextHolder>
                        </ImageHolder>
                        <ImageHolder>
                            <Image src={pics3}/>
                            <Blur/>
                        <TextHolder style={{display: "flex", alignItems: "end"}}>
                          <Details>Excel Crest Student Information HandBook  </Details>
                          <SmallText> Student HandBook</SmallText>
                          <Button>Download Now </Button>
                        </TextHolder>
                        </ImageHolder>
                        <ImageHolder>
                            <Image src={pics4}/>
                            <Blur/>
                        <TextHolder style={{display: "flex", alignItems: "start"}} >
                          <Details style={{fontSize: "30px"}}>Excel Crest Programmes  </Details>
                          <SmallText style={{fontSize: "50px", fontWeight: "800", margin: "0px "}}> Online Application Begins </SmallText>
                          <SmallText style={{fontSize: "15px", color: "whitesmoke", margin: "10px 0"}}> Online Application Begins </SmallText>
                          <Button>Start Excel Crest Online Application </Button>
                        </TextHolder>
                        </ImageHolder>
                        </Slider>
                
            </Main>
        </Container>
    </div>
  )
}

export default Hero

const Button = styled.button`
background-color: #F5F5F5;
padding: 10px 20px;
font-family: Poppins;
font-size: 14px;
border: none;
margin: 10px 0;
cursor: pointer;
&:hover{
  background-color: dodgerblue;
  color: whitesmoke;
}
`
const SmallText = styled.div`
color: dodgerblue;
text-align: center;
text-transform: uppercase;
font-weight: 600;
margin: 20px 0;



`
const Details = styled.div`
color: whitesmoke;
font-size: 40px;
text-align: center;
font-weight: 800 ;
text-transform: uppercase;

`
const TextHolder = styled.div`
position: absolute;
top: 30px;
width: 90%;
z-index: 3;
height: 100%;
display: flex;
align-items: center;
margin-top: 160px;
margin-left: 50px;
/* justify-content: center; */
flex-direction: column;
`
const Blur = styled.div`
position: absolute;
background-color: rgba(0, 0, 0, 0.7);
top: 0;
z-index: 2;
width: 100%;
height: 100%;
`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;

`
const ImageHolder = styled.div`
width: 100%;
height: 550px;
position: relative;
display: flex;
align-items: center;
justify-content: center;

`
const Main = styled.div`

width: 100%;
`
const Container = styled.div`
overflow: hidden;
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background-color: #F5F5F5;

`