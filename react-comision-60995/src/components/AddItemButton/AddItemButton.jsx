import React from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../../context";

export const AddItemButton = ({
  label = "Agregar al Carrito",
  quantity,
  handleResetQuantity,
}) => {
  const { itemCount, setItemCount } = React.useContext(CartContext);

  const handleAddCart = () => {
    setItemCount(itemCount + quantity);
    handleResetQuantity();
  };

  return (
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
  );
};
