import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";

const HeaderContainer = styled.header`
body{
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #afc2d9;
}

nav {
  background-color: #1672cd;
  height: 170px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.enlace {
  padding: 0px 50px;
}

.logo {
  height: 150px;
  border-radius: 75px;
}

.sesion {
  display: flex;
  align-items: center;
  float: left;
  padding: 0px 30px 0px 0px;
}

.sesion ul li a {
  font-size: 18px;
}

.sesion ion-icon {
  font-size: 64px;
  cursor: pointer;
  border-radius: 30px;
  margin-left: 70px;
}


nav ul {
  margin-right: 20px;
  margin-left: 20px;
}

nav ul li {
  display: inline-block;
  line-height: 80px;
  margin: 0px 30px 0px 0px;
}

nav ul li a{
  font-size: 25px;
  color: white;
  text-transform: uppercase;
}

.enlace__sesion
li
a {
  color: #fff;
  font-size: 18px;
  padding: 7px 13px;
  border-radius: 10px;
  text-transform: uppercase;
}

li a.active,
li a:hover {
  background-color: #000090;
  transition: 0.5s;
}

.accont {
  display: flex;
}


.checkbtn {
  font-size: 30px;
  color: #fff;
  float: right;
  line-height: 140px;
  margin-right: 40px;
  cursor: pointer;
  display: none;
}

#check {
  display: none;
}
`

function Navbar() {
    return (
      <HeaderContainer>

      </HeaderContainer>
    )
  }

  export default Navbar