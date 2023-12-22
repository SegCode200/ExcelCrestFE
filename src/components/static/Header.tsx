import React, { useState } from 'react'
import styled from 'styled-components'
import logo from "../../assets/Excel_Crest_Logo-removebg-preview.png"
import { NavLink } from 'react-router-dom'

const Header = () => {


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
@media screen and (max-width:958px ) {
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
display: flex;
align-items: center;
justify-content: center;
width: 100%;
background-color: #F5F5F5;
height: 90px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
position:fixed;
z-index:10;

`