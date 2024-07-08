import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import FilterCategory from "../components/filtercategory";
import parsePrice from "../fuctions/parsePrice";
import useCart from "../../cartStore";
import {BodyCointaner, ContentProducts, Tarjeta} from '../styles/hombre'



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
          <Tarjeta key={p.id_producto}>
            <div className="tarjeta" key={p.id_producto}>
              <img className="img" src={p.image} alt={`Perfil de ${p.modelo}`} />
              <h2>{p.nombre}</h2>
              <p className="precio">$ {parsePrice(p.precio)}</p>
              <div className="buttons">
                <Link to={`/products/${p.id_producto}`}>Ver mas</Link>
                <button onClick={() => add(p)}><FaShoppingCart /></button>
              </div>
            </div>
          </Tarjeta>
        ))}
      </ContentProducts>
    </BodyCointaner>
  );
}

export default Hombre;
