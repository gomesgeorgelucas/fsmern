import React from "react";
import "./style.css";

const Header = () => {
  return (
    <div className="Header">
      <img src="https://oceanbrasil.com/assets/logo.svg" alt="Logo do Ocean" />
      <div className="Header-links">
        <a href="#">Home</a>
        <a href="#">Criar</a>
      </div>
    </div>
  );
};

export default Header;
