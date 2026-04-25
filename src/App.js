import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Product from "./Components/Product";
import Item from "./Components/Item";
import Suscribe from "./Components/Suscribe";
import Testomonials from "./Components/Testomonials";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top from './pages/Top.jsx'
import Mans from './pages/Mans.jsx'
import Shop from './pages/Shop.jsx'
import Kid from './pages/Kid.jsx'



function App() {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Navbar handleOrderPopup={handleOrderPopup} />
<Routes>

  <Route
    path="/"
    element={
      <>
        <Main handleOrderPopup={handleOrderPopup} />
        <Product />
        <Item handleOrderPopup={handleOrderPopup} />
        <Banner />
        <Suscribe />
        <Testomonials />
      </>
    }
  />

  <Route path="/top" element={<Top />} />
  <Route path="/Kid" element={<Kid />} />
  <Route path="/Mans" element={<Mans />} />
  <Route path="/Shop" element={<Shop />} />

</Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;