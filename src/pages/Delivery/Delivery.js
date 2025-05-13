import './Delivery.css'
import { useTranslation } from 'react-i18next';
import "./../../i18n/i18n";


function Delivery() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    return (
        <section className="delivery">
            <div className="container">
                <div className="deliveryContent">
                    <h2 className='deliveryTitle'>{`${t("deliveryPage.deliveryTitle")}`}</h2>
                    <div className='deliveryImageContent'>
                        <img className='deliveryImage' src="./assets/img/step.png" alt="" />
                    </div>
                    <div className='deliveryText'>
                        <p className='deliveryTextContent'>
                            {`${t("deliveryPage.deliveryText")}`}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Delivery;