import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Cards from "./components/home/cardpage";
import Navbar from "./routes/navbar/navbar.component.jsx";
import Authentication from "./routes/authentication/authentication-component";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Routes>
          <Route to="/" element={<Cards />}></Route>
          <Route to="/authentication" element={<Authentication />}></Route>
        </Routes>
      </div>
      <Cards />
    </div>
  );
}

export default App;
