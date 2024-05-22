import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
}

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
`;

const Networks = styled.div`
color: black;
font-size: 150px;
width: 185px;
display: flex;  
margin-top: 30px;
`;

const Login = () => {
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      mail: mail,
      contraseña: password,
    };
    console.log(data);
    fetch("http://localhost:3000/usuario/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((err) => {
            throw new Error(err.message || "Error en el inicio de sesión");
          });
        }
        return response.json();
      })
      .then((result) => {
        console.log(result);
        navigate("/"); 
      })
      .catch((error) => {
        console.error("Error en el inicio de sesión:", error);
        alert(error.message);
      });
  };

  useEffect(() => { }, []);

  return (
    <BodyCointaner>
      <LoginCoitaner>
        <section className='Content'>
          <section className="Logo_titulo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE8sTNg_Wuf6Ze67SqR4m4kzy5erMo5S89LMBwQBDEiA&s" alt="Good Hood Logo" />
            <h1>GOOD HOOD</h1>
          </section>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              onChange={(e) => {(e.target.value);}}
            />
            <input
              type="password"
              name="password"
              placeholder="*************"
              required
              onChange={(e) => {setPassword(e.target.value);}}
            />
            <button type="submit">Enviar</button>
          </form>
          <section className="enlaces">
            <Link to={`/register`} className="menu">
              Registrarse
            </Link>
          </section>
          <Networks>
            <FaInstagram />
            <FaFacebookSquare />
            <FaWhatsapp />
          </Networks>
        </section>
      </LoginCoitaner>
    </BodyCointaner>
  );
};

export default Login;
