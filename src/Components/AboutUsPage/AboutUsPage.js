import sirniki from "../../images/sirniki.jpg"
import children from "../../images/children.jpg"
import menu from "../../images/menu.svg"
import cooking from "../../images/cooking.svg"
import personal from "../../images/personal.svg"
import products from "../../images/products.svg"
import transportation from "../../images/transportation.svg"
import qualitycontrol from "../../images/qualitycontrol.svg"
import "./AboutUsPage.css"


function AboutUsPage () {
    return (
        <div className="about--us--container">
            <h1 className="about--us--heading">Хто ми?</h1>

            <div className="video">
                <iframe width="589" height="414" src="https://www.youtube.com/embed/UALsATqpM50" title="YouTube video player" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="True"></iframe>
                <div className="media--desc">
                    <h3>Ми любимо, коли їжа корисна та збалансована. А також ми знаємо як багато часу йде на її приготування</h3>
                    <p>Ми батьки 5 дітей, тому ми дуже добре знаємо як важливо готувати здорову і натуральну їжу швидко :) Ми завжди стараємось давати найкраще дітям, тому 4 роки тому створили садочок для якісної освіти нашого молодшого сина, після чого зрозуміли, що хочемо дбати і про правильне харчування в наших навчальних закладах</p>
                </div>
            </div>

            <div className="quality">
                <div className="media--desc">
                    <h3>Ми дбаємо про якість і баланс ваших страв, щоб ви мали час на щось важливіше</h3>
                    <p>
                    &#x2022; Якщо "на серйозному", то ми готуємо відповідно до вимог системи НАССР <br/>
                    &#x2022; А ще ми дуже серйозно ставимось до вибору сировини <br/>
                    &#x2022; Технологія шокової заморозки дає можливість зберігати усі корисні властивості овочів, фруктів та мʼяса у страві <br/>
                    &#x2022; Тому тепер існує свіжа їжа з морозилки <br/>
                    &#x2022; Смакуй улюблені страви міжнародної та національної кухні, а не просто вареники <br/>
                    &#x2022; Ми приготували їх з найкращими технологами, що готують їжу і для наших діток <br/>
                    </p>
                </div>

                <img src={sirniki} alt="Сирники" />
            </div>

            <div className="nutrition">
                <img src={children} alt="Діти" />

                <div className="media--desc">
                    <h3>Ми дбаємо про якість і баланс ваших страв, щоб ви мали час на щось важливіше</h3>
                    <p>
                    Ми забезпечуємо повноцінним харчуванням садочки та школи і пропонуємо харчування для стаціонарів клінік.
                    <br/><br/>
                    Як за повір’ям сказано, хочеш створити найкраще - зроби сам, так і ми створюємо все для кращого забезпечення умов здійснення освітнього процесу. Ми не можемо розірвати тісний зв‘язок батьки-діти, ми можемо лише робити його сильнішим.
                    <br/><br/>
                    Наші кухарі готують, вкладаючи у страви не тільки свій досвід і уміння, а і частинку душі
                    </p>
                </div>
            </div>

            <h1 className="our--principes--heading">Наші принципи</h1>
            <div className="our--principes">
                <div className="principes--el">
                    <img src={menu} alt="Меню" />
                    <h5>Меню</h5>
                    <p>Пропонуємо вам авторське, збалансоване меню, яке розроблено з урахуванням вподобань і потреб дітей різних вікових категорій. У меню присутні страви з різних країн світу</p>
                </div>

                <div className="principes--el">
                    <img src={cooking} alt="Приготування" />
                    <h5>Приготування</h5>
                    <p>Готуємо на новому, сучасному обладнанні способом запікання та обробкою парою</p>
                </div>

                <div className="principes--el">
                    <img src={personal} alt="Персонал" />
                    <h5>Персонал</h5>
                    <p>Свїжа - це дружній, злагоджений колектив. Кожен працівник має багатолітній досвід роботи у харчовій промисловості.</p>
                </div>
                
                <div className="principes--el">
                    <img src={products} alt="Продукти" />
                    <h5>Продукти</h5>
                    <p>До вибору продуктів для приготування страв і постачальників підійшли особливо прискіпливо. Ми використовуємо лише високоякісні продукти і співпрацюємо з постачальниками, які мають сертифікати відповідності.</p>
                </div>

                <div className="principes--el">
                    <img src={transportation} alt="Транспортування" />
                    <h5>Транспортування</h5>
                    <p>Свїжа транспортує страви в спеціально обладнаних авто та в термоконтейнерах, температурний режим яких дозволяє зберегти свіжість і якість страв незалежно від пори року.</p>
                </div>

                <div className="principes--el">
                    <img src={qualitycontrol} alt="Контроль якості" />
                    <h5>Контроль якості</h5>
                    <p>У нас здійснюється ефективна система контролю якості на всіх етапах виробництва: від закупівлі сировини у виробників, до постачання готових страв клієнтам. Вся продукція відповідає гігієнічним, санітарно - епідеміологічним вимогам та стандартам якості.</p>
                </div>
            </div>

            <div className="serious--blocks">
                <h1>Серйозні блоки</h1>
                <div className="serious--buttons">
                    <button>Політика конфіденційності</button>
                    <button>Правила обміну та повернення</button>
                    <button>Договір оферти</button>
                </div>
            </div>

        </div>
    )
}

export default AboutUsPage;


