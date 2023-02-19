import julien from "../../images/julien.webp"
import "./ProductCard.css"

function ProductCard () {
    return (
        <div className="product--card">
            <img src={julien} alt="ProductPhoto" className="card--photo"/>
            <div className="card--description">
                <h2 className="card--name">Зрази з мʼясом</h2>
                <h4 className="card--weight">500 г</h4>

                <div className="buy-section">
                    <button className="card--button">До кошика</button>
                    <h3 className="card--price">89 грн</h3>
                </div>
            </div>
        </div>
    )
};

export default ProductCard;