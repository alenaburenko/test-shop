import React from "react";
import "./header.scss";

function Header() {
  return (
    <header className="header">
        <img
          className="header__logo"
          alt="logo"
          src="./img/logo-shop.png"
        />
       {/* <div className="header__filter-rectangle">
          <button>
        <span className="header__filter-rectangle-double"></span>
        <span className="header__filter-rectangle-double"></span>
          </button>
        <button className="grid">
        <span className="header__filter-rectangle-quadruple"></span>
        <span className="header__filter-rectangle-quadruple"></span>
        <span className="header__filter-rectangle-quadruple"></span>
        <span className="header__filter-rectangle-quadruple"></span>
        </button>
      </div> */}
    </header>
  );
}

export default Header;
