import React, { useState } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const BodyCointaner = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #afc2d9;
`;


const LoginCoitaner = styled.section`
.Content{
  width: 800px;
  height: 800px;
  background-color: #D9D9D9;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
};

.Logo_titulo{
  display: flex;
  align-items: center;
  margin-top: 30px;
}

img{
  width: 200px;
  height: 200px;
  margin-right: 15px;
  border-radius: 50%;
}

h1{
  font-size: 50px;
}


form{
display: flex;
    justify-content: center;
    flex-direction: column;
}

input{
  width: 500px;
  height: 40px;
  margin-top: 40px;
  margin-bottom: 40px;
}

button{
  width: 500px;
  height: 40px;
  margin-bottom: 30px;
}

a{
  text-decoration: none;
 font-size: 20px;
color: black;
}
`


const Networks = styled.div`
color: black;
font-size: 150px ;
width: 185px;
display: flex;  
margin-top: 30px;
`

const Login = () => {
  return (
    <BodyCointaner>
      <LoginCoitaner>
        <section className='Content'>
          <section className="Logo_titulo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE8sTNg_Wuf6Ze67SqR4m4kzy5erMo5S89LMBwQBDEiA&s" alt="" />
            <h1>GOOD HOOD</h1>
          </section>
          <form action="/login" method="get">
            <input type="email" name="myInput" placeholder="your@email.com" required />
            <input type="password" name="myInput" placeholder="*************" required />
            <button type="submit">Enviar</button>
          </form>
          <section className="enlaces">

            <Link to={`/register`} className="menu">
              <a href="">Registrarse</a>
            </Link>
          </section>
          <Networks>
            < FaInstagram />
            < FaFacebookSquare />
            < FaWhatsapp />
          </Networks>

        </section>
      </LoginCoitaner>
    </BodyCointaner>

  )
}

export default Login