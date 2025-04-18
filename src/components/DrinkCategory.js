import React from "react";

const DrinkCategory = ({ category }) => {
    return (
        <article className="category-card">
            <h2>{category.title}</h2>
            <figure className="category-figure">
                <img src={category.img} alt={category.category} />
            </figure>
            <button className="button">Add Flavor</button>
        </article>
    )
}

export default DrinkCategory;