import './Home.css';
import Card from '../../components/Card/Card'
import { useState } from 'react';
import React from 'react';
import { useTranslation } from 'react-i18next';


function Home() {

    const { t, i18n } = useTranslation();



    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <>
            <section className='firstsection'>
                <div className="container">
                    <div className="firstsectionContent">
                        <div className="firstsectionTop">
                            <div className="firstsectionTopText">

                                <h2>{`${t("home.firstsectionTop.onlineStoreTitle")}`} <br/>  <span>{`${t("home.firstsectionTop.onlineStoreSpanTitle")}`}</span>  </h2>
                                <p><span> {`${t("home.firstsectionTop.website")}`}  <br /></span>
                                {`${t("home.firstsectionTop.websiteText")}`} 
                                </p>
                                <button>{`${t("home.firstsectionTop.websiteButton")}`} </button>
                            </div>
                            <div className="firstsectionTopImg">
                                <img src="./assets/img/knife.png" alt="" />
                            </div>
                        </div>
                        <div className="firstsectionBottom">
                            <div className='firstsectionDiv'>
                                <div className="firstsectionImg">
                                    <img src="./assets/img/firstImg.png" alt="" />
                                </div>
                                <div className="firstsectionText">
                                    <p>{`${t("home.firstsectionBottom.textOne")}`}</p>
                                </div>
                            </div>
                            <div className='firstsectionDiv'>
                                <div className="firstsectionImg">
                                    <img src="./assets/img/firstImg.png" alt="" />
                                </div>
                                <div className="firstsectionText">
                                    <p>{`${t("home.firstsectionBottom.textTwo")}`}</p>
                                </div>
                            </div>
                            <div className='firstsectionDiv'>
                                <div className="firstsectionImg">
                                    <img src="./assets/img/thirdImg.png" alt="" />
                                </div>
                                <div className="firstsectionText">
                                    <p>{`${t("home.firstsectionBottom.textThree")}`}</p>
                                </div>
                            </div>
                            <div className='firstsectionDiv'>
                                <div className="firstsectionImg">
                                    <img src="./assets/img/fourthImg.png" alt="" />
                                </div>
                                <div className="firstsectionText">
                                    <p>{`${t("home.firstsectionBottom.textFour")}`}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="secondsection">
                <div className="container">
                    <div className="secondsectionContent">
                        < Card />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
