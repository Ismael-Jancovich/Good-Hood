import styled from "styled-components";

export const BodyCointaner = styled.div`
  display: flex;
  align-items: center;
  background: #afc2d9;
`;

export const  ContentProducts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 100px;
  margin-left: 30px;

  img {
    width: 250px;
    height: 250px;
    border-radius: 45px 45px 0px 0px;
    border-bottom: 1px solid black;
  }
`;

export const  Tarjeta = styled.div`
  width: 250px;
  background-color: white;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 15%;
  border: 2px solid black;

h2{
  font-size: 20px;
}


p{
  font-size: 20px;
}

  div{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .buttons{
    display: flex;
    flex-direction: row;

    a{
      text-decoration: none;
      color: black;
      margin-right: 15px;
    }

    button{
      margin-top: 10px;
      margin-bottom: 10px;
      width: 70px;
    }
  }


`

