import React from "react";
import { Button } from "react-bootstrap";
import { AddItemButton } from "../AddItemButton";

export const ItemQuantitySelector = () => {
  const [quantity, setQuantity] = React.useState(1);
  const buttonStyle = {
    backgroundColor: "black",
    borderColor: "black",
  };
  const handleAddProduct = () => {
    setQuantity(quantity + 1);
  };

  const handleSubstractProduct = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleResetQuantity = () => {
    setQuantity(1);
  };

  return (
    <div style={{ margin: 7 }} >
      <Button style={buttonStyle} onClick={handleSubstractProduct}>
        -
      </Button>
      <input style={{ margin: 10 }} type="number" value={quantity} disabled />
      <Button style={buttonStyle} onClick={handleAddProduct}>
        +
      </Button>
      <AddItemButton
        quantity={quantity}
        handleResetQuantity={handleResetQuantity}
      />
    </div>
  );
};
