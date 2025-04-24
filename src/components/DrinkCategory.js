import React from "react";

const DrinkCategory = ({ category, showCustomizeDrinkPage }) => {
    return (
        <article className="category-card">
            <h2>{category.title}</h2>
            <figure className="category-figure">
                <img src={category.img} alt={category.category} />
            </figure>
            <button className="button" onClick={showCustomizeDrinkPage}>Add Flavor</button>
        </article>
    )
}

export default DrinkCategory;