import "./ProductPage.css"
import food_test from "../../images/food_test.jpg"
import ProductCard from "../../Components/ProductCard/ProductCard"




function ProductPage () {
    return (
        <main>
            <div className="product--page--container">
                <div className="product--overview">
                    <img src={food_test} alt="food"/>
                    <div className="product--info">
                        <h2 className="product--title">Овочі в східному стилі</h2>
                        <p>Склад: перець, баклажан, морква, паприка, сезам, оливкова олія, сіль, перець</p>
                        <hr />
                        <button className="weight--button">250 г</button>
                        <button className="weight--button">500 г</button>
                        <button className="weight--button">1000 г</button>
                        <h1>120 грн/порц</h1>
                        <div className="buy--options">
                            <button className="buy">Хочу замовити</button>

                            <div className="count">
                                <button className="count">-</button>
                                <h2>1</h2>
                                <button className="count">+</button>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className="product--reviews">

                    <div className="reviews--buttons">
                        <button className="active">Відгуки</button>
                        <button>Як це готувати?</button>
                        <button>Рецепт цього шедевру</button>
                    </div>

                    <div className="user--info">
                        <h3>Олексій</h3>
                    </div>
                    

                    <p>Мені дуже сподобалося, як овочі приготовані. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <button className="add--review">Залишити відгук</button>
                </div>
                    
                <div className="offers">
                    <h3>Що ще посмакувати?</h3>
                    <div className="items">
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                    </div>
                </div>

            </div>
        </main>
    )
};

export default ProductPage;