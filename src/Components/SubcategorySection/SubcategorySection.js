import "./SubcategorySection.css"
import mainDishes from "../../images/mainDishes.jpg"

function SubcategorySection (props) {
    return (
        <div className="subcategory">
            <h1 className="subcategory--title">{props.subcategoryName}</h1>
            <div className="category--card">
                <img src={mainDishes} alt="Category" />
                <h3 className="category--name">Основні страви</h3>
            </div>

            <div className="category--card">
                <img src={mainDishes} alt="Category" />
                <h3 className="category--name">Основні страви</h3>
            </div>

            <div className="category--card">
                <img src={mainDishes} alt="Category" />
                <h3 className="category--name">Основні страви</h3>
            </div>

            <div className="category--card">
                <img src={mainDishes} alt="Category" />
                <h3 className="category--name">Основні страви</h3>
            </div>

            <div className="category--card">
                <img src={mainDishes} alt="Category" />
                <h3 className="category--name">Основні страви</h3>
            </div>

            <div className="category--card">
                <img src={mainDishes} alt="Category" />
                <h3 className="category--name">Основні страви</h3>
            </div>
        </div>
    )
};

export default SubcategorySection;