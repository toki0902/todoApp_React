import React from "react";
import AppCss from "./App.css";

const Header = () => {
  return (
    <header className="header">
      <h2 className="header__title">毎日を便利にApp</h2>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">mail</li>
          <li className="header__item">contact</li>
          <li className="header__item">Q&A</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
