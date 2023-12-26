import React from "react";

const Footer = () => {
  const githubUrl = "https://github.com/SantiagoMoreyra11";

  const footerStyle = {
    backgroundColor: "black",
    color: "#fff",
    textAlign: "center",
    padding: "10px",
    position: "fixed",
    bottom: "0",
    width: "100%",
  };

  return (
    <footer style={footerStyle}>
      <p>
        © 2023 Adidas. Todos los derechos y los izquierdos bien Puestos |{" "}
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </p>
    </footer>
  );
};

export default Footer;
