import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "../Landing/Landing.jsx";
import CheckoutPage from "../checkout/Checkout.jsx";
import ProductsPage from "../products/Products.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import { ShoppingCartProvider } from "../Context/ShopingCartContext";
import LoginButton from "../usersManagement/Loginbutton";
import Profile from "../usersManagement/userProfile.jsx";
import '../../index.css'


  
const AppRouter = () => {
    const { isAuthenticated } = useAuth0();
  
    console.log("Is authenticated:", isAuthenticated);
  
    return (
      <ShoppingCartProvider>
        <Router>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>          
        </Router>
      </ShoppingCartProvider>
    );
  };
  
  export default AppRouter;
