import "./BuyUsPage.css"


function BuyUsPage () {
    return (
        <main>
            <div className="buy--us--container">
                <h1 className="buy--us--heading">Де нас купити?</h1>
                <div className="buy--us--content">
                    <div className="map"><iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.7038978835035!2d30.602575415943804!3d50.446615795521865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cff6aa149fe1%3A0xe9889f0ab1533da7!2z0LLRg9C70LjRhtGPINCE0LLQs9C10L3QsCDQodCy0LXRgNGB0YLRjtC60LAsIDbQkiwg0JrQuNGX0LIsINCj0LrRgNCw0LjQvdCwLCAwMjAwMA!5e0!3m2!1sru!2snl!4v1676754722715!5m2!1sru!2snl"></iframe></div>
                    <div className="buy--us--text">
                        <h2>Готуємо в Києві</h2>
                        <h4>Прийом замовлень та оплата:</h4>
                        <p>
                            1.Доставка здійснюється з понеділка по п'ятницю кожного дня. Замовлення оформлені в суботу доставлені будуть в понеділок. Замовлення приймаються кожного дня до 22:00<br/>
                            2.Оформіть замовлення та зробіть оплату зручним для вас способом
                        </p>

                        <h4>Де доставляємо:</h4>
                        <p>Доставка працює лише по Києву</p>

                        <h4>Дні доставки:</h4>
                        <p>Понеділок, Вівторок, Середа, Четвер, П’ятниця</p>

                        <h4>Вартість доставки:</h4>
                        <p>
                            По Києву - 100 грн<br/>
                            Замовлення на сумму від 800 грн - доставка безкоштовно
                        </p>

                        <button>Хочу замовити</button>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default BuyUsPage;