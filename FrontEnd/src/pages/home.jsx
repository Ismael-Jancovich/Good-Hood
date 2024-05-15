import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const HomeCointaner = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background: #afc2d9;
`;

const HomeWelcome = styled.div`
.moda{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    width: 1300px;
    height: 600px;
    margin: 50px 0px 0px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-image: linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
}


.moda .moda__titulo{
    text-transform: uppercase;
    font-size: 25px;
    color: #f9f9f9;
}

.moda .moda__imagenes img{
    height: 590px
}
`

const HomeOferts = styled.div`
.ofertas{
    margin-top: 50px;
}

.ofertas h2{
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
}

.carrusel{

    display: flex; 
    justify-content: space-evenly;
    margin-top: 50px;
    margin-bottom: 50px;
    background-color: #6ea8e2;
}



.botones__compra__oferta button{
    margin: 5px 10px 0px 0px;
    width: 80px;
}

.botones__compra__oferta button ion-icon{
    font-size: 24px;
}

.carrusel img {
    height: 160px;
}


.carrusel_botones{
    margin-top: 5px;
    display: flex;
    justify-content: center;
}

.carrusel_botones button{
    margin-right: 10px;
}

.carrusel__prendas{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.carrusel__prendas div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}
`;

const CartNavbar = styled.div`
display: flex;
align-items: center;
font-size: 35px;
`
const TarjetsSection = styled.div`
.tarjetas{
    display: flex;
    justify-content: space-evenly;
    margin-top: 50px;
    margin-bottom: 25px;
}

.tarjetas div{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background: rgb(65, 105, 216);
    border-radius: 70px;
    margin-left: 100px;
}

.tarjetas div a{
    font-size: 20px;
    color: white;
    text-decoration: none;
}

.tarjetas img {
    height: 500px;
    width: 333px;
    border-radius: 40px;
}

.tarjetas p{
    display: flex;
    justify-content: center;
}
`;

const Home = () => {
    return (
        <HomeCointaner>
            <HomeWelcome>
                <section className="moda">
                    <div className="moda__titulo">
                        <h2>vestite a la  moda</h2>
                    </div>

                    <div className="moda__imagenes">
                        <img src="https://i.pinimg.com/564x/a8/9a/cc/a89acc2e5f207007edb35d0a867f3171.jpg" alt="" />
                        <img src="https://i.pinimg.com/564x/2d/a4/b7/2da4b7590c72c4195c62405f7cffd5c2.jpg" alt="" />
                    </div>
                </section>
            </HomeWelcome>
            <HomeOferts>
                <section className="ofertas">
                    <div>
                        <h2>Prendas</h2>
                    </div>

                    <section className="carrusel">
                        <button className="flechas">flechas</button>
                        <section className="carrusel__prendas">
                            <div className="img__carrusel__one">
                                <img src="" alt="" />
                                <div className="botones__compra__oferta">
                                    <button>Ver Mas</button>
                                    <button>
                                        <CartNavbar>
                                            <FaShoppingCart />
                                        </CartNavbar>
                                    </button>
                                </div>
                            </div>
                            <div className="img__carrusel__two">
                                <img src="" alt="" />
                                <div className="botones__compra__oferta">
                                    <button>Ver Mas</button>
                                    <button>
                                        <CartNavbar>
                                            <FaShoppingCart />
                                        </CartNavbar>
                                    </button>
                                </div>
                            </div>
                            <div className="img__carrusel__three">
                                <img src="" alt="" />
                                <div className="botones__compra__oferta">
                                    <button>Ver Mas</button>
                                    <button>
                                        <CartNavbar>
                                            <FaShoppingCart />
                                        </CartNavbar>
                                    </button>
                                </div>
                            </div>
                            <div className="img__carrusel__four">
                                <img src="" alt="" />
                                <div className="botones__compra__oferta">
                                    <button>Ver Mas</button>
                                    <button>
                                        <CartNavbar>
                                            <FaShoppingCart />
                                        </CartNavbar>
                                    </button>
                                </div>
                            </div>
                            <div className="img__carrusel__five">
                                <img src="" alt="" />
                                <div className="botones__compra__oferta">
                                    <button>Ver Mas</button>
                                    <button>
                                        <CartNavbar>
                                            <FaShoppingCart />
                                        </CartNavbar>
                                    </button>
                                </div>
                            </div>
                        </section>
                        <button className="flechas">flechas</button>
                    </section>
                </section>

            </HomeOferts>
            <TarjetsSection>
                <section className="tarjetas">
                    <div className="tarjeta__hombre">
                <Link to={`/hombre`} className="menu">
                        <a href="./vinculos/hombre.html">
                            <img src="https://i.pinimg.com/736x/08/2b/f6/082bf69e0b39fbb68cfa0f8b6df06931.jpg" alt="hombre posando" />
                            <p>Hombre</p>
                        </a>
                        </Link>
                    </div>
                    <div className="tarjeta__niño/a">
                    <Link to={`/niño-a`} className="menu">
                        <a href="./vinculos/niños.html">
                            <img src="https://i.pinimg.com/736x/cd/f0/91/cdf091c5731affb37e58f34d43819f8e.jpg" alt="mujer posando" />
                            <p>Niño/a</p>
                        </a>
                    </Link>
                    </div>
                    <div className="tarjeta__mujer">
                    <Link to={`/mujer`} className="menu">
                        <a href="./vinculos/mujer.html">
                            <img src="https://www.shutterstock.com/image-photo/fashionable-confident-woman-wearing-elegant-600nw-2255732941.jpg" alt="niño posando" />
                            <p>Mujer</p>
                        </a>
                    </Link>
                    </div>
                </section>
            </TarjetsSection>
        </HomeCointaner>
    )
}

export default Home