import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import CompanyProfile from "./pages/CompanyProfile";
import Organization from "./pages/Organization";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<CompanyProfile />} />
      <Route path="/organization" element={<Organization />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);

export default App;
