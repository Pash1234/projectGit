import React, { useState } from 'react';
import './Save.css';

function Save() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="contaainer">
            <button className="hamburger-icon" onClick={toggleMenu}>
                <div className={` ${isMenuOpen ? 'open' : ''}`}>
                    <img src="./assets/img/save.png" alt="" />
                </div>
                <div className={` ${isMenuOpen ? 'open' : ''}`}></div>
                <div className={` ${isMenuOpen ? 'open' : ''}`}></div>
            </button>
            <nav className={`save ${isMenuOpen ? 'open' : ''}`}>
                <div className='phoneNumber'>
                    <div className='number'>
                        <a href="">
                            <h4>No Like</h4>
                        </a>
                    </div>

                </div>
            </nav>
        </div>
    );
}

export default Save;




