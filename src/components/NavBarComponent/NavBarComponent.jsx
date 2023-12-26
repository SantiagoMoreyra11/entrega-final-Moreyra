import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent";
import { Link } from "react-router-dom";

export const NavBarComponent = () => {
  return (
    <Navbar variant="light" expand="lg" className="bg-white">
      <Container>
        <Navbar.Brand>
          <Link to={"/"}>
            <img
              style={{ width: "5rem" }}
              src="../../../img/logo.png"
            ></img>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              style={{ textDecoration: "none", color: "Black", margin: "10px" }}
              to="#link"
            >
              Productos
            </Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link
                  style={{ textDecoration: "none", color: "Black" }}
                  to={"/category/Zapatillas"}
                >
                  Zapatillas
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  style={{ textDecoration: "none", color: "Black" }}
                  to={"/category/Ropa"}
                >
                  Ropa
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidgetComponent />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
