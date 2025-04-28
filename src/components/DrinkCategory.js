import React from "react";

const DrinkCategory = ({ category, showCustomizeMilkTeaPage }) => {
    return (
        <article className="category-card">
            <h2>{category.title}</h2>
            <figure className="category-figure">
                <img src={category.img} alt={category.category} />
            </figure>
            <button className="button" onClick={showCustomizeMilkTeaPage}>Add Flavor</button> {/*This might have to contain a conditional statement when seperate tea&lemonade form/component is added */}
        </article>
    )
}

export default DrinkCategory;