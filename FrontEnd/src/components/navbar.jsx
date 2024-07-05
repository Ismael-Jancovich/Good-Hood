import React, { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { NavContainer } from '../styles/navbar'
import { ListContentDesktop } from '../styles/navbar'
import { ListContentMobile } from '../styles/navbar'
import { ButtonMenuMobile } from '../styles/navbar'
import { MenuMobileActive } from '../styles/navbar'
import { PopOver } from '../styles/navbar'
import { MenuProfileActivate } from '../styles/navbar'
import { ListMenuProfile } from '../styles/navbar'


function Navbar() {
  const [active, setActive] = useState(false);
  const [activeOver, setActiveOver] = useState(false);

  const handleClick = () => {
    setActive(!active);
    setActiveOver(!activeOver);
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
              Hombre
            </Link>
          </li>

          <li>
            <Link to={`/mujer`} className="menu">
              Mujer
            </Link>
          </li>

          <li>
            <Link to={`/niño-a`} className="menu">
              Niño/a
            </Link>
          </li>

          <li>
            <Link to={`/cart`} className="menu">
           <FiShoppingCart/>
            </Link>
          </li>

          <PopOver onClick={handleClick}>
              <CgProfile />
          </PopOver>

          <MenuProfileActivate active={active}>
            <ListMenuProfile>
                <li>
                  <Link to="/login" className="menu">
                    Iniciar sesión
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="menu">
                    Registrarse
                  </Link>
                </li>
             </ListMenuProfile>   
          </MenuProfileActivate>      

        </ListContentDesktop>
        <ButtonMenuMobile onClick={handleClick}>
          <RxHamburgerMenu />
        </ButtonMenuMobile>
      </NavContainer>

      <MenuMobileActive active={active}>
        <ListContentMobile>
        <li>
            <Link to={`/hombre`} className="menu">
              Hombre
            </Link>
          </li>

          <li>
            <Link to={`/mujer`} className="menu">
              Mujer
            </Link>
          </li>

          <li>
            <Link to={`/niño-a`} className="menu">
              Niño/a
            </Link>
          </li>

          <li>
            <Link to={`/cart`} className="menu">
              carrito
            </Link>
          </li>
        </ListContentMobile>
      </MenuMobileActive>
    </>
  );
}

export default Navbar