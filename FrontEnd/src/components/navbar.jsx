import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";

const NavContainer = styled.nav`
  background-color: #1672cd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 0px 50px;
  min-height: 66px;
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
        <div>LOGO</div>
        <ListContentDesktop>
          <li>
            <a href="/" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ListContentDesktop>
        <ButtonMenuMobile onClick={handleClick}>
          <RxHamburgerMenu />
        </ButtonMenuMobile>
      </NavContainer>
      <MenuMobileActive active={active}>
        <ListContentMobile>
          <li>
            <a href="/" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ListContentMobile>
      </MenuMobileActive>
    </>
  );
}

  export default Navbar