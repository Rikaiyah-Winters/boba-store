import React from "react";

const CustomizeDrink = () => {
    return (
        <div>
            <h1>{category.title}</h1>
            <form>
                <label for="flavor">Choose a Flavor</label>
                <select name="flavors">
                    <option value="Sun's">"Sun's Milk Tea"</option>
                    <option value="Classic">"Classic Milk Tea"</option>
                    <option value="Black">"Black Sugar Milk Tea"</option>
                    <option value="Taro">"Taro Milk Tea"</option>
                    <option value="Mango">"Mango Milk Tea"</option>
                    <option value="Coconut">"Coconut Milk Tea"</option>
                    <option value="Matcha">"Matcha Milk Tea"</option>
                    <option value="Thai">"Thai Tea Milk Tea"</option>
                    <option value="Red">"Red Bean Milk Tea"</option>
                    <option value="Strawberry">"Strawberry Milk Tea"</option>
                    <option value="Honeydew">"Honeydew Milk Tea"</option>
                    <option value="Pineapple">"Pineapple Milk Tea"</option>
                    <option value="Vanilla">"Vanilla Milk Tea"</option>
                    <option value="Avocado">"Avocado Milk Tea"</option>
                </select>

                <label for="boba-topping">Choose Boba Topping</label>
                <select name="boba-toppings">
                    <option>"Black Boba"</option>
                    <option>"Crystal Boba"</option>
                    <option>"Bursting Boba"</option>
                    <option>"Flavor Jelly"</option>
                    <option>"Rainbow Jelly"</option>
                    <option>"Taro"</option>
                </select>

                <h3>Price: $X.XX</h3>
            </form>
        </div>

    )
};

export default CustomizeDrink;