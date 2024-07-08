import styled from "styled-components";

export const BodyCointaner = styled.div`
  display: flex;
  background: #afc2d9;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .button__buy{
    width: 430px;
    height: 65px;
    margin-bottom: 30px;
  }
  
`;

export const ContentProducts = styled.div`
  img {
    width: 250px;
    height: 250px;
    border: 1px solid black;
  }
`;

export const Tarjeta = styled.div`
  display: flex;
  flex-direction: column;  
  margin-top: 30px;
  margin-bottom: 30px;

  h2 {
    font-size: 20px;
    margin: 0px 25px 0px 0px;
  }

  p {
    font-size: 20px;
    margin: 0px 30px 0px 0px;
  }

  .product {
    display: flex;
    align-items: center;
    justify-content: space-between; 
    flex-direction: row;  
    margin-bottom: 20px;  
    padding: 10px;
    border: 1px solid #ccc;
    background: #fff;
    border-radius: 5px;
  }

  img {
    width: 250px;
    height: 250px;
    border: 1px solid black;
  }

  .informacion {
    display: flex;
    flex-direction: row;
    width: 560px;
    align-items: center;
    margin: 35px
  }

  .buttons {
    display: flex;
    flex-direction: column;  /* Botones en columna */
  }

  .buttons button {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 70px;
  }

  .buttons a {
    text-decoration: none;
    color: black;
    margin-right: 15px;
  }
`;
