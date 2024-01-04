import React, { useContext, useState } from "react";
import { useStripe } from "@stripe/react-stripe-js";

import { CartContext } from "../../../context/cart-context";

import { fetchFromAPI } from "../../../helper";


function generateNonce() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

const StripeCheckout = () => {
    const [email, setEmail] = useState("");
    const { cartItems } = useContext(CartContext);
   let stripe = useStripe();
    const handleGuestCheckout = async (e) => {
        e.preventDefault();
        const line_items = cartItems.map((item) => {
            return {
                quantity: item.quantity,
                price_data: {
                    currency: "usd",
                    unit_amount: item.price * 100,
                    product_data: {
                        name: item.title,
                        description: item.description,
                        images: [item.imageUrl],
                    },
                },
            };
        });

        let response;
        try {
            response = await fetchFromAPI("create-checkout-session", {
                body: {
                    line_items,
                    customer_email: email,
                },
            });
        } catch (error) {
            console.error("Error in API call", error);
            response = error;
        }

        const { sessionId } = response;
        //stripe.redirectToCheckout given unauthorized error solved this by adding the following code
        const { error } = await stripe.redirectToCheckout({
            sessionId: sessionId,
        });

        if (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleGuestCheckout}>
            <div>
                <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    value={email}
                    className="nomad-input"
                />
            </div>
            <div className="submit-btn">
                <button
                    type="submit"
                    className="button is-black nomad-btn submit"
                    nonce={generateNonce()}
                >
                    Checkout
                </button>
            </div>
        </form>
    );
};

export default StripeCheckout;
