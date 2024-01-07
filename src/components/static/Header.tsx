import React, { useState } from 'react'
import styled from 'styled-components'
import logo from "../../assets/Excel_Crest_Logo-removebg-preview.png"
import { NavLink } from 'react-router-dom'
import { IoMenu,  } from "react-icons/io5"
import { RxCross2 } from "react-icons/rx"
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io"



const Header = () => {


  const [Menu, SetMenu] = useState<boolean>(false)
  const onMenu = ()=>{
    SetMenu(!Menu)
  }
  const [Menu1, SetMenu1] = useState<boolean>(false)
  const onMenu1 = ()=>{
    SetMenu1(!Menu1)
  }
  const [Menu2, SetMenu2] = useState<boolean>(false)
  const onMenu2 = ()=>{
    SetMenu2(!Menu2)
  }
  const [Scroll, setScroll] = useState<boolean>(false)

  const onScroll = ()=>{
    if(window.scrollY >= 100){
        setScroll(true)
    }else{
      setScroll(false)
    }
  }
  window.addEventListener("scroll",onScroll)

  const [hover, onHover] = useState<boolean>(false)
  const setHover = ()=>{
    onHover(!hover)
  }
  const [hover1, onHover1] = useState<boolean>(false)
  const setHover1 = ()=>{
    onHover1(!hover1)
  }
  return (
    <div>
   
     
    
      {
        Scroll ? 
        <Container  style={{backgroundColor: "white"}}>
        <Main>
          <NavLink to="/" style={{textDecoration: "none"}}>
          <LogoHolder>
            <Logo src={logo}/>
            <Text>Excel Crest College of Medical<br/> <span style={{color: "blue"}}>Health & Management  </span><br/>Sciences, Lagos</Text>
          </LogoHolder>
          </NavLink>

          <MenuHolder onClick={()=>{
              onMenu()
            }}>
           
              {
                Menu? <Icon1/> : <Icon/>
              }

            
          </MenuHolder>
          {
                Menu? 
                <Div>
                <Hold>
                  <Box>
                  <NavLink to="/" style={{textDecoration: "none"}}>
          <LogoHolder style={{width: "200px"}}>
            <Logo src={logo} style={{margin: "0 10px"}}/>
            <Text style={{fontSize: "7px"}}>Excel Crest College of Medical<br/> <span style={{color: "blue"}}>Health & Management  </span><br/>Sciences, Lagos</Text>
          </LogoHolder>
          </NavLink>
                  <Icon1 onClick={()=>{
                    SetMenu(!Menu)
                  }} style={{color:"black", margin: "20px 20px"}}/>
                  </Box>


                  {/* Down part of the Holder */}
                  <ColumHolder>
                  {/* Home Link */}
                  <NavLink to="/"  style={{textDecoration: "none", color: "white"}}>

                  <Navs>Home 
                 
                  </Navs>
                    </NavLink>

                    {/* About Link */}
                    <NavLink to="/about"  style={{textDecoration: "none", color: "white"}}>
                  <Navs>About</Navs>

                    </NavLink>
                  
                  <Navs
                  onClick={()=>{
                    onMenu1()
                  }}
                  >Admission
                   {
                    Menu1 ? <Down/> : <Up/>
                  }
                  </Navs>
                  {
                    Menu1 ? 
                    <ColumHolder style={{margin: "0px 25px"}}>
                      {/* Admission Link */}
                      <NavLink to="/admission" style={{textDecoration: "none", color: "white"}}>
                   <Data>Admission Requirement</Data>
                      </NavLink>

                      {/* Apply Now Link */}
                      <NavLink to="/apply-now" style={{textDecoration: "none", color: "white"}}>
                   <Data>Apply Now</Data>

                      </NavLink>
                    </ColumHolder>
                     : null
                  }
                  <Navs
                  onClick={()=>{
                    onMenu2()
                  }}
                  >Programmes
                  {
                    Menu2 ? <Down/> : <Up/>
                  }
                  </Navs>
                  {
                    Menu2 ? 
                    <ColumHolder style={{margin: "0px 25px"}}>

                    {/* Medical Health Link */}
                    <NavLink to="/medical-health-assistant" style={{textDecoration: "none", color: "white"}} >

                   <Data>Medical Health Assistant</Data>
                    </NavLink>

                    {/* Public Health Link */}
                    <NavLink to="/public-health-technician" style={{textDecoration: "none", color: "white"}}>

                   <Data>Public Health Technician</Data>
                    </NavLink>

                    {/* Community Health Link */}
                    <NavLink to="/community-health-technician" style={{textDecoration: "none", color: "white"}}>
                   <Data>Community Health Technician</Data>
                    </NavLink>

                    {/* Pharmacy Technician */}
                    <NavLink to="/pharamacy-technician" style={{textDecoration: "none", color: "white"}}>
                      <Data>Pharmacy Technician </Data>
                    </NavLink>
                    </ColumHolder>
                     : null
                  }
                   <NavLink to="/contact"  style={{textDecoration: "none", color: "white"}}>
                  <Navs>Contact Us</Navs>
                   </NavLink>
                  </ColumHolder>
                 

                </Hold>
                </Div> : null
              }

          <NavHolder>
            {/* Home */}
            <NavLink to="/"  style={{textDecoration: "none", color: "black"}}>
            <Nav>Home</Nav> 
            </NavLink>
            {/* About Page */}
            <NavLink to="/about"  style={{textDecoration: "none", color: "black"}}>
            <Nav>About</Nav> 
            </NavLink>


            <Nav
            onMouseEnter={()=>setHover()}
            onMouseLeave={()=>setHover()}
            >Admission
              {hover? 
              <DropDown>
                <NavLink to="/admission" style={{textDecoration: "none", color: "white"}}>
                  
                <DropItem >Admisson Requirement</DropItem>
                </NavLink>

                <NavLink to="/apply-now" style={{textDecoration: "none", color: "white"}}>
                <DropItem>Apply</DropItem>
                </NavLink>
              </DropDown>
              : null
              }
              </Nav> 
            <Nav
             onMouseEnter={()=>setHover1()}
             onMouseLeave={()=>setHover1()}
            >Programmes

{hover1? 
              <DropDown style={{maxHeight: "auto"}}>
                <NavLink to="/medical-health-assistant" style={{textDecoration: "none", color: "white"}}>
                <DropItem>Medical Health Assistant</DropItem>
                </NavLink>

                <NavLink to="/public-health-technician" style={{textDecoration: "none", color: "white"}}>
                <DropItem>Public Health Technician</DropItem>
                </NavLink>

                <NavLink to="/community-health-technician" style={{textDecoration: "none", color: "white"}}>
                <DropItem>Community Health Technician</DropItem>

                </NavLink>

                <NavLink to="/pharamacy-technician" style={{textDecoration: "none", color: "white"}}>
                <DropItem>Pharmacy Technician</DropItem>
                </NavLink>
              
              </DropDown>
              : null
              }

            </Nav> 
            {/* Contact  */}
                <NavLink to="/contact"  style={{textDecoration: "none", color: "black"}}>
            <Nav>Contact Us</Nav> 
            </NavLink>

          </NavHolder>
        </Main>

      </Container>:


      <Container className='head' id="1"  style={{backgroundColor: "whitesmoke"}}>
      <Main>
        <NavLink to="/" style={{textDecoration: "none"}}>
        <LogoHolder>
          <Logo src={logo}/>
          <Text>Excel Crest College of Medical<br/> <span style={{color: "blue"}}>Health & Management  </span><br/>Sciences, Lagos</Text>
        </LogoHolder>
        </NavLink>

        <MenuHolder onClick={()=>{
              onMenu()
            }}>
           
              {
                Menu? <Icon1/> : <Icon/>
              }


            
          </MenuHolder>
         

          {
                Menu? 
                <Div>
                <Hold>
                  <Box>
                  <NavLink to="/" style={{textDecoration: "none"}}>
          <LogoHolder style={{width: "200px"}}>
            <Logo src={logo} style={{margin: "0 10px"}}/>
            <Text style={{fontSize: "7px"}}>Excel Crest College of Medical<br/> <span style={{color: "blue"}}>Health & Management  </span><br/>Sciences, Lagos</Text>
          </LogoHolder>
          </NavLink>
                  <Icon1 onClick={()=>{
                    SetMenu(!Menu)
                  }} style={{color:"black", margin: "20px 20px"}}/>
                  </Box>


                  {/* Down part of the Holder */}
                  <ColumHolder>
                  {/* Home Link */}
                  <NavLink to="/"  style={{textDecoration: "none", color: "white"}}>

                  <Navs>Home 
                 
                  </Navs>
                    </NavLink>

                    {/* About Link */}
                    <NavLink to="/about"  style={{textDecoration: "none", color: "white"}}>
                  <Navs>About</Navs>

                    </NavLink>
                  
                  <Navs
                  onClick={()=>{
                    onMenu1()
                  }}
                  
                  >Admission
                   {
                    Menu1 ? <Down/> : <Up/>
                  }
                  </Navs>
                  {
                    Menu1 ? 
                    <ColumHolder style={{margin: "0px 25px"}}>
                      {/* Admission Link */}
                      <NavLink to="/admission" style={{textDecoration: "none", color: "white"}}>
                   <Data>Admission Requirement</Data>
                      </NavLink>

                      {/* Apply Now Link */}
                      <NavLink to="/apply-now" style={{textDecoration: "none", color: "white"}}>
                   <Data>Apply Now</Data>

                      </NavLink>
                    </ColumHolder>
                     : null
                  }
                  <Navs
                  onClick={()=>{
                    onMenu2()
                  }}
                  >Programmes
                  {
                    Menu2 ? <Down/> : <Up/>
                  }
                  </Navs>
                  {
                    Menu2 ? 
                    <ColumHolder style={{margin: "0px 25px"}}>

                    {/* Medical Health Link */}
                    <NavLink to="/medical-health-assistant" style={{textDecoration: "none", color: "white"}}>

                   <Data>Medical Health Assistant</Data>
                    </NavLink>

                    {/* Public Health Link */}
                    <NavLink to="/public-health-technician" style={{textDecoration: "none", color: "white"}}>

                   <Data>Public Health Technician</Data>
                    </NavLink>

                    {/* Community Health Link */}
                    <NavLink to="/community-health-technician" style={{textDecoration: "none", color: "white"}}>
                   <Data>Community Health Technician</Data>
                    </NavLink>

                    {/* Pharmacy Technician */}
                    <NavLink to="/pharamacy-technician" style={{textDecoration: "none", color: "white"}}>
                      <Data>Pharmacy Technician </Data>
                    </NavLink>
                    </ColumHolder>
                     : null
                  }
                   <NavLink to="/contact"  style={{textDecoration: "none", color: "white"}}>
                  <Navs>Contact Us</Navs>
                   </NavLink>
                  </ColumHolder>
                 

                </Hold>
                </Div> : null
              }
             

        <NavHolder>
          {/* Home */}
          <NavLink to="/"  style={{textDecoration: "none", color: "black"}}>
          <Nav>Home</Nav> 
          </NavLink>
          {/* About Page */}
          <NavLink to="/about"  style={{textDecoration: "none", color: "black"}}>
          <Nav>About</Nav> 
          </NavLink>


          <Nav
          onMouseEnter={()=>setHover()}
          onMouseLeave={()=>setHover()}
          >Admission
            {hover? 
            <DropDown>
              <NavLink to="/admission" style={{textDecoration: "none", color: "white"}}>
                
              <DropItem >Admisson Requirement</DropItem>
              </NavLink>

              <NavLink to="/apply-now" style={{textDecoration: "none", color: "white"}}>
              <DropItem>Apply</DropItem>
              </NavLink>
            </DropDown>
            : null
            }
            </Nav> 
          <Nav
           onMouseEnter={()=>setHover1()}
           onMouseLeave={()=>setHover1()}
          >Programmes

{hover1? 
            <DropDown style={{maxHeight: "auto"}}>
              <NavLink to="/medical-health-assistant" style={{textDecoration: "none", color: "white"}}>
              <DropItem>Medical Health Assistant</DropItem>
              </NavLink>

              <NavLink to="/public-health-technician" style={{textDecoration: "none", color: "white"}}>
              <DropItem>Public Health Technician</DropItem>
              </NavLink>

              <NavLink to="/community-health-technician" style={{textDecoration: "none", color: "white"}}>
              <DropItem>Community Health Technician</DropItem>

              </NavLink>

              <NavLink to="/pharamacy-technician" style={{textDecoration: "none", color: "white"}}>
              <DropItem>Pharmacy Technician</DropItem>
              </NavLink>
            
            </DropDown>
            : null
            }

          </Nav> 
          {/* Contact  */}
              <NavLink to="/contact"  style={{textDecoration: "none", color: "black"}}>
          <Nav>Contact Us</Nav> 
          </NavLink>

        </NavHolder>
      </Main>

    </Container>
      }
    </div>
  )
}

