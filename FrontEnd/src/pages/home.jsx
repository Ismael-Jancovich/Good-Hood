import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { HomeCointaner, HomeWelcome, TarjetsSection} from '../styles/home'


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