import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { BodyCointaner, LoginCoitaner, Networks} from '../styles/login'


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
