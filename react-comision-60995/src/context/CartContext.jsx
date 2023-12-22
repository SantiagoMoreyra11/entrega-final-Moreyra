// CartContext.jsx
import React, { useState } from "react";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [itemCount, setItemCount] = useState(0);
  const [cartItems, setCartItems] = useState([]); // Nuevo estado para almacenar los productos del carrito

  return (
    <CartContext.Provider
      value={{ itemCount, setItemCount, cartItems, setCartItems }}
    >
      {children}
    </CartContext.Provider>
  );
};
