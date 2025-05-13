import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import Person from '../Person/Person';
import Telephone from '../Telephone/Telephone';
import Save from '../Save/Save';
import './Header.css';
import Basket from '../Basket/Basket';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import "./../../i18n/i18n"
function Header() {

  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const menuItems = [
    { name: `${t("header.topHeader.aboutUs")}`, href: "/aboutUs" },
    { name: `${t("header.topHeader.delivery")}`, href: "/delivery" },
    { name: `${t("header.topHeader.news")}`, href: "/news" },
    { name: `${t("header.topHeader.contact")}`, href: "/contact" }
  ]
  const items = [
    { name: `${t("header.bottomHeader.knives")}`},
    { name: `${t("header.bottomHeader.weapon")}` },
    { name: `${t("header.bottomHeader.souvenir")}`},
    { name: `${t("header.bottomHeader.lanterns")}` },
    { name: `${t("header.bottomHeader.relateProduct")}` }
  ];


  const [isNumberMenuOpen, setIsNumberMenuOpen] = useState(false);
  const [numberOpen, setNumberOpen] = useState(false);


  const changeNumber = (lng) => {
    setIsNumberMenuOpen(false);
  };


  return (
    <header>
      <div className="headerContent">
        <div className="mediaHeader">
          <div className="container">
            <div className="mediaHeaderContent">
              <div>
                < Telephone />
              </div>
              <div>
                < Person />
              </div>
              <div>
                < Save />
              </div>
              <div>
                < Basket />
              </div>
              <div>

                < HamburgerMenu />
              </div>
            </div>
          </div>
        </div>
        <div className="topHeader">
          <div className="container">
            <div className="topHeaderContent">
              <div className="navbar">
                <nav>
                  <ul className='navbarIcons'>
                    {menuItems.map((item, index) => (
                      <li key={index}>
                        <Link to={item.href} className='navbarIcon'>{item.name}</Link>
                      </li>
                    ))}
                    <li className="language-selector">

                      <button className='languageButton' onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}>

                        {`${t("header.topHeader.language")}`}
                      </button>

                      {isLangMenuOpen && (
                        <ul className="languageIcons">
                          <button onClick={() => changeLanguage('en')}>ENG</button>
                          <button onClick={() => changeLanguage('ru')}>RUS</button>
                        </ul>
                      )}
                    </li>
                  </ul>
                </nav>
              </div>
              <Link to="/private" className='privateLink'>
                <div className="private">

                  <img src="./assets/img/person.icon.png" alt="" />
                  <p className='privateText'>
                    {`${t("header.topHeader.private")}`}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="mediumHeader">
          <div className="container">
            <div className="mediumHeaderContent">
              <div className="mediumHeaderLeft">
                <div className="mediumHeaderLogo">
                  <a href="/">
                    <img src="./assets/img/logo.png" alt="Logo" />
                  </a>
                </div>
                <div className="mediumHeaderInput">
                  <input className='searchInput' type="text" placeholder='Поиск' />
                  <div className='searchDiv'>
                    <img className='searchImg' src="./assets/img/search.png" alt="searchImage" />
                  </div>
                </div>
              </div>
              <div className="mediumHeaderRight">
                <div className='information'>
                  <div className='place'>
                    <img className='placeImg' src="./assets/img/place.png" alt="placeImg" />
                    <p className='placeText'>
                      {`${t("header.mediumHeader.place")}`}
                    </p>
                  </div>
                  <div className='phoneNumber'>
                    <div className='number'>
                      <li className="numbers" onClick={() => setNumberOpen(!numberOpen)} >
                        {('8-800-777-49-67')}
                        {numberOpen && (
                          <ul className="language-dropdown">
                            <a className='hrefTel' href="tel:">
                              <li className='phoneNumber' onClick={() => changeNumber()}>8-780-774-51-44</li>
                            </a>
                            <a className='hrefTel' href="tel:">
                              <li className='phoneNumber' onClick={() => changeNumber()}>8-740-624-21-75</li>
                            </a>
                          </ul>
                        )}
                      </li>

                      <select name="" id="">

                      </select>
                    </div>
                    <h4>
                      {`${t("header.mediumHeader.call")}`}
                    </h4>
                  </div>
                </div>
                <div className='order'>
                  <div className='like'>
                    <img src="./assets/img/like.png" alt="like.png" />
                  </div>
                  <div className='basket'>
                    <div className='basketImg'>
                      <img src="./assets/img/basket.png" alt="basket.png" />
                      <p>0</p>
                    </div>
                    <div className='basketText'>
                      <p>
                        {`${t("header.mediumHeader.price")}`}
                      </p>
                      <h4>
                        {`${t("header.mediumHeader.order")}`}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottomHeader">
          <div className="container">
            <div className="bottomHeaderContent">
              <nav>
                <ul className='items'>
                  {items.map((item, index) => (
                    <li className='itemsContent' key={index}>
                      <Link className='itemContent' to={item.href}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;




