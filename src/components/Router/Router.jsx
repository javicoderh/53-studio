import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "../Landing/Landing";
import CheckoutPage from "../checkout/Checkout";
import ProductsPage from "../products/Products";
import { ShoppingCartProvider } from "../Context/ShopingCartContext";

const AppRouter = () => {
  return (

<ShoppingCartProvider>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        {/* Add additional routes here as needed */}
      </Routes>
    </Router>
</ShoppingCartProvider>
  );
};

export default AppRouter;
