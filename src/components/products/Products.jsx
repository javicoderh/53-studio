import React from "react";
import { useEffect } from "react";
import { useShoppingCart } from "../Context/ShopingCartContext";

const ProductsPage = () => {
    const { cart, addItemToCart } = useShoppingCart();
  
    const products = [
      { id: 1, title: "Sample Pack 1", price: 25.0 },
      { id: 2, title: "Sample Pack 2", price: 30.0 },
      { id: 3, title: "Sample Pack 3", price: 35.0 },
    ];
  
    const handleAddToCart = (product) => {
      addItemToCart({ ...product, quantity: 1 });
    };
  
    // Log the cart whenever it changes
    useEffect(() => {
      console.log("Cart updated:", cart);
    }, [cart]);
  
    return (
      <div>
        <h1>Products</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ProductsPage;
  
