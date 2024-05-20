import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import FilterCategory from "../components/filtercategory";
import parsePrice from "../fuctions/parsePrice";
import useCart from "../../cartStore";

const BodyCointaner = styled.div`
  display: flex;
  align-items: center;
  background: #afc2d9;
`;

const ContentProducts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 100px;
  margin-left: 30px;

  img {
    width: 250px;
    height: 250px;
  }
`;

const CartNavbar = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  height: 15px;
`;

const Hombre = () => {
  const { add } = useCart();
  const [products, setProduct] = useState([]);

  async function initialData() {
    await fetch('http://localhost:3000/products?limit=12&gender=Hombre')
      .then(res => res.json())
      .then(res => setProduct(res.data))
      .catch(res => console.log(res));
  }

  useEffect(() => {
    initialData();
  }, []);

  return (
    <BodyCointaner>
      <FilterCategory />
      <ContentProducts>
        {products.map((p) => (
          <div className="tarjeta box-1" key={p.id}>
            <img className="img" src={p.image} alt={`Perfil de ${p.modelo}`} />
            <h3>{p.nombre}</h3>
            <p className="precio">$ {parsePrice(p.precio)}</p>
            <Link to={`/products/${p.id}`}>Details</Link>
            <button onClick={() => add(p)}>Add to cart</button>
          </div>
        ))}
      </ContentProducts>
    </BodyCointaner>
  );
}

export default Hombre;
