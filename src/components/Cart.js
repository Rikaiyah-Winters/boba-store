import React from "react";
import IndividualDrnkOrder from "./IndividualDrinkOrder";

const Cart = () => {
    let orders = [] //collects drink orders, might have to relocate this 
    return(
        <div className="cart">
            <h1>Your cart</h1>
        </div>
        {/*(orders.map((order) => (
            <IndividualDrnkOrder />
          )))*/}

    )
}

export default Cart;
