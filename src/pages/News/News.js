import './News.css'
import { useTranslation } from 'react-i18next';
import "./../../i18n/i18n";

function News() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    return (
        <section className='newSection'>
            <div className="container">
                <div className="newSectionContent">
                    <h2>{`${t("newsPage.newsTitle")}`}</h2>
                    <div className='newsText'>
                        <p>
                            {`${t("newsPage.newsText")}`}
                        </p>
                    </div>
                    <div className='newsCardContent'>
                        <div className="newsCard">
                            <img src="./assets/img/newsImage.jpg" alt="" />
                            <h2>{`${t("newsPage.cardOneText")}`}</h2>
                        </div>
                        <div className="newsCard">
                            <img src="./assets/img/newsImageTwo.jpg" alt="" />
                            <h2>{`${t("newsPage.cardTwoText")}`}</h2>
                        </div>
                        <div className="newsCard">
                            <img src="./assets/img/newsImageThree.jpg" alt="" />
                            <h2>{`${t("newsPage.cardThreeText")}`}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default News;