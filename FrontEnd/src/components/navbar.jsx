import React, { useState } from 'react';
import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NavContainer = styled.nav`
  background-color: #1672cd;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 0px 50px;
  min-height: 66px;

  img{
    border-radius: 50%;
    width: 200px;
  }

  @media (max-width: 900px) {
    img{
      border-radius: 50%;
      width: 120px;
    }
  }
`;


const ListContentDesktop = styled.ul`
  display: none;
  list-style: none;
  margin-right: 20px;
  margin-left: 20px;

  @media (min-width: 768px) {
    display: flex;
  }

  li {
    line-height: 80px;
    margin: 0px 30px 0px 0px;

    a {
      font-size: 25px;
      color: white;
      text-transform: uppercase;
      text-decoration: none;
      &.active,
      &:hover {
        background-color: #000090;
        transition: 0.5s;
      }
    }


    @media (max-width: 900px) {
      li {
        line-height: 40px;
        margin: 0px 15px 0px 0px;
      }
a{
  font-size: 15px;
}
        }
    
  }
`;

const ListContentMobile = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-right: 20px;
  margin-left: 20px;

  @media (min-width: 768px) {
    display: none;
  }

  li {
    line-height: 80px;
    margin: 0px 30px 0px 0px;

    a {
      font-size: 25px;
      color: white;
      text-transform: uppercase;
      text-decoration: none;
      &.active,
      &:hover {
        background-color: #000090;
        transition: 0.5s;
      }
    }
  }
`;

const ButtonMenuMobile = styled.div`
  display: block;
  background-color: #1672cd;
  padding: 0.5rem;

  svg {
    font-size: 30px;
    color: white;
  }

  &:hover {
    background-color: white;
    border-radius: 10px;

    svg {
      color: #1672cd;
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const MenuMobileActive = styled.div`
  display: ${({ active }) => (active ? "block" : "none")};
  width: 100%;
  background-color: #1672cd;
  z-index: 1000;
`;

function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
      <NavContainer>
        <div>
          <Link to={`/`} className="menu">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE8sTNg_Wuf6Ze67SqR4m4kzy5erMo5S89LMBwQBDEiA&s" alt="logo de la pagina" />
          </Link>
        </div>
        <ListContentDesktop>

          <li>
            <Link to={`/hombre`} className="menu">
              <a href="/" className="active">
                Hombre
              </a>
            </Link>
          </li>

          <Link to={`/mujer`} className="menu">
            <li>
              <a href="/">Mujer</a>
            </li>
          </Link>

          <Link to={`/niño-a`} className="menu">
            <li>
              <a href="/">Niño/a</a>
            </li>
          </Link>

          <li>
            <Link to={`/cart`} className="menu">
              <a href="/" className="active">
                carrito
              </a>
            </Link>
          </li>

          <Link to={`/login`} className="menu">
            <li>
              <a href="/">Iniciar sesion</a>
            </li>
          </Link>

          <Link to={`/register`} className="menu">
            <li>
              <a href="/">Registrarse</a>
            </li>
          </Link>

        </ListContentDesktop>
        <ButtonMenuMobile onClick={handleClick}>
          <RxHamburgerMenu />
        </ButtonMenuMobile>
      </NavContainer>
      <MenuMobileActive active={active}>
        <ListContentMobile>
          <li>
            <a href="/" className="active">
              Hombre
            </a>
          </li>
          <li>
            <a href="/" className="active">
              Mujer
            </a>
          </li>
          <li>
            <a href="/about">
              Niño/a
            </a>
          </li>
          <li>
            <a href="/" className="active">
              Iniciar Sesion
            </a>
          </li>
          <li>
            <a href="/" className="active">
              Registrarse
            </a>
          </li>
          <li>
            <a href="/" className="active">
              Carrito
            </a>
          </li>
        </ListContentMobile>
      </MenuMobileActive>
    </>
  );
}

export default Navbar