import styled from "styled-components";

export const HomeCointaner = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background: #afc2d9;
`;


export const HomeWelcome = styled.div`
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

@media (max-width: 900px){
    .moda{
        width: 840px;
        height: 480px;
    }

    .moda .moda__imagenes img{
        width: 285px;
        height: 445px;
    }
  }


`


export const TarjetsSection = styled.div`
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


@media (max-width: 900px){
    .tarjetas div{
        margin-left: 50px;
    }

    .tarjetas img {
        width: 245px;
        height: 370px;
    }

  }



`;