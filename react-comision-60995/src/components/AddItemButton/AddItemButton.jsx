// AddItemButton.jsx
import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../../context";

export const AddItemButton = ({
  quantity,
  label = "Agregar al Carrito",
  handleResetQuantity,
  price,
}) => {
  const { itemCount, setItemCount, cartItems, setCartItems } =
    useContext(CartContext);

  const handleAddCart = () => {
    setItemCount(itemCount + quantity);
    setCartItems([...cartItems, { quantity, price,  }]);
    handleResetQuantity();
  };

  return (
    <div>
      <Button
        style={{
          margin: "0 0 10px 55px",
          backgroundColor: "black",
          borderColor: "black",
        }}
        onClick={handleAddCart}
      >
        {label}
      </Button>
    </div>
  );
};
