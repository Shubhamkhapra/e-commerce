import React  from "react";
import shoppingBag from "../../assets/shopping-bag.png";
import "./cart-icon.style.scss";


const CartIcon = () => {
    return (
        <div className='cart-container'>
            <img src={shoppingBag} alt="shopping-bag"/>
            <span className='cart-count'>0</span>
        </div>
    )
}

export default CartIcon;