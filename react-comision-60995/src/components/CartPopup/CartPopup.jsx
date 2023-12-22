
import React, { useState } from "react";
import Cart from "../Cart/Cart";

const CartPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <button className="button-Popup" onClick={togglePopup}>
        Carrito
      </button>
      {showPopup && (
        <div className="cart-popup">
          <Cart />
        </div>
      )}
    </div>
  );
};

export default CartPopup;
