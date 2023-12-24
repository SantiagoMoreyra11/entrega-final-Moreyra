import React, { useContext, useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import {
  useAllProducts,
  useAllProductsByCategory,
} from "../../hooks/useProducts";

const Cart = () => {
  const { itemCount, setItemCount, cartItems, setCartItems } =
    useContext(CartContext);
  const [total, setTotal] = useState(0);
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  };

  const {
    products: allProducts,
    loading: allProductsLoading,
    error: allProductsError,
  } = useAllProducts(10);

  // Supongamos que tienes el ID de la categoría almacenado en alguna variable
  const categoryId = "CategoryId";

  // Usar el hook useAllProductsByCategory para obtener productos por categoría
  const {
    products: categoryProducts,
    loading: categoryProductsLoading,
    error: categoryProductsError,
  } = useAllProductsByCategory(categoryId);

  const calculateTotal = () => {
    const totalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setTotal(parseFloat(totalPrice.toFixed(2)));
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
      // Lógica para realizar la compra
      // Puedes realizar acciones adicionales, como enviar la orden al servidor, etc.
      // Aquí simplemente mostraremos una alerta con el total de la compra
      Swal.fire(`Compra realizada`, "", "success");

      setCartItems([]);
      setTotal(0);
      setItemCount(0);
    }
  };

  const handleEmptyCart = () => {
    setItemCount(0);
    setCartItems([]);
    setTotal(0);
  };

  return (
    <div style={containerStyle}>
      {/* Renderizar productos del carrito */}
      {cartItems.map((item) => (
        <div key={item.id} style={{ marginBottom: "20px" }}>
          <p>Producto: {item.title}</p>
          <p>Precio: ${item.price}</p>
          <p>Cantidad: {item.quantity}</p>
          <p>Total: ${item.price * item.quantity}</p>
        </div>
      ))}

      <Button style={buttonStyle} onClick={handleBuy}>
        Comprar
      </Button>
      <span style={{ margin: "1px" }}></span>
      <Button style={buttonStyle} onClick={handleEmptyCart}>
        Vaciar Carrito
      </Button>
    </div>
  );
};

export default Cart;
