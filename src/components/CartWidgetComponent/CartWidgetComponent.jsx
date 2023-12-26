import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { CartContext, useCart } from "../../context";
import { Link } from "react-router-dom";

const CartWidgetComponent = () => {
  const { itemCount, updatedCartItems } = React.useContext(CartContext);
  const { totalQuantity } = useCart();
  const iconStyles = {
    fontSize: "1.3rem",
    paddingRight: "10px",
    color: "black",
  };

  return (
    <div>
      <Link to="/cart" className="button-Popup">
        <FontAwesomeIcon style={iconStyles} icon={faCartShopping} />
        <span style={{ fontSize: "1.3rem", margin: "5px", color: "black",}}>
          ({totalQuantity})
        </span>
      </Link>
    </div>
  );
};

export default CartWidgetComponent;
