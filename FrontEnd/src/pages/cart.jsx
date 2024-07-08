import React, { useState } from "react";
import useCart from "../../cartStore";
import parsePrice from "../fuctions/parsePrice";
import {BodyCointaner,  ContentProducts, Tarjeta} from '../styles/cart'



const Cart = () => {
  const { cart, remove, decreaseOne } = useCart();


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
        <button className="button__buy">Buy</button>
      </BodyCointaner>
    </div>
  );
};

export default Cart;
