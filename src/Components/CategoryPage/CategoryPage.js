import "./CategoryPage.css"
import ProductCard from "../../Components/ProductCard/ProductCard"

function CategoryPage () {
    return (
        <main>
            <div className="category--container">
                <h1>Основні страви</h1>
                <div className="products">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </main>
    )
};

export default CategoryPage

