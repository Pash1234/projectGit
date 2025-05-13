import React, { useState } from 'react';
import './HamburgerMenu.css';

function HamburgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="contaainer">
      <button className="hamburger-icon" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
      </button>
      <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#home">О нас</a></li>
          <li><a href="#services">Оплата и доставка</a></li>
          <li><a href="#about">Новости</a></li>
          <li><a href="#contact">Контакты</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default HamburgerMenu;
