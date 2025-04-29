import React from "react";

const CustomizeMilkTea = () => {
    return (
        <div className="milk-tea-custom-page">
            <h1>Create Your Milk Tea</h1>
            <form className="milk-tea-form">
                <div className="milk-tea-flavors">
                    <label for="flavor"><h2>Choose a Flavor</h2></label>
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
                </div>

                <div className="milk-tea-toppings">
                    <label for="boba-topping"><h2>Choose Boba Topping</h2></label>
                    <select name="boba-toppings">
                        <option>"Black Boba"</option>
                        <option>"Crystal Boba"</option>
                        <option>"Bursting Boba"</option>
                        <option>"Flavor Jelly"</option>
                        <option>"Rainbow Jelly"</option>
                        <option>"Taro"</option>
                    </select>
                </div>

                <div>
                    <h3>Price: $X.XX</h3>
                </div>

                <button>Add to Cart</button>
            </form>
        </div>

    )
};

export default CustomizeMilkTea;