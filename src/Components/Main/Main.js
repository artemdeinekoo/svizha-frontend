import scheme from "../../images/scheme.svg"
import orange from "../../images/orange.png"
import logo from "../../images/logo.svg"
import smile from "../../images/smile.svg"
import heart from "../../images/heart.svg"


import "./Main.css"

function Main () {
    return (
        <div>
        <main>
            <div className="main--container">
                <div className="firstscreen">
                    <h1 className="utp">Свіжозаморожені <br/> страви на кожен день</h1>
                    <p className="utp--description">Наша свіжа їжа зберігає всі корисні<br />
                    та смакові властивості через технологію<br /> шокової заморозки</p>
                    <button className="cta--button">Хочу замовити</button>
                </div>

                <img className="blue-bg--img" src={orange} alt="bg" />

                <div className="scheme">
                    <img src={scheme} alt="scheme" className="schemecontent" />
                </div>

                {/* <h1 className="subcategoryName">Готові заморожені страви</h1>
                <div className="products--categories">
                    <img src={vector} alt="vector" className="vector"/>
                </div> */}

                <div className="advantages--card">
                    <div className="advantages--heading">
                        <img src={logo} alt="Свїжа" className="advantages--heading--logo"/>
                        <h3 className="advantages--heading--text"> - це готові заморожені страви на кожен день</h3>
                    </div>

                    <div className="advantages--component--container">

                        <div className="advantages--component">
                            <img src={smile} alt="smile" />
                            <p>Ми любимо, коли їжа корисна та збалансована. А також ми знаємо як багато часу йде на її приготування</p>
                        </div>
                        
                        <div className="advantages--component">
                            <img src={heart} alt="heart" />
                            <p>Тому ми подбали про те, щоб приготувати щоб вам залишилось тільки розігріти та посмакувати</p>
                        </div>                        
                    </div>

                    <button>
                            Хочу замовити
                    </button>
                </div>
            </div>
        </main>
        
        </div>
    )
};

export default Main;