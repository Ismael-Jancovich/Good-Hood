import React from 'react'
import styled from "styled-components";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsShop } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const FooterContainer = styled.footer`
    background-color: #1672cd;
    width: 100%;
    height: 170px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

links   {
    display: flex;
   flex-direction: row;
   align-items: center;
   
    p{
    margin-right: 50px;
    color: white;
    font-size: 25px;
    margin-left: 10px;
  }
}


`

const FooterContat = styled.div`
color: white;
width: 435px;
font-size: 24px;
display: flex;
align-items: center;


ul{
    margin left: 50px;
    display: flex;
}
`


const FooterNetworks = styled.div`
color: white;
font-size: 50px ;
width: 185px;
display: flex;  



ul{
    margin-left: 50px;
}
`


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