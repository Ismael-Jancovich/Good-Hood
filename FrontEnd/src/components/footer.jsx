import React from 'react'
import { BsFillTelephoneFill, BsShop } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare, FaWhatsapp } from "react-icons/fa";
import {FooterContainer, FooterContat, FooterNetworks} from '../styles/footer'



function Footer() {
    return (
        <FooterContainer>
            <FooterContat>
                <ul>
                    < BsFillTelephoneFill />
                    <p>+54 9 351 666 777</p>
                </ul>
                <ul>
                    < BsShop />
                    <p>Santiago Derqui 52</p>
                </ul>
            </FooterContat>

            <FooterNetworks>
                <ul>
                    < FaInstagram />
                </ul>
                <ul>
                    < FaFacebookSquare />
                </ul>
                <ul>
                    < FaWhatsapp />
                </ul>

            </FooterNetworks>

        </FooterContainer>
    )
}

export default Footer