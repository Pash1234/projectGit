import React, { useState } from 'react';
import './Basket.css';

function Basket() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="contaainer">
            <button className="hamburger-icon" onClick={toggleMenu}>
                <div className={` ${isMenuOpen ? 'open' : ''}`}>
                    <img src="./assets/img/headerBasket.png" alt="" />
                    <p className='basketNumber'>0</p>
                </div>
                <div className={` ${isMenuOpen ? 'open' : ''}`}></div>
                <div className={` ${isMenuOpen ? 'open' : ''}`}></div>
            </button>
            <nav className={`baskets ${isMenuOpen ? 'open' : ''}`}>
                <div className='phoneNumber'>
                    <div className='basketText'>
                        <a href="">
                            <p>Ваша корзина пуста!</p>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Basket;






