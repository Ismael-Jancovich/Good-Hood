import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./src/components/navbar";
import Footer from "./src/components/footer";
import Home from "./src/pages/home";
import Hombre from "./src/pages/hombre";
import Mujer from "./src/pages/mujer"
import Niño from "./src/pages/niño-a"
import Login from "./src/pages/login"
import Register from "./src/pages/register"
import Cart from "./src/pages/cart";
import ProductDetail from "./src/pages/productDetail";

function App() {
    return (
      <>
        <Navbar/>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/hombre" element={<Hombre />} />
    <Route path="/mujer" element={<Mujer />} />
    <Route path="/niño-a" element={<Niño />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/products/:id_product" element={<ProductDetail />} />

  </Routes>
        <Footer />
      </>
    );
  }
  

  export default App;