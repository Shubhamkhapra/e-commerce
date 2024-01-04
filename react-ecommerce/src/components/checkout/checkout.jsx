import React, {useContext, useState} from "react";
import { CartContext } from "../../context/cart-context";
import Layout from "../shared/layout";
// import StripeCheckout from "./stripe-checkout/strip-checkout";
import ShippingAddress from "./custom-checkout/shipping-address";
import "./checkout.styles.scss"
import CustomCheckout from "./custom-checkout/Customcheckout";

const Checkout = ()=>{
    const {itemCount, total, cartItems} = useContext(CartContext);
    const [shipping, setShipping] = useState(null);
    const addressShown = {
        display: (shipping ? "none" : "block")
    }
    const cardShown = {
        display: (shipping ? "block" : "none")
    }
    // debugger;
    return (
        <Layout>
            <div className="checkout">
                <h2>Checkout Summary</h2>
                <h3>{`Total Items: ${itemCount}`}</h3>
                <h4>{`Amount to pay: $ ${total}`}</h4>
                    {/* <StripeCheckout /> */}
                <div style={addressShown}>
                    <ShippingAddress setShipping={setShipping} />
                </div>
                <div style={cardShown}>
                    <CustomCheckout { ... {shipping, cartItems}} />
                </div>
            </div>
        </Layout>
    )

}

export default Checkout;