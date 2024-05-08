import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";


const BodyCointaner = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background: #afc2d9;
`;

const ContentProducts = styled.div`
`

const CartNavbar = styled.div`
display: flex;
align-items: center;
font-size: 35px;
`

const Hombre = () => {
    return (
        <BodyCointaner>
            <div class="content">
                <div class="parent">

                    <div class="div2">
                        <a href="../productos/short.negro.html">
                            <img src="../fotos/prendas oferta/short nike negro.jpg"
                            alt=""/>

                            </a>
                        <div class="producto_informacion">
                            <p>Short Nike</p>
                            <p>$5000</p>
                        </div>
                        <div class="botones__compra__oferta">
                            <button>Ver Mas</button>
                            <button>
                                <CartNavbar>
                                    <FaShoppingCart />
                                </CartNavbar>
                            </button>
                        </div>
                    </div>

                    <div class="div3">
                        <a href="../productos/camperonafa.html">
                            <img src="../fotos/fotos ecomerce/camperas/campera adidas afa.png" alt=""/> </a>
                        <div class="producto_informacion">
                            <p>Camperon AFA</p>
                            <p>$200000</p>
                        </div>
                        <div class="botones__compra__oferta">
                            <button>Ver Mas</button>

                            <button>
                                <CartNavbar>
                                    <FaShoppingCart />
                                </CartNavbar>
                            </button>
                        </div>
                    </div>

                    <div class="div4">
                        <a href="../productos/newbalance550.html">
                            <img src="../fotos/fotos ecomerce/calzado/New Balance 550 verdes.jpg" alt=""/> </a>
                        <div class="producto_informacion">
                            <p>New Balance 550</p>
                            <p>$150000</p>
                        </div>
                        <div class="botones__compra__oferta">
                            <button>Ver Mas</button>

                            <button>
                                <CartNavbar>
                                    <FaShoppingCart />
                                </CartNavbar>
                            </button>
                        </div>
                    </div>

                    <div class="div5">
                        <a href="../productos/forumlow.html">
                            <img src="../fotos/fotos ecomerce/calzado/ZAPATILLAS FORUM LOW 1.png" alt=""/> </a>
                        <div class="producto_informacion">
                            <p>Forum Low</p>
                            <p>$120000</p>
                        </div>
                        <div class="botones__compra__oferta">
                            <button>Ver Mas</button>

                            <button>
                                <CartNavbar>
                                    <FaShoppingCart />
                                </CartNavbar>
                            </button>
                        </div>
                    </div>


                    <div class="div7">
                        <a href="../productos/adiddasbuzo.html">
                            <img src="../fotos/fotos ecomerce/buzos/Buzo negro adidas.png" alt=""/> </a>
                        <div class="producto_informacion">
                            <p>Buzo Adidas Originals</p>
                            <p>$50000</p>
                        </div>
                        <div class="botones__compra__oferta">
                            <button>Ver Mas</button>

                            <button>
                                <CartNavbar>
                                    <FaShoppingCart />
                                </CartNavbar>
                            </button>
                        </div>
                    </div>

                    <div class="div8">
                        <a href="../productos/remeralacoste.html">
                            <img src="../fotos/fotos ecomerce/remeras/Remera negra lacoste.png" alt=""/> </a>
                        <div class="producto_informacion">
                            <p>Remera Lacoste</p>
                            <p>$8300</p>
                        </div>
                        <div class="botones__compra__oferta">
                            <button>Ver Mas</button>

                            <button>
                                <CartNavbar>
                                    <FaShoppingCart />
                                </CartNavbar>
                            </button>
                        </div>
                    </div>

                    <div class="div9">
                        <a href="../productos/hoodie.html">
                            <img src="../fotos/fotos ecomerce/buzos/buzo hoodie azul.png" alt=""/> </a>
                        <div class="producto_informacion">
                            <p>Undefined hoodie</p>
                            <p>$67000</p>
                        </div>
                        <div class="botones__compra__oferta">
                            <button>Ver Mas</button>

                            <button>
                                <CartNavbar>
                                    <FaShoppingCart />
                                </CartNavbar>
                            </button>
                        </div>
                    </div>

                    <div class="div10">
                        <a href="../productos/camisaadiddas.html">
                            <img src="../fotos/fotos ecomerce/camisas/camisa blanca1.png" alt=""/> </a>
                        <div class="producto_informacion">
                            <p>Camisa Adidas Originals</p>
                            <p>$72000</p>
                        </div>
                        <div class="botones__compra__oferta">
                            <button>Ver Mas</button>

                            <button>
                                <CartNavbar>
                                    <FaShoppingCart />
                                </CartNavbar>
                            </button>
                        </div>
                    </div>

                    <div class="div11">
                        <a href="../productos/hunder.html">
                            <img src="../fotos/fotos ecomerce/bermudas/bermuda gris hunder.png" alt=""/> </a>
                        <div class="producto_informacion">
                            <p>Hunder Bermuda</p>
                            <p>$12600</p>
                        </div>
                        <div class="botones__compra__oferta">
                            <button>Ver Mas</button>

                            <button>
                                <CartNavbar>
                                    <FaShoppingCart />
                                </CartNavbar>
                            </button>
                        </div>
                    </div>

                    <div class="div12">
                        <a href="../productos/chomba.html">
                            <img src="../fotos/fotos ecomerce/remeras/chomba lacoste azul blanca1.png" alt=""/> </a>
                        <div class="producto_informacion">
                            <p>Chomba Lacoste</p>
                            <p>$130000</p>
                        </div>
                        <div class="botones__compra__oferta">
                            <button>Ver Mas</button>

                            <button>
                                <CartNavbar>
                                    <FaShoppingCart />
                                </CartNavbar>
                            </button>
                        </div>
                    </div>

                    <div class="div13">
                        <a href="../productos/bermudanegra.html">
                            <img src="../fotos/fotos ecomerce/bermudas/Bermuda negra Nube.png" alt=""/> </a>
                        <div class="producto_informacion">
                            <p>Bermuda negra</p>
                            <p>$30000</p>
                        </div>
                        <div class="botones__compra__oferta">
                            <button>Ver Mas</button>

                            <button>
                                <CartNavbar>
                                    <FaShoppingCart />
                                </CartNavbar>
                            </button>
                        </div>
                    </div>

                    <div class="div14">
                        <a href="../productos/short.negro.html">
                            <img src="../fotos/prendas oferta/short nike negro.jpg" alt=""/>
                                 </a>
                        <div class="producto_informacion">
                            <p>Short Nike</p>
                            <p>$5000</p>
                        </div>
                        <div class="botones__compra__oferta">

                            <button>Ver Mas</button>

                            <button>
                                <CartNavbar>
                                    <FaShoppingCart />
                                </CartNavbar>
                            </button>
                        </div>
                    </div>
                </div>
                </div>
        </BodyCointaner>
    )
}

export default Hombre