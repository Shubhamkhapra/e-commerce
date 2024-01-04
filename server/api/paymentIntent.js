const stripeAPI = require("../stripe");

async function paymentIntent(req, res){
    const {cartItems, description, receipt_email, shipping} = req.body;
    let paymentIntent;
    try {
        paymentIntent = await stripeAPI.paymentIntents.create({
            amount: calculateOrderAmount(cartItems),
            currency: "usd",
            description: description,
            payment_method_types: ["card"],
            receipt_email: receipt_email,
            shipping: shipping
        });
        res.status(200).json({
            clientSecret: paymentIntent.client_secret
        })
    } catch (error) {
        console.log("PaymentIntent Fail ",error);
        res.status(400).json({
            error: "an error occurred, unable to create payment intent"
        })
    }
}

function calculateOrderAmount(cartItems){
     return cartItems.reduce((total, item) => {
        return total + (item.price * item.quantity);
     }, 0) * 100;
}

module.exports.paymentIntent = paymentIntent;