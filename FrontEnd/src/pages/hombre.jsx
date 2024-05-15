import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import FilterCategory from "../components/filtercategory";

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

img{
  width: 250px;
  height: 250px;
}

`

const CartNavbar = styled.div`
display: flex;
align-items: center;
font-size: 20px;
height: 15px;
`



const Hombre = () => {
  const [products, setProduct] = useState([])
  async function initialData() {
    await fetch("http://localhost:3000/products/")
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
          <div className="tarjeta box-1" key={p.id}>
            <img className="img" src={p.image} alt={`Perfil de ${p.modelo}`} />
            <h3>{p.nombre}</h3>
            <p className="precio">{p.precio}</p>
            <div className="botones">
              <button>Ver</button>
              <button>
                <CartNavbar>
                  <FaShoppingCart />
                </CartNavbar>
              </button>
            </div>
          </div>
        ))}
      </ContentProducts>
    </BodyCointaner>
  )

}

export default Hombre



/*const Home = () => {
  const [product, setProduct] = useState()
  async function initialData () {
    await fetch("http://localhost:3000/products/") 
    .then(res => res.json())
    .then(res => setProduct(res.data))
    .catch(res => console.log(res)) 
}
 useEffect(() => {
initialData()
  }, [] )
  return (
    <div>
      {product.map((p) => {
return (
  <div class="tarjeta box-1">
  <img class="img"
  src={p.img}
  alt="Perfil 1"
  />
  <h3>{p.nombre}</h3>
  <p class="precio">
    {p.precio}</p>
  <div class="botones">
      <button>Ver</button>
  </div>
</div> 
)
      })}
    </div>
  )
}*/
