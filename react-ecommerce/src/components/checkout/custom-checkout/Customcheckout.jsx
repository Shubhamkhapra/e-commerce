import React, { useState, useEffect } from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  useStripe,
  useElements,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import { fetchFromAPI } from "../../../helper";
import { withRouter } from "react-router-dom";

const CustomCheckout = ({ shipping, cartItems, history })=> {
    // debugger  
  const [processing, setProcessing] = useState(false);
    const [error, setError] = useState(null);
    const [clientSecret, setClientSecret] = useState(null);
    const elements = useElements();
    const stripe = useStripe();
    // debugger;
    useEffect(()=>{
        const items = cartItems.map(item => ({price: item.price, quantity: item.quantity}));
       if(shipping){
        const body = {
            cartItems: items,
            shipping: {
              name: shipping.name,
              address: {
                line1: shipping.address
              }
            },
            description: 'payment intent for sk shop',
            receipt_email: shipping.email,
          }

          const customCheckouts = async () => {
            const { clientSecret } = await fetchFromAPI('create-payment-intent', {
              body
            });
            setClientSecret(clientSecret)

          }
          customCheckouts();
        }
    }, [shipping, cartItems])

    const handleCheckout = async () => {
        setProcessing(true);
        debugger

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardNumberElement),
                billing_details: {
                    name: shipping.name,
                    email: shipping.email,
                    address: {
                        city: shipping.city,
                        line1: shipping.address,
                        line2: shipping.address,
                        postal_code: shipping.postal_code,
                        state: shipping.state,
                        country: "US"
                    }
                }
            },
            return_url: "http://localhost:3000/success"
        });
        if(payload.error){
            setError(`Payment failed ${payload.error.message}`);
            setProcessing(false);
        }else{
            setError(null);
            setProcessing(false);
            history.push("/success");
        }
    }

    const cardHandleChange =  (event) => {
        setError(event.error ? event.error.message : "");
    };
    const cardStyle = {
        style: {
          base: {
            color: "#000",
            fontFamily: 'Roboto, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
              color: "#606060",
            },
          },
          invalid: {
            color: "#fa755a",
            iconColor: "#fa755a"
          }
        }
      };
    return(
        <div>
            <h4>Enter Payment Details</h4>
            <div className={"stripe-card"}>
                <CardNumberElement 
                 className={"card-element"}
                 options={cardStyle}
                 onChange={cardHandleChange}
                />
            </div>
            <div className={"stripe-card"}>
                <CardExpiryElement 
                 className={"card-element"}
                 options={cardStyle}
                 onChange={cardHandleChange}
                />
            </div>
            <div className={"stripe-card"}>
                <CardCvcElement 
                 className={"card-element"}
                 options={cardStyle}
                 onChange={cardHandleChange}
                />
            </div>
            <div className={"submit-btn"}>
                <button className={"button is-black nomad-btn submit"} onClick={()=>handleCheckout()}
                disabled = {processing}>
                   {
                       processing ? "Processing" : "Pay Now"
                    }
                </button>
            </div>
            {
                error && <p className={"error-message"}>{error}</p>
            }
        </div>
    )
}


export default withRouter(CustomCheckout);