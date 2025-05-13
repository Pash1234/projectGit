import './Contact.css';
import { useTranslation } from 'react-i18next';
import "./../../i18n/i18n";


function Contact() {
    
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    return (
        <section className="contactSection">
            <div className="container">
                <div className="contactSectionContent">
                    <h2>{`${t("contactPage.contactTitle")}`}</h2>
                    <h4>{`${t("contactPage.contactText")}`} </h4>
                    <div className="contactInformation">
                        <div className="phoneNumber">
                            <div className="phoneNumberOne">
                                <img className='phoneImage' src="./assets/img/telephone.png" alt="phoneNumber" />
                                <h3 className='phones'> {`${t("contactPage.contactPhone")}`} </h3>
                                <a href="tel:">8-800-777-49-67</a>
                            </div>
                            <div className="elsePhoneNumber">
                                <img className='phoneImage' src="./assets/img/telephone.png" alt="phoneNumber" />
                                <h3 className='phones'>{`${t("contactPage.contactDetails")}`}</h3>
                                <a href="tel:">+7-9000-28-28-24</a>
                                <a href="tel:">+7 996 690-09-96</a>
                            </div>
                            <div className="apps">
                                <a href="https://vk.com/">
                                    <img src="./assets/img/wkontact.png" alt="wkontakt" />
                                </a>
                                <a href="https://www.whatsapp.com/">
                                    <img src="./assets/img/whatsapp.png" alt="whatsapp" />
                                </a>
                                <a href="https://web.telegram.org/">
                                    <img src="./assets/img/telegram.png" alt="telegram" />
                                </a>
                            </div>
                        </div>
                        <div className="email">
                            <div className='emailName'>
                                <img className='emailImage' src="./assets/img/email.png" alt="email" />
                                <h3 className='emails'> {`${t("contactPage.email")}`} </h3>
                                <a href="mailto:">info@zlatmax.ru</a>
                            </div>
                            <div className='questionsEmail'>
                                <h3 className='emails'>{`${t("contactPage.otherEmail")}`}</h3>
                                <a href="mailto:">smirnov@zlatmax.ru</a>
                            </div>
                        </div>
                        <div className="workTime">
                            <img className='timeImage' src="./assets/img/time.png" alt="time" />
                            <h3 className='times'>{`${t("contactPage.time")}`}</h3>
                            <p>Пн-Пт: 7:00 - 16:00 МСК</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Contact;