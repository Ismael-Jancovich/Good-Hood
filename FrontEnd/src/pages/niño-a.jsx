import React, { useState } from 'react';
import styled from "styled-components";
import FilterCategory from "../components/filtercategory";

const BodyCointaner = styled.div`
display: flex;
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
const Niño = () => {
  return (
    <BodyCointaner>
    <FilterCategory/>
  <div>Niño</div>
  </BodyCointaner>
  )
}

export default Niño