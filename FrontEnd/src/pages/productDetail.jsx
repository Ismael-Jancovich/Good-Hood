import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useCart from "../../cartStore";
import { FaShoppingCart } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const BodyCointaner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #afc2d9;


  img{
    height: 760px;
    width: 700px;
  }
`;


const DescripcionProducto = styled.div`;
display: flex;
align-items: center;
flex-direction: column;
    background-color: #D9D9D9;
    width: 360px;
    height: 760px;
    margin: 30px 0px 15px 15px;
  };

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
    margin: 20px; 20px; 0px 0px;
  }
  `;

const ButtonBuy = styled.div`
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

const Networks = styled.div`
margin-top: 50px;
color: black;
font-size: 60px;
width: 185px;
display: flex;  
`

const ProductDetail = () => {
  const { add } = useCart();
  const { id_producto } = useParams();
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/products/${id_producto}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id_producto]);
  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(products);
  return (
    <BodyCointaner>
      <img src={products.data.image} alt={`Perfil de ${products.data.modelo}`} />
      <DescripcionProducto>
        <h1>ProductDetail: {id_producto}</h1>
        <h2>{products.data.nombre}</h2>
        <p>{products.data.precio}</p>
        <p>{products.data.descripcion}</p>
        <ButtonBuy>
          <button onClick={() => add(products)}>COMPRAR</button>
        </ButtonBuy>
        <Networks>

          < FaInstagram />

          < FaFacebookSquare />

          < FaWhatsapp />


        </Networks>
      </DescripcionProducto>

    </BodyCointaner>
  );
};

export default ProductDetail;