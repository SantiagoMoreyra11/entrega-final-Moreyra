// CartContext.jsx
import React, { createContext, useState, useEffect, useContext } from "react";

export const CartContext = React.createContext(null);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart should be used within a CartContextProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const [itemCount, setItemCount] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalCartItems, setTotalCartItems] = useState(0);
  const [cartItems, setCartItems] = useState(storedCartItems);

  const addItem = (item, quantity) => {
    const { name, price, category, description, image } = item;
    const index = cartItems.findIndex((product) => product.id);

    if (index !== -1) {
      const cartItemsCopy = [...cartItems];
      cartItemsCopy[index].quantity += quantity;
      cartItemsCopy[index].subTotal =
        cartItemsCopy[index].quantity * cartItemsCopy[index].price;
      setCartItems(cartItemsCopy);
    } else {
      const newItem = {
        name,
        price,
        category,
        description,
        image,
        quantity,
        subTotal: quantity * price,
      };

      setCartItems([...cartItems, newItem]);
    }
  };

  const updateItemQuantity = (itemId, newQuantity) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId
        ? { ...item, quantity: newQuantity, subTotal: newQuantity * item.price }
        : item
    );
    setCartItems(updatedCartItems);
  };
  const handleTotal = () => {
    const total = cartItems.reduce((acum, item) => acum + item.subTotal, 0);
    setTotalCartItems(total);
  };

  const handleTotalQuantity = () => {
    const total = cartItems.reduce((acum, item) => acum + item.quantity, 0);
    setTotalQuantity(total);
  };

  const removeItem = (id) => {
    const arrayFilter = cartItems.filter((item) => item.id !== id);
    setCartItems(arrayFilter);
  };

  useEffect(() => {
    handleTotal();
    handleTotalQuantity();
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const contextValue = {
    cartItems,
    totalCartItems,
    totalQuantity,
    itemCount,
    addItem,
    removeItem,
    updateItemQuantity,
    setTotalQuantity,
    setItemCount,
    setCartItems,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
