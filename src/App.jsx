import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { MainRouter } from "./router/MainRouter";
import { CartProvider } from "./context";
import Footer from "./components/Footer/Footer";
import firebaseConfig from "./config/firebaseConfig";

const App = () => {
  return (
    <div>
      <CartProvider>
        <MainRouter />
        <Footer />
      </CartProvider>
    </div>
  );
};

export default App;
