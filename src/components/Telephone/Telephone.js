import React, { useState } from 'react';
import './Telephone.css';

function Telephone() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="contaainer">
            <button className="hamburger-icon" onClick={toggleMenu}>
                <div className={` ${isMenuOpen ? 'open' : ''}`}>
                    <img src="./assets/img/phone.png" alt="" />
                </div>
                <div className={` ${isMenuOpen ? 'open' : ''}`}></div>
                <div className={` ${isMenuOpen ? 'open' : ''}`}></div>
            </button>
            <nav className={`phone ${isMenuOpen ? 'open' : ''}`}>
                <div className='phoneNumber'>

                    <div className='numbers'>
                        <p>8-800-777-49-67</p>
                        <p>8-780-774-51-44</p>
                        <p value="">8-740-624-21-75</p>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Telephone;




