const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require('dotenv').config({
    path: __dirname + '/.env'
});

const CheckoutSession = require("./api/checkout")
const webhook = require("./api/webhook")

const app = express();
const port = 8080;
app.use(express.json(
   { verify: (req, res, buf) => {
        req.rawBody = buf
    }}
));
app.use(cors({
    origin:true
}));

app.use(morgan("dev"));


app.get('/', (req, res)=>{
    res.send("hello world");
})

app.post(
    "/create-checkout-session",
    CheckoutSession.createCheckoutSession
)

app.post(
    "/webhook",
    express.raw({type: 'application/json'}),
    webhook
)   


app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})