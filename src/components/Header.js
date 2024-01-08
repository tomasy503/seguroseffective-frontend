import React from "react";
import "../styles/Header.css"; // Make sure to create this CSS file in src/styles

function Header() {
  return (
    <header className="header">
      <img src="/images/logo.png" alt="Effective Logo" className="logo" />
      <nav className="navigation">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about-us">Sobre Nosotros</a>
          </li>
          <li>
            <a href="/personal-insurance">Seguros para personas</a>
          </li>
          <li>
            <a href="/business-insurance">Seguros para empresas</a>
          </li>
        </ul>
      </nav>
      <button className="quote-button">Pida una Cotización</button>
    </header>
  );
}

export default Header;
