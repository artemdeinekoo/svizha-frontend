import logoBlack from "../../images/logoBlack.svg"
import mastercard from "../../images/mastercard.svg"
import visa from "../../images/visa.svg"
import facebook from "../../images/facebook.svg"
import instagram from "../../images/instagram.svg"
import "./Footer.css";


function Footer () {
    return (
        <footer>
            <div className="footer--container">
                <div className="footer--el footer--logo">
                    <img src={logoBlack} alt="Svizha" />
                    <p>© Svizha. All rights reserved</p>
                </div>

                <nav className="footer--nav">
                    <div className="footer--el">
                        <h6 className = "footer--heading">Навігація</h6>
                        <ul className="footer--ul">
                            <li>Доставка</li>
                            <li>Меню</li>
                            <li>Головна</li>
                            <li>Додаткова Інформація</li>
                        </ul>
                    </div>

                    <div className="footer--el">
                        <h6 className = "footer--heading">Зробити замовлення:</h6>
                        <p>+38 (068) 978 21 85</p>

                        <div className="cards">
                            <img src={visa} alt="visa" />
                            <img src={mastercard} alt="mastercard" />
                        </div>
                        
                    </div>

                    <div className="footer--el">
                        <h6 className = "footer--heading">Слікуйте за корисною <br/> інформацією про <br/> харчування тут:</h6>

                        <div className="cards">
                            <a href="https://www.google.com.ua/?hl=ru"><img src={facebook} alt="facebook" /></a>
                            <a href="https://www.google.com.ua/?hl=ru"><img src={instagram} alt="instagram" /></a>
                        </div>
                    </div>
                    <div className="footer--el">
                        <h6 className = "footer--heading">Графік роботи:</h6>
                        <p>з 10:00 до 22:00</p>
                    </div>
                </nav>
            </div>
        </footer>
    )
};

export default Footer;