import forPartners from "../../images/for-partners.jpg"
import "./ForPartnersPage.css"

function ForPartnersPage () {
    return (
        <main>
            <div className="for--partners--container">
                <h1>Партнерам</h1>
                <div className="intro">
                    <img src={forPartners} alt="" />

                    <div className="intro--info">
                        <p><strong className="str">Ми надаємо особливе меню по таким напрямкам харчування: дитячі садочки та школи, приватні клініки та компанії.</strong>
                            <br/><br/>
                            <strong className="str">Дитячі садочки, лікарні, школи та офіси — </strong>де б ви не знаходились, Свїжа має досвід і знання, щоб надавати рішення для організації громадського харчування великого обсягу. Ми пишаємося нашою здатністю розробляти послуги харчування на основі поточних потреб наших клієнтів. Кожне меню ретельно пропрацьовується під клієнта. Незалежно від того, де ви перебуваєте, скільки у вас людей і якісь дієтичні вимоги.
                            <br/><br/>
                            <strong className="str">Вища якість послуг харчування означає вищу якість життя.</strong>
                            Ми віримо, що харчування є невід’ємною частиною здоров’я та благополуччя та забезпечує енергію, яка підживлює концентрацію, прийняття позитивних рішень і продуктивність.
                            <br/><br/>
                            <strong className="str">Наше меню в домашньому стилі</strong> означає, що ми задовольняємо будь-які потреби, щоб забезпечити різноманітне харчування. Щоденне меню включає різноманітні страви: супи, кілька основних страв, десерти та корисні гарніри.
                            <br/><br/>
                            <em className="thin">Для детального ознайомлення з меню, телефонуйте або пишіть в соц. мережі.</em>
                        </p>
                        <div className="info--cta">
                            <button>Зателефонувати</button>
                            <p>Номер телефону: +380 (68) 978 21 85</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ForPartnersPage;