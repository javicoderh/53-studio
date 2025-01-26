import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "../Landing/Landing";
import CheckoutPage from "../checkout/Checkout";
import ProductsPage from "../products/Products";
import { useAuth0 } from "@auth0/auth0-react";
import { ShoppingCartProvider } from "../Context/ShopingCartContext";
import LoginButton from "../usersManagement/Loginbutton";
  
const AppRouter = () => {
    const { isAuthenticated } = useAuth0();
  
    console.log("Is authenticated:", isAuthenticated);
  
    return (
      <ShoppingCartProvider>
        <Router>
          {isAuthenticated ? (
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/products" element={<ProductsPage />} />
              {/* Add additional routes here as needed */}
            </Routes>
          ) : (
            <LoginButton />
          )}
        </Router>
      </ShoppingCartProvider>
    );
  };
  
  export default AppRouter;
