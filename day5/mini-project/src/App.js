import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Detail from "./Detail";
import Cart from "./Cart";
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
      </Routes>
    </Router>
  );
}

export default App;
