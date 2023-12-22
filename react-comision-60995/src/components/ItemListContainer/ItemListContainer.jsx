// ItemListContainer.jsx
import Card from "react-bootstrap/Card";
import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ItemQuantitySelector } from "../ItemQuantitySelector";
import { AddItemButton } from "../AddItemButton";
import { CartContext } from "../../context";

export const ItemListContainer = ({ products }) => {
  const { cartItems, setCartItems } = useContext(CartContext);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100vw",
        justifyContent: "space-around",
      }}
    >
      {products.map((product) => {
        return (
          <Card key={product.id} style={{ width: "18rem", margin: 20 }}>
            <Link to={`/item/${product.id}`}>
              <Card.Img variant="top" src={product.thumbnail} />
            </Link>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>Stock: {product.stock}</Card.Text>
              <Card.Text>${product.price}</Card.Text>
            </Card.Body>
            <ItemQuantitySelector />
          </Card>
        );
      })}
    </div>
  );
};
