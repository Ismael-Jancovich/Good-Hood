import styled from "styled-components";

export const BodyCointaner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #afc2d9;


  img{
    height: 760px;
    width: 700px;
  }
`;


export const DescripcionProducto = styled.div`
display: flex;
align-items: center;
flex-direction: column;
    background-color: #D9D9D9;
    width: 360px;
    height: 760px;
    margin: 30px 0px 15px 15px;
  

h1{
font-size: 30px;
margin-top: 35px;
};

h2{
  font-size: 25px;
  margin-top: 35px;
};


  p{
    font-size: 20px;
    margin: 20px 20px 0px 0px;
  }
  `;

export const ButtonBuy = styled.div`
button{
  background-color: #32B1E8;
  width: 330px;
  height: 100px;
  border-radius: 80px;
  text-transform: uppercase;
  color: #fff;
  font-size: 30px;
  cursor: pointer;
  border: none;
  margin-top: 35px;
  };
`;

export const Networks = styled.div`
margin-top: 50px;
color: black;
font-size: 60px;
width: 185px;
display: flex;  
`