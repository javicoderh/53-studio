import React, { createContext, useContext } from "react";
import { useShoppingCart } from "./ShopingCartContext";


const MercadoPagoContext = createContext();

export const useMercadoPago = () => useContext(MercadoPagoContext);

export const MercadoPagoProvider = ({ children }) => {
  const { cartTotal } = useShoppingCart(); // Obtenemos el total del carrito

  const initializePayment = async () => {
    try {
      const preferenceData = {
        items: [
          {
            title: "Cart Total",
            quantity: 1,
            currency_id: "USD",
            unit_price: cartTotal, // Aquí usamos el total del carrito
          },
        ],
      };

      const response = await fetch("https://api.mercadopago.com/checkout/preferences", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer YOUR_ACCESS_TOKEN`,
        },
        body: JSON.stringify(preferenceData),
      });

      const { id: preferenceId } = await response.json();

      const script = document.createElement("script");
      script.src = "https://sdk.mercadopago.com/js/v2";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        const mp = new window.MercadoPago("YOUR_PUBLIC_KEY", { locale: "en-US" });
        mp.checkout({ preference: { id: preferenceId } }).open();
      };
    } catch (error) {
      console.error("Error initializing payment:", error);
    }
  };

  return (
    <MercadoPagoContext.Provider value={{ initializePayment }}>
      {children}
    </MercadoPagoContext.Provider>
  );
};
