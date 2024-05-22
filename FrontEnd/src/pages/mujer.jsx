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
    border-radius: 45px 45px 0px 0px;
    border-bottom: 1px solid black;
  }
`;

const Tarjeta = styled.div`
  width: 250px;
  background-color: white;
  margin-top: 30px;
  margin bottom: 30px;
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



const Mujer = () => {
  const { add } = useCart();
  const [products, setProduct] = useState([]);

  async function initialData() {
    await fetch('http://localhost:3000/products?limit=12&gender=Mujer')
      .then(res => res.json())
      .then(res => setProduct(res.data))
      .catch(res => console.log(res))
  }
  useEffect(() => {
    initialData()
  }, [])
  return (
    <BodyCointaner>
      <FilterCategory />
      <ContentProducts>
        {products.map((p) => (
          <Tarjeta>
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

export default Mujer