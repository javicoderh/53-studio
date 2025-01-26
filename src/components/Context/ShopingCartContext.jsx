import React, { createContext, useContext, useReducer, useEffect } from "react";

const ShoppingCartContext = createContext();

export const useShoppingCart = () => useContext(ShoppingCartContext);

// Reducer for cart actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      }
      return [...state, action.payload];

    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload);

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
};

export const ShoppingCartProvider = ({ children }) => {
  // Initialize cart state from localStorage
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    const storedCart = localStorage.getItem("shoppingCart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Update localStorage whenever the cart changes
  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
  }, [cart]);

  const addItemToCart = (item) => dispatch({ type: "ADD_ITEM", payload: item });
  const removeItemFromCart = (id) => dispatch({ type: "REMOVE_ITEM", payload: id });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  // Calculate total
  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <ShoppingCartContext.Provider value={{ cart, cartTotal, addItemToCart, removeItemFromCart, clearCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};