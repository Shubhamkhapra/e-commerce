const stripe = require('../stripe'); 
const webHookHandlers = {
    "checkout.session.completed" : (data)=>{
        console.log("checkout completed successfully", data)
        //connect to db save and email send user.

    },
    "payment_intent.succeeded" :(data)=>{
        console.log("payment successfully ", data)
    },
    "payment_intent.payment_failed" : (data)=>{
        console.log("payment failed", data)
    }
}

function webhook(req, res) {
    const sig = req.headers['stripe-signature'];
    let event;
    try {
        event = stripe.webhooks.constructEvent(req.rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (error) {
        return res.status(400).send(`Webhook error: ${error.message}`);
    }

    if (webHookHandlers[event.type]) {
        webHookHandlers[event.type](event.data.object);
    }

    res.json({ received: true });
}

module.exports = webhook;