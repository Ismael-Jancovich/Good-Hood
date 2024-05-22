import React, { useState } from "react";
import useCart from "../../cartStore";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import FilterCategory from "../components/filtercategory";
import parsePrice from "../fuctions/parsePrice";



const BodyCointaner = styled.div`
  display: flex;
  background: #afc2d9;
  align-items: center;
  justify-content: center;
`;

const ContentProducts = styled.div`
  img {
    width: 250px;
    height: 250px;
    border: 1px solid black;
  }
`;

const Tarjeta = styled.div`
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







const Cart = () => {
  const { cart, remove, decreaseOne } = useCart();
  const [formCustomer, setFormCustomer] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form", formCustomer);
    await fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customer: formCustomer,
        products: cart.map((product) => ({
          id_producto: product.id_producto,
          cantidad: product.cantidad,
        })),
      }),
    });
  };

  return (
    <div>
      <BodyCointaner>
        <ContentProducts>
          <Tarjeta>
            {cart.map((product) => (
              <div key={product.id_producto} className="product">
                <img src={product.image} alt="" />
                <div className="informacion">
                  <h2>{product.nombre} </h2>
                  <p>${parsePrice(product.precio)} </p>
                  <p>{product.descripcion}</p>
                </div>
                <div className="buttons">
                  <button onClick={() => remove(product.id_producto)}>Eliminar</button>
                  <button onClick={() => decreaseOne(product.id_producto)}>{product.quantity}</button>
                </div>
              </div>
            ))}
          </Tarjeta>
        </ContentProducts>
      </BodyCointaner>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={formCustomer.name}
          onChange={(e) =>
            setFormCustomer({ ...formCustomer, name: e.target.value })
          }
        />
        <input
          type="email"
          placeholder="Email"
          value={formCustomer.email}
          onChange={(e) =>
            setFormCustomer({ ...formCustomer, email: e.target.value })
          }
        />
        <input
          type="tel"
          placeholder="Phone"
          value={formCustomer.phone}
          onChange={(e) =>
            setFormCustomer({ ...formCustomer, phone: e.target.value })
          }
        />
        <button>Buy</button>
      </form>
    </div>
  );
};

export default Cart;
