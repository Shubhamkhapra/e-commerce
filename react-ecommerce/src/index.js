import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductsContextProvider from "./context/products-context.jsx";
import CartContextProvider from './context/cart-context.jsx';
import {Elements} from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
const root = ReactDOM.createRoot(document.getElementById('root'));
let stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY)

root.render(
  // <React.StrictMode>
  <BrowserRouter>
  <ProductsContextProvider>
    <CartContextProvider>
      <Elements stripe={stripePromise}>
            <App />
      </Elements>
    </CartContextProvider>
  </ProductsContextProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
reportWebVitals();
