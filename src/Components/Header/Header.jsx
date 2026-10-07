import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">

        {/* Logo */}
        <a href="#" className="header__logo">
          <span className="logo__icon">🔥</span>

          <div className="logo__text">
            <strong>FIERY</strong>
            <small>PIZZA</small>
          </div>
        </a>

        {/* Navigation */}
        <nav className="header__nav">
          <a href="#home" className="nav__link active">
            Home
          </a>

          <a href="#menu" className="nav__link">
            Menu
          </a>

          <a href="#delivery" className="nav__link">
            Delivery
          </a>

          <a href="#story" className="nav__link">
            Our Story
          </a>

          <a href="#contact" className="nav__link">
            Contact
          </a>
        </nav>

        {/* Right side */}
        <div className="header__right">

          <button className="header__search">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>
          </button>

          <a href="#order" className="order__button">
            <span>Order Now</span>

            <span className="order__arrow">
              ↗
            </span>
          </a>

        </div>

      </div>
    </header>
  );
};

export default Header;