import React from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";



const CartPopup = () => {
  return (
    <div>
      <Link to="/cart" className="button-Popup">
        Carrito
      </Link>
    </div>
  );
};


export default CartPopup;
