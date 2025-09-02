import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./Landing_Page/Home/HomePage";
import SignupPage from "./Landing_Page/Signup/SignupPage";
import AboutPage from "./Landing_Page/About/AboutPage";
import ProductsPage from "./Landing_Page/Product/ProductPage"; 
import PricingPage from "./Landing_Page/Pricing/PricingPage"; 
import SupportPage from "./Landing_Page/Support/SupportPage";
import Navbar from "./Landing_Page/Navbar";
import Footer from "./Landing_Page/Footer";
import Login from "./Landing_Page/Signup/Login";
import Signup from "./Landing_Page/Signup/Signup";
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      <Route path="/signup/*" element={<SignupPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductsPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
