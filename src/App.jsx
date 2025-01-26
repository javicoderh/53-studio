import React from "react";


import AppRouter from "./components/Router/Router";
import { MercadoPagoProvider } from "./components/Context/PaymentContext";
import { ShoppingCartProvider } from "./components/Context/ShopingCartContext";

const App = () => {
  return (
  <ShoppingCartProvider >
    <MercadoPagoProvider >
      <AppRouter />
    </MercadoPagoProvider>
  </ShoppingCartProvider> 
  );
};

export default App;
