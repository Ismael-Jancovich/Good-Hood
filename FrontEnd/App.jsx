import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "./src/components/navbar";


function App() {
    return (
      <>
        <Helmet>
          <link rel="stylesheet" href="/src/styles/reset.css" />
        </Helmet>
        <Navbar />
      </>
    );
  }
  

  export default App;