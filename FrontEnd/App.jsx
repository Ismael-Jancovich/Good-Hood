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
  </Routes>
        <Footer />
      </>
    );
  }
  

  export default App;