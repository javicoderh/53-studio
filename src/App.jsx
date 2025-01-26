import React from "react";


import AppRouter from "./components/Router/Router";
import { MercadoPagoProvider } from "./components/Context/PaymentContext";
import { ShoppingCartProvider } from "./components/Context/ShopingCartContext";
import { Auth0Provider } from "@auth0/auth0-react";

const App = () => {
  return (
<Auth0Provider>
   <ShoppingCartProvider >    
    <MercadoPagoProvider >
      <AppRouter />
    </MercadoPagoProvider>    
  </ShoppingCartProvider> 
</Auth0Provider>
  );
};

export default App;
