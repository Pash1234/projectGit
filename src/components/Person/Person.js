import React, { useState } from 'react';
import './Person.css';
import { Link } from 'react-router-dom';

function Person() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="contaainer">
            <button className="hamburger-icon" onClick={toggleMenu}>
                <div className={` ${isMenuOpen ? 'open' : ''}`}>
                    <img src="./assets/img/person.icon.png" alt="" />
                </div>
                <div className={` ${isMenuOpen ? 'open' : ''}`}></div>
                <div className={` ${isMenuOpen ? 'open' : ''}`}></div>
            </button>
            <nav className={`person ${isMenuOpen ? 'open' : ''}`}>
                <div className='phoneNumber'>
                    <Link to="/private">
                        <div className='number'>
                            <p className='privateMenu'>Личный кабинет</p>


                        </div>
                    </Link>

                </div>
            </nav>
        </div>
    );
}

export default Person;

