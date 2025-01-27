import React from "react";
import AppRouter from "./components/Router/Router";
import { MercadoPagoProvider } from "./components/Context/PaymentContext";
import { ShoppingCartProvider } from "./components/Context/ShopingCartContext";
import { Auth0Provider } from "@auth0/auth0-react";

const App = () => {
  return (
<Auth0Provider
domain="dev-epk0vphz3k7odhlz.us.auth0.com"
clientId="Q9AsJxrTR2W6gbHz1pILLHrxLaRlt4b2"
authorizationParams={{
  redirect_uri: "https://53-studio.vercel.app",
  prompt: "login",
}}
>
   <ShoppingCartProvider >    
    <MercadoPagoProvider >
      <AppRouter />
    </MercadoPagoProvider>    
  </ShoppingCartProvider> 
</Auth0Provider>
  );
};

export default App;
