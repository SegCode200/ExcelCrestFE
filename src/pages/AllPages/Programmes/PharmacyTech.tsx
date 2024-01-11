import React, { useState } from 'react'
import pics from "../../../assets/pharmcy-with-person-holding-medicine.jpg"
  import HeroResuse from '../../../components/reuse/HeroResuse'
import { styled } from 'styled-components'
import { LuMinus, LuPlus } from 'react-icons/lu'
import ButtonToTop from '../../../components/reuse/ButtonToTop'


const PharmacyTech = () => {
  const [Upset, setUpset] = useState<boolean>(false)

  const onUpset = ()=>{
    setUpset(!Upset);
  }
  const [Upset1, setUpset1] = useState<boolean>(false)

  const onUpset1 = ()=>{
    setUpset1(!Upset1)
  }
  const [Upset2, setUpset2] = useState<boolean>(false)

  const onUpset2 = ()=>{
    setUpset2(!Upset2)
  }
  return (
    <div>
    <HeroResuse title='Pharmacy Technician; Excel Crest' description=" Pharmacy Technician" photo={pics}/>
    <Container>
        <Main>
        <LeftHolder>
        <Title>Pharmacy Technician</Title>
          

        </LeftHolder>

        <RightHolder>
          <Card>
            <Items><div style={{fontWeight: "600", marginRight: "10px" }}>Course ID</div> Pharmacy Technician</Items>
            <Items><div style={{fontWeight: "600" , marginRight: "10px"}}>Semester</div> 4 Semester</Items>
            <Items><div style={{fontWeight: "600", marginRight: "10px" }}>Duration</div> 2 Years</Items>
            <Items> <div style={{fontWeight: "600" , marginRight: "10px"}}>Certification</div> DNational Diploma in Pharmacy Technician

</Items>

          </Card>
          <Holder onClick={()=>{
            onUpset()
            
          }}>
          <Sub>About</Sub>
          {
            Upset? <Icon />: <Icon1 />
          }
          
          </Holder>
          {
            Upset ? <Subtitle>Pharmacy technicians are medical professionals who work alongside
            pharmacists to help and support patients and make sure they get the best
            care.
            Pharmacy technicians can work in places like community (retail)
            pharmacies; hospital pharmacies; pharmaceutical production or sales in
            the pharmaceutical industry; prisons; and primary care, education,
            military, or veterinary practices.</Subtitle> : null
          }
          <Holder  onClick={()=>{
            onUpset1()
          }}>
          <Sub>Entry Requirement</Sub>
          {
            Upset1? <Icon />: <Icon1 />
          }
          
          </Holder>
          {
            Upset1 ? <Subtitle>The admission requirement for Diploma and certificate programmes in
            all disciplines is the same as in the regular programmes. It include five
            credit level passes in SSCE, GCE or their equivalent at not more than
            two sittings in the relevant subjects combination, which must include, at
            all cases, credit passes in English Language and Mathematics</Subtitle> : null
          }
          <Holder onClick={()=>{
            onUpset2()
          }}>
          <Sub>Career Opportunities</Sub>
          {
            Upset2? <Icon />: <Icon1 />
          }
          
          </Holder>
          {
            Upset2 ? <Subtitle>
              
              Pharmacy technicians are supervised by pharmacists. They’re responsible for the overall efficiency and safety of pharmacy operations. Their time is usually split between using their technical skills for prescriptions and providing customer service.

They help patients fill or order prescriptions and discuss any concerns with the pharmacist. They also make sure that everything runs smoothly in the pharmacy, including phone and technical operations, customer care, and communication between other workers.

Depending on where the pharmacy technician works, they may have different duties:
 <div style={{fontWeight: "bold", margin: "20px 0"}}>
Hospital-based pharmacy technicians
 </div>



Pharmacy technicians in a hospital may work with IV medications (medicine delivered through a needle and tube in a patient’s vein) and do more laboratory preparation such as sterilizing (deep cleaning).

Pharmacy technicians may also maintain drug-dispensary machines (automated vending machines that give out medicine) that nurses use for patients at a moment’s notice.

<div style={{fontWeight: "bold", margin: "20px 0"}}>
  Retail pharmacy technicians
  </div>

Pharmacy technicians in a traditional pharmacy (such as at a grocery store or drugstore) will mostly handle customer service and speak with patients who need medication or advice.

They will often answer questions about taking medications, like dosage and timing. A pharmacy technician might not have all the answers, but if they get stuck, they can ask the pharmacist for help.

<div style={{fontWeight: "bold", margin: "20px 0"}}>Mail-order pharmacy technicians</div>

These technicians work in an office-like environment, fulfilling prescriptions from a workstation. They may be responsible for maintaining patient databases, filling medicines, and taking inventory.


            </Subtitle> : null
          }
          <Button>Apply</Button>
          
        
    

        </RightHolder>
        </Main>
      </Container>
      <ButtonToTop/>
    </div>
  )
}

export default PharmacyTech
const Button = styled.button`
background-color: dodgerblue;
padding: 10px 20px;
font-family: Poppins;
font-size: 14px;
border: none;
margin: 10px 0;
color: white;
cursor: pointer;
&:hover{
  background-color: white;
  color: dodgerblue;
}
`
const Icon1 = styled(LuMinus)`
font-size: 25px;
`
const Icon = styled(LuPlus)`
font-size: 25px;
`
const Sub = styled.div`
`
const Holder = styled.div`
width: 100%;
height: 50px;
background-color: white;
color: dodgerblue;
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px 20px;
margin: 20px 0;
cursor: pointer;


`
const Items = styled.div`
display: flex;
margin: 20px 0;
font-size: 17px;
`
const Card = styled.div`
width: 100%;
height: auto;
padding: 10px 20px;
background-color: dodgerblue;
color: white;
`
const RightHolder = styled.div`
/* width: 65%; */
height: 100%;
flex: 1;
margin-top: 60px;
`
const Subtitle = styled.div`
font-size: 17px;
margin: 20px 0;
padding: 0 20px;
line-height: 27px;
color: #6B6B6B;
`
const Title = styled.div`
font-size: 30px;
border-bottom: 2px solid dodgerblue;
padding: 5px 0;
font-weight: 700;

`
const LeftHolder = styled.div`
width: 43%;
height: 100%;

`
const Main = styled.div`
width: 90%;
height: 100%;
display: flex;
justify-content: space-between;
`
const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: auto;
background-color: #F5F5F5;
padding: 30px 0;
`