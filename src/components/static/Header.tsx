import React, { useState } from 'react'
import styled from 'styled-components'
import logo from "../../assets/Excel_Crest_Logo-removebg-preview.png"
import { NavLink } from 'react-router-dom'

const Header = () => {

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
      <Container>
        <Main>
          <NavLink to="/" style={{textDecoration: "none"}}>
          <LogoHolder>
            <Logo src={logo}/>
            <Text>Excel Crest College of Medical<br/> <span style={{color: "blue"}}>Health & Management  </span><br/>Sciences, Lagos</Text>
          </LogoHolder>
          </NavLink>

          <NavHolder>
            <Nav>Home</Nav> 
            <Nav>About</Nav> 
            <Nav
            onMouseEnter={()=>setHover()}
            onMouseLeave={()=>setHover()}
            >Admission
              {hover? 
              <DropDown>
                <DropItem >Admisson Requirement</DropItem>
                <DropItem>Apply</DropItem>
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
                <DropItem>Medical Health Assistant</DropItem>
                <DropItem>Public Health Technician</DropItem>
                <DropItem>Community Health Technician</DropItem>
                <DropItem>Pharmacy Technician</DropItem>
              </DropDown>
              : null
              }

            </Nav> 
            <Nav>Contact Us</Nav> 
          </NavHolder>
        </Main>

      </Container>
    </div>
  )
}

export default Header
const DropItem = styled.div`
padding: 10px 20px;
cursor: pointer;
font-size: 12px;
&:hover{
  background-color: #f2f2f2;
  color: #010101;
}

`
const DropDown = styled.div`
width: 150px;
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
&:hover{
  background-color: blue;
  color: white;
}
`
const NavHolder = styled.div`
display: flex;
align-items: center;
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
background-color: whitesmoke;
height: 90px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

`