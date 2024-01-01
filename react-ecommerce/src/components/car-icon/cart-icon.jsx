import React, {useContext}  from "react";
import { withRouter } from "react-router-dom";
import shoppingBag from "../../assets/shopping-bag.png";
import {CartContext}  from "../../context/cart-context";
import "./cart-icon.style.scss";


const CartIcon = ({history}) => {
    const {itemCount, cartItems} = useContext(CartContext)
    console.log(cartItems)
    return (
        <div className='cart-container' onClick={()=> history.push("/cart")}>
            <img src={shoppingBag} alt="shopping-bag"/>
            {
                itemCount > 0 ?    <span className='cart-count'>{itemCount}</span>  : null
            }
         
        </div>
    )
}

export default withRouter(CartIcon);
