import React from "react";
import './footerSection.css';
import 'antd/dist/reset.css';
import { Checkbox } from 'antd';
import { useState } from "react";

function FooterSection() {
    const [checked, setChecked] = useState(false);

    const onChange = (e) => {
        setChecked(e.target.checked);
        console.log(`Checkbox checked: ${e.target.checked}`);
    };

    return (
        <div className="footer">
            <div className="footerBck">
                <div className="footerText">
                    <h1>Златоустовские ножи интернет-магазин "ЗЛАТМАКС"</h1>
                    <p>Наш интернет-магазин "ЗЛАТМАКС" предлагает Вам ножи очень высокого качества из города оружейников - Златоуста. Златоустовские ножи известны и популярны среди потребителей как на российским рынке, так и за рубежом: ножи охотничьи, хозяйственные, туристические, рыбацкие, складные и метательные. Нож Златоуста - это идеальный друг и товарищ в повседневной жизни и в экстремальных ситуациях. На многую продукцию распространяется гарантия до 10 лет - это один из главных показателей качества. Для Вас на нашем сайте "zlatmax" предложен огромный ассортимент Златоустовских ножей. Наши менеджеры помогут определиться и подобрать самый лучший Златоустовский нож, ориентируясь на Ваши пожелания.</p>
                </div>
            </div>
            <div className="footerDiv">
                <div className="container">
                    <div className="first">
                        <div className="info">
                            <h4>ИНФОРМАЦИЯ</h4>

                            <ul>
                                <li><a href="">
                                    Златоустовские ножи <br />
                                    в Москве и Московской <br />
                                    области</a></li>
                                <li>
                                    <a href="">
                                        Ножевые стали
                                    </a>
                                </li>
                                <li><a href="">
                                    О нас</a></li>
                                <li><a href="">
                                    Условия оплаты <br />
                                    и доставки</a></li>
                                <li><a href="">
                                    Политика <br />
                                    конфиденциальности</a></li>
                            </ul>
                        </div>
                        <div className="poderjka">
                            <h4>СЛУЖБА ПОДДЕРЖКИ</h4>


                            <ul>
                                <li>
                                    <a href="">Контактная информация</a>
                                </li>
                                <li>
                                    <a href="">Возврат товара</a>
                                </li>
                                <li>
                                    <a href="https://www.google.com/maps/?entry=wc">Карта сайта</a>
                                </li>
                            </ul>

                        </div>
                        <div className="avel">
                            <h4>ДОПОЛНИТЕЛЬНО</h4>


                            <ul>
                                <li>
                                    <a href="">Подарочные сертификаты</a>
                                </li>
                                <li>
                                    <a href="">Партнеры</a>
                                </li>
                                <li>
                                    <a href="">Товары со скидкой</a>
                                </li>
                            </ul>

                        </div>

                        <div className="kabinet">
                            <h4>ЛИЧНЫЙ КАБИНЕТ</h4>


                            <ul>
                                <li>
                                    <a href="">Личный кабинет</a>
                                </li>
                                <li>
                                    <a href="">История заказов</a>
                                </li>
                                <li>
                                    <a href="">Мои закладки</a>
                                </li>
                                <li>
                                    <a href="">Рассылка новостей</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className="paloskaTwo"></div>
                    <div className="second">
                        <div className="contact">
                            <h4> КОНТАКТЫ</h4>


                            <ul>
                                <li>
                                    <img src="./assets/img/call.png" alt="chka" />
                                    <a href="tel:">8 (800) 777-49-67</a>
                                </li>
                                <li>
                                    <img src="./assets/img/time.png" alt="" />
                                    Пн-Пт <br />7:00 - 16:00 (МСК)
                                </li>
                                <li>
                                    <img src="./assets/img/location.png" alt="" />
                                    Златоуст, <br />
                                    ул. Шоссейная,<br />
                                    д. 1, офис «6Б»
                                </li>
                                <li>
                                    <img src="./assets/img/mail.png" alt="" />
                                    <a href="mailto:">info@zlatmax.ru</a>
                                </li>
                                <li>
                                    <div className="links">
                                        <a href="">
                                            <img src="./assets/img/facebook.png" alt="" />
                                        </a>
                                        <a href="">
                                            <img src="./assets/img/viber.png" alt="" />
                                        </a>
                                        <a href="">
                                            <img src="./assets/img/telegram.png" alt="" />
                                        </a>
                                        <a href="">
                                            <img src="./assets/img/whatsapp.png" alt="" />
                                        </a>
                                    </div>
                                </li>
                            </ul>

                        </div>

                        <div className="href">
                            <h4>ПОЛЕЗНЫЕ ССЫЛКИ</h4>


                            <ul>
                                <li>Способы оплаты и доставки</li>
                            </ul>

                        </div>
                        <div className="garant">
                            <h4>НАША ГАРАНТИЯ</h4>

                            <p>Недовольны своей покупкой? <br />
                                Вы можете вернуть ее в течении <br />
                                30 дней с даты получения, <br />
                                согласно <span><a href="">нашим правилам</a></span>
                            </p>
                        </div>

                        <div className="search">
                            <h4>НОВОСТНАЯ РАССЫЛКА</h4>

                            <p>Подпишитесь прямо сейчас!</p>

                            <input type="email" placeholder="example@gmail.com" />
                            <button className="inputButton">
                                <a href="">
                                    <img src="./assets/img/strelka" alt="" />
                                </a>
                            </button>
                            <div className="select">
                                <Checkbox onChange={onChange}>
                                    <p>
                                        Я прочитал Условия соглашения и <br />
                                        согласен с условиями
                                    </p>
                                </Checkbox>
                            </div>
                        </div>
                    </div>
                    <div className="paloskaThree"></div>
                    <div className="third">
                        <div className="footerFinalText">
                            <p>Все материалы, размещенные на сайте, носят справочный характер и не являются <br />
                                публичной офертой, определяемойположениями Статьи 437 Гражданского кодекса Российской Федерации. <br />
                                При копировании материалов гиперссылка на www.zlatmax.ru обязательна!</p>

                            <a href="">Златоустовские ножи www.zlatmax.ru ©</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterSection;