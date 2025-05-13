import './Card.css';
import { useTranslation } from 'react-i18next';
import "./../../i18n/i18n";
import { useState } from 'react';


function Cards() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    const [cards] = useState([
        {
            title: `${t("home.firstCards.cardOne.cardTitle")}`,
            text: {
                textOne: `${t("home.firstCards.cardContent.textOne")}`,
                textTwo: `${t("home.firstCards.cardContent.textTwo")}`,
                textThree: `${t("home.firstCards.cardContent.textThree")}`,
            },
            img: './assets/img/knifeOne.png'
        },
        {
            title: `${t("home.firstCards.cardTwo.cardTitle")}`,
            text: {
                textOne: `${t("home.firstCards.cardContent.textOne")}`,
                textTwo: `${t("home.firstCards.cardContent.textTwo")}`,
                textThree: `${t("home.firstCards.cardContent.textThree")}`,
            },
            img: './assets/img/knifeTwo.png'
        },
        {
            title: `${t("home.firstCards.cardThree.cardTitle")}`,
            text: {
                textOne: `${t("home.firstCards.cardContent.textOne")}`,
                textTwo: `${t("home.firstCards.cardContent.textTwo")}`,
                textThree: `${t("home.firstCards.cardContent.textThree")}`,
            },
            img: './assets/img/knifeThree.png'
        },
        {
            title: `${t("home.firstCards.cardFour.cardTitle")}`,
            text: {
                textOne: `${t("home.firstCards.cardContent.textOne")}`,
                textTwo: `${t("home.firstCards.cardContent.textTwo")}`,
                textThree: `${t("home.firstCards.cardContent.textThree")}`,
            },
            img: './assets/img/knifeFour.png'
        },
        {
            title: `${t("home.firstCards.cardFive.cardTitle")}`,
            text: {
                textOne:  `${t("home.firstCards.cardContent.textOne")}`,
                textTwo: `${t("home.firstCards.cardContent.textTwo")}`,
                textThree: `${t("home.firstCards.cardContent.textThree")}`,
            },
            img: './assets/img/knifeFife.png'
        },
        {
            title: `${t("home.firstCards.cardSix.cardTitle")}`,
            text: {
                textOne:  `${t("home.firstCards.cardContent.textOne")}`,
                textTwo: `${t("home.firstCards.cardContent.textTwo")}`,
                textThree: `${t("home.firstCards.cardContent.textThree")}`,
            },
            img: './assets/img/knifeSix.png'
        },
    ])
    return (
        <>
            {cards.map((card, i) => (
                <div className='card' key={i}>
                    <div className="cardContent">
                        <div className='cardText'>
                            <div className='cardTitleContent'>
                                <h3 className='cardTitle'>{card.title}</h3>
                                <div className="line"></div>
                            </div>
                            <div className='cardInformation'>
                                <ul className='cardItemsContent'>
                                    <li className='cardItems'>{card.text.textOne}</li>
                                    <li className='cardItems'>{card.text.textTwo}</li>
                                    <li className='cardItems'>{card.text.textThree}</li>
                                </ul>
                            </div>
                        </div>
                        <div className='cardImageDiv'>
                            <img className='cardImage' src={card.img} alt="" />
                        </div>
                    </div>
                </div>
            ))}
        </>

    );
}

export default Cards;
