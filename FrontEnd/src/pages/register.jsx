import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c1c5cf;
`;

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #d9d9d9;
  width: 800px;
  height: 900px;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 25px;

  .Logo_titulo {
    display: flex;
    align-items: center;
    margin-top: 30px;
  }

  h1 {
    font-size: 50px;
  }

  img {
    width: 200px;
    height: 200px;
    margin-right: 15px;
    border-radius: 50%;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  input {
    width: 500px;
    height: 40px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  button {
    width: 500px;
    height: 40px;
    margin-bottom: 30px;
  }
`;

const Networks = styled.div`
  color: black;
  font-size: 150px;
  width: 185px;
  display: flex;
  margin-top: 30px;
`;

const Register = () => {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    name: "",
    lastname: "",
    date: "",
    email: "",
    user: "",
    password: "",
  });

  const onChangeNewUserValues = (event) => {
    const { name, value } = event.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleRegister = (event) => {
    event.preventDefault();
    console.log("newUser", newUser);
    fetch("http://localhost:3000/usuario/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: newUser.name,
        apellido: newUser.lastname,
        fecha: newUser.date,
        mail: newUser.email,
        usuario: newUser.user,
        contraseña: newUser.password
      }),
    })
      .then((response) => {
        if (response.status === 201) {
          return response.json();
        } 
        console.error("Hubo un error en el servidor")
      })
      .then((result) => {
        console.log(result);
        navigate("/login")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {}, []);

  return (
    <BodyContainer>
      <RegisterContainer>
        <section className="Logo_titulo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE8sTNg_Wuf6Ze67SqR4m4kzy5erMo5S89LMBwQBDEiA&s"
            alt=""
          />
          <h1>GOOD HOOD</h1>
        </section>
        <section>
          <form onSubmit={handleRegister}>
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              required
              onChange={onChangeNewUserValues}
            />
            <input
              type="text"
              name="lastname"
              placeholder="Apellido"
              required
              onChange={onChangeNewUserValues}
            />
            <input
              type="date"
              name="date"
              placeholder="Fecha de nacimiento"
              required
              onChange={onChangeNewUserValues}
            />
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              onChange={onChangeNewUserValues}
            />
              <input
              type="text"
              name="user"
              placeholder="usuario"
              required
              onChange={onChangeNewUserValues}
            />
            <input
              type="password"
              name="password"
              placeholder="*************"
              required
              onChange={onChangeNewUserValues}
            />
             <button type="submit">Registrarme</button>
          </form>
          <Networks>
            <FaInstagram />
            <FaFacebookSquare />
            <FaWhatsapp />
          </Networks>
        </section>
      </RegisterContainer>
    </BodyContainer>
  );
};

export default Register;
