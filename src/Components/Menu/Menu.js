import SubcategorySection from "../../Components/SubcategorySection/SubcategorySection"
import "./Menu.css"

function Menu () {
    return (
        <main>
            <div className="subcategory--container">
                <SubcategorySection subcategoryName = "Готові заморожені страви"/>
                <SubcategorySection subcategoryName = "Натуральні напівфабрикати"/>
            </div>
        </main>
    )
};

export default Menu;