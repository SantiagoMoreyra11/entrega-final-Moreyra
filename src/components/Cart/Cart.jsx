import React, { useContext, useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";

export const Cart = () => {
  const {
    itemCount,
    setItemCount,
    cartItems,
    setCartItems,
    removeItem,
    updateItemQuantity,
    clearCartItems,
    totalCartItems,
  } = useContext(CartContext);

  const buttonStyle = {
    backgroundColor: "black",
    borderColor: "black",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "16px",
    margin: "5px",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "rows",
    justifyContent: "center",
    padding: "20px",
  };

  const handleBuy = () => {
    if (cartItems.length === 0) {
      // Mostrar alerta si el carrito está vacío
      Swal.fire(
        "Error",
        "El carrito está vacío. Agrega productos antes de comprar.",
        "error"
      );
    } else {
      Swal.fire(`Compra realizada`, "", "success");

      setCartItems([]);

      setItemCount(0);
    }
  };

  const handleEmptyCart = () => {
    setItemCount(0);
    setCartItems([]);
    clearCartItems();
  };

  return (
    <div style={containerStyle}>
      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="border p-3 mb-3">
            <p className="mb-1 fw-bold">Nombre: {item.title}</p>
            <p className="mb-1">Precio unitario: ${item.price}</p>
            <p className="mb-1">Cantidad: {item.quantity}</p>
            <p className="mb-1">Subtotal: ${item.subTotal}</p>
            <div className="mb-2">
              <button
                className="btn btn-danger m-2"
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              >
                Quitar
              </button>
              <button
                className="btn btn-success m-2"
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
              >
                Añadir
              </button>
            </div>
            <button
              className="btn btn-outline-danger m-2"
              onClick={() => removeItem(item.id)}
            >
              Eliminar
            </button>
          </div>
        ))}
        <h3 className="fw-bold m-2">
          Suma total del carrito ${totalCartItems}
        </h3>
        <Button style={buttonStyle} onClick={handleBuy}>
          Comprar
        </Button>
        <span style={{ margin: "1px" }}></span>
        <Button style={buttonStyle} onClick={handleEmptyCart}>
          Vaciar Carrito
        </Button>
      </div>
    </div>
  );
};

export default Cart;
