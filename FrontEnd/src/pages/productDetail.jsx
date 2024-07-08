import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useCart from "../../cartStore";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { BodyCointaner, DescripcionProducto, ButtonBuy, Networks } from "../styles/productDetail";


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