import "./AboutUs.css"
import { useTranslation } from 'react-i18next';
import "./../../i18n/i18n";


function AboutUs() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    return (
        <section className="aboutSection">
            <div className="aboutSectionContent">
                <div className="firstText">
                    <h2 className="textTitle">{`${t("aboutUsPage.textOneTitle")}`}</h2>
                    <p className="textContent"> {`${t("aboutUsPage.textOneContent")}`}</p>
                </div>
                <div className="secondText">
                    <h2 className="textTitle">{`${t("aboutUsPage.textTwoTitle")}`}</h2>
                    <ul>
                        <li><a className="textContent" href="">{`${t("aboutUsPage.textTwoContent.oneList")}`}</a></li>
                        <li><a className="textContent" href="">{`${t("aboutUsPage.textTwoContent.twoList")}`}</a></li>
                        <li><a className="textContent" href="">{`${t("aboutUsPage.textTwoContent.threeList")}`}</a></li>
                        <li><a className="textContent" href="">{`${t("aboutUsPage.textTwoContent.fourList")}`}</a></li>
                    </ul>
                </div>
                <div className="thirdText">
                    <h2 className="textTitle">{`${t("aboutUsPage.textThreeTitle")}`}</h2>
                    <p className="textContent">{`${t("aboutUsPage.textThreeContent")}`}  Не знаешь, какой клинок тебе подойдёт? Напиши нам — поможем подобрать Златоустовские ножи купить которые будут радовать годами.</p>
                </div>
                <div className="fourthText">
                    <h2 className="textTitle">{`${t("aboutUsPage.textFourTitle")}`} Почему нам можно доверять?</h2>
                    <ul className="textIm">
                        <li><a className="textContent" href=""><span className="textBold">{`${t("aboutUsPage.textFourContent.textOneSpan")}`}</span>{`${t("aboutUsPage.textFourContent.textOneList")}`}</a></li>
                        <li><a className="textContent" href=""><span className="textBold">{`${t("aboutUsPage.textFourContent.textTwoSpan")}`}</span>{`${t("aboutUsPage.textFourContent.textTwoList")}`}</a></li>
                        <li><a className="textContent" href=""><span className="textBold">{`${t("aboutUsPage.textFourContent.textThreeSpan")}`}</span>{`${t("aboutUsPage.textFourContent.textThreeList")}`}</a></li>
                    </ul>
                </div>
                <hr />
                <div className="aboutBottomContent">

                    <div>
                        <p className="aboutBottomText"> {`${t("aboutUsPage.textBottomTitle")}`}</p>
                    </div>
                    <div className="aboutImages">
                        <div className="container">
                            <div className="aboutImageContent">

                                <div className="aboutImage">
                                    <img className="aboutBottomImage" src="./assets/img/car.png" alt="car" />
                                    <p>{`${t("aboutUsPage.aboutCard.cardContentOne")}`}</p>
                                </div>
                                <div className="aboutImage">
                                    <img className="aboutBottomImage" src="./assets/img/gift.png" alt="gift" />
                                    <p>{`${t("aboutUsPage.aboutCard.cardContentTwo")}`}</p>
                                </div>
                                <div className="aboutImage">
                                    <img className="aboutBottomImage" src="./assets/img/money.png" alt="money" />
                                    <p>{`${t("aboutUsPage.aboutCard.cardContentThree")}`}</p>
                                </div>
                                <div className="aboutImage">
                                    <img className="aboutBottomImage" src="./assets/img/policy.png" alt="policy" />
                                  {`${t("aboutUsPage.aboutCard.cardContentFour")}`}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
export default AboutUs;