import React from "react";
import { useShoppingCart } from "../Context/ShopingCartContext";
import { useMercadoPago } from "../Context/PaymentContext";

const CheckoutPage = () => {
    const { cart, cartTotal, removeItemFromCart, clearCart } = useShoppingCart();
  
    return (
      <div>
        <h1>Checkout</h1>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>
                Price: ${item.price} x {item.quantity} = ${item.price * item.quantity}
              </p>
              <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
        <h2>Total: ${cartTotal}</h2>
        <button onClick={clearCart}>Clear Cart</button>
      </div>
    );
  };
  
export default CheckoutPage;


