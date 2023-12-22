// Cart.jsx
import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";

const Cart = () => {
  const { itemCount, setItemCount, cartItems, setCartItems } =
    useContext(CartContext);
  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    setTotal(totalPrice);
  };

  const handleBuy = () => {
    if (cartItems.length === 0) {
      // Mostrar alerta si el carrito está vacío
      Swal.fire("Error", "El carrito está vacío. Agrega productos antes de comprar.", "error");
    } else {
      // Lógica para realizar la compra
      // Puedes realizar acciones adicionales, como enviar la orden al servidor, etc.
      // Aquí simplemente mostraremos una alerta con el total de la compra
      Swal.fire("Compra realizada", "success","success");
      // Vaciar el carrito después de la compra
      setCartItems([]);
      setTotal(0);
    }
  };

  const handleEmptyCart = () => {
    setItemCount(0);
    setCartItems([]);
    setTotal(0);
    // Agregar la lógica para vaciar el carrito
  };

  return (
    <div>
      {/* Renderizar los productos del carrito aquí */}
      <Button onClick={handleBuy} style={{margin:"10px"}}>Comprar</Button>
      <Button onClick={handleEmptyCart}>Vaciar Carrito</Button>
    </div>
  );
};

export default Cart;
