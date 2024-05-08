import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

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

                    <div class="moda__imagenes">
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                </section>
            </HomeWelcome>
            <HomeOferts>
                <section class="ofertas">
                    <div>
                        <h2>Prendas en ofertas</h2>
                    </div>

                    <section class="carrusel">
                        <button class="flechas">flechas</button>
                        <section class="carrusel__prendas">
                            <div class="img__carrusel__one">
                                <img src="" alt="" />
                                <div class="botones__compra__oferta">
                                    <button>Ver Mas</button>
                                    <button>
                                        <CartNavbar>
                                            <FaShoppingCart />
                                        </CartNavbar>
                                    </button>
                                </div>
                            </div>
                            <div class="img__carrusel__two">
                                <img src="" alt="" />
                                <div class="botones__compra__oferta">
                                    <button>Ver Mas</button>
                                    <button>
                                        <CartNavbar>
                                            <FaShoppingCart />
                                        </CartNavbar>
                                    </button>
                                </div>
                            </div>
                            <div class="img__carrusel__three">
                                <img src="" alt="" />
                                <div class="botones__compra__oferta">
                                    <button>Ver Mas</button>
                                    <button>
                                        <CartNavbar>
                                            <FaShoppingCart />
                                        </CartNavbar>
                                    </button>
                                </div>
                            </div>
                            <div class="img__carrusel__four">
                                <img src="" alt="" />
                                <div class="botones__compra__oferta">
                                    <button>Ver Mas</button>
                                    <button>
                                        <CartNavbar>
                                            <FaShoppingCart />
                                        </CartNavbar>
                                    </button>
                                </div>
                            </div>
                            <div class="img__carrusel__five">
                                <img src="" alt="" />
                                <div class="botones__compra__oferta">
                                    <button>Ver Mas</button>
                                    <button>
                                        <CartNavbar>
                                            <FaShoppingCart />
                                        </CartNavbar>
                                    </button>
                                </div>
                            </div>
                        </section>
                        <button class="flechas">flechas</button>
                    </section>
                </section>

            </HomeOferts>
            <TarjetsSection>
            <section class="tarjetas">
        <div class="tarjeta__hombre">
            <a href="./vinculos/hombre.html">
                <img src="./fotos/fotos secciones/580946c560db88ea4f4825702f10de8e.jpg" alt="hombre posando"/>
                <p>Hombre</p>
            </a>
        </div>
        <div class="tarjeta__niño/a">
            <a href="./vinculos/niños.html">
                <img src="./fotos/fotos secciones/niñopopsando.jpg" alt="niño posando" />
                <p>Niño/a</p>
            </a>
        </div>
        <div class="tarjeta__mujer">
            <a href="./vinculos/mujer.html">
                <img src="./fotos/fotos secciones/mujer posando.jpg" alt="mujer posando"/>
                <p>Mujer</p>
            </a>
        </div>
    </section>
            </TarjetsSection>
        </HomeCointaner>
    )
}

export default Home