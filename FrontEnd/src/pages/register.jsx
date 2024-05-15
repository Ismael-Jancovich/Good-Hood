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
background-color: #C1C5CF;
`;

const RegisterCointaner = styled.div`
display: flex;
    flex-direction: column;
    background-color: #D9D9D9;
    width: 800px;
    height: 900px;
    align-items: center;
    margin-top: 25px;
    margin-bottom: 25px;


    .Logo_titulo{
      display: flex;
      align-items: center;
      margin-top: 30px;
    }

h1{
  font-size: 50px;
}


img{
  width: 200px;
  height: 200px;
  margin-right: 15px;
  border-radius: 50%;
}

    form{
      display: flex;
      flex-direction: column;
    }

    input{
      width: 500px;
      height: 40px;
      margin-top: 20px;
      margin-bottom: 20px;
  
    }

    button{
      width: 500px;
      height: 40px;
      margin-bottom: 30px;
    }

`

const Networks = styled.div`
color: black;
font-size: 150px ;
width: 185px;
display: flex;  
margin-top: 30px;
`

const Register = () => {
  return (
    <BodyCointaner>
      <RegisterCointaner>
        <section className="Logo_titulo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE8sTNg_Wuf6Ze67SqR4m4kzy5erMo5S89LMBwQBDEiA&s" alt="" />
          <h1>GOOD HOOD</h1>
        </section>
        <section className="inputs">
          <form action="/nuevo-usuario" method="post">
            <input type="name" name="nombre" placeholder="Nombre" required />
            <input type="name" name="apellido" placeholder="Apellido" required />
            <input type="date" name="fecha" placeholder="Fecha de nacimiento" required />
            <input type="email" name="email" placeholder="your@email.com" required />
            <input type="password" name="password" placeholder="*************" required />
            <button type="submit">Enviar</button>
          </form>
          <Networks>
            < FaInstagram />
            < FaFacebookSquare />
            < FaWhatsapp />
          </Networks>
        </section>
      </RegisterCointaner>
    </BodyCointaner>


  )
}

export default Register