export default Header
const Data = styled.div`
  color: #d8d7d7;
  margin: 10px 0;
  font-size: 14px;
  cursor: pointer;
  &:hover{
    color: white;
  }
  
`
const Up = styled(IoIosArrowUp)`
font-size: 20px;
color: white;
cursor: pointer;
padding: 10px;
border-radius: 50%;
&:hover{
  background-color: #4e4c4c;
}

`
const Down = styled(IoIosArrowDown)`
cursor: pointer;
color: white;
font-size: 20px;
padding: 10px;
border-radius: 50%;
&:hover{
  background-color: #4e4c4c;
}
`
const Box = styled.div`
width: 100%;
height: 90px;
display:flex;
background-color: white;
justify-content: space-between;
align-items: center;
`
const Navs = styled.div`
border-bottom: 0.1px solid #4e4c4c;
color: white;
margin: 10px 20px;
text-transform: uppercase;
padding: 5px 0;
font-weight: 800;
cursor: pointer;
display: flex;
width:300px;
align-items: center;
justify-content: space-between;
`
const ColumHolder = styled.div`
display: flex;
flex-direction: column;
margin-top: 20px;
`
const Hold = styled.div`
display: flex;
width: 350px;
/* padding: 25px; */
background-color: #111111;
height:100vh;
position:absolute;
/* z-index:-2; */
right:0;
flex-direction: column;

`
const Div = styled.div`
width: 100vw;
height: 100vh;
display: flex;
position:absolute;
top:0;
left: 0;
z-index:10;
object-fit:cover;
flex-direction: column;
background-color: rgba(0,0,0,0.3)
`
const Icon1 = styled(RxCross2)`
font-size: 30px;
cursor: pointer;
`
const Icon = styled(IoMenu)`
font-size: 30px;
cursor: pointer;
`
const MenuHolder = styled.div`
display: none;
@media screen and (max-width: 994px) {
  display: flex;
}
`
const DropItem = styled.div`
padding: 10px 20px;
cursor: pointer;
font-size: 12px;
z-index: 3;
&:hover{
  background-color: #f2f2f2;
  color: #010101;
}

`
const DropDown = styled.div`
position: relative;
width: 150px;
cursor: pointer;

/* height:100px; */
position: absolute;
top:37px;
left:1px;
z-index: 5;
background-color: dodgerblue;
/* padding: 0 10px; */

`
const Nav = styled.div`
padding: 5px 15px;
cursor: pointer;
font-size: 14px;
position:relative;
z-index: 3;
&:hover{
  background-color: blue;
  color: white;
}
`
const NavHolder = styled.div`
display: flex;
align-items: center;
@media screen and (max-width:994px ) {
  display: none;
}
`
const Text = styled.div`
text-align: center;
font-size: 9px;
font-weight: 500;
text-transform: uppercase;
font-weight: 600;

`
const Logo = styled.img`
width: 75px;
height: 60px;
`
const LogoHolder = styled.div`
display: flex;
align-items: center;
cursor: pointer;
z-index:10;

`
const Main = styled.div`
display: flex;
align-items: center;
width: 90%;
height: 100%;
justify-content: space-between;
`
const Container = styled.div`
/* position: relative; */
display: flex;
align-items: center;
justify-content: center;
width: 100vw;
background-color: #F5F5F5;
height: 90px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
position:fixed;
z-index:10;

`