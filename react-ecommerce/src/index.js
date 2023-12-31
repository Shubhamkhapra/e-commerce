import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductsContextProvider from "./context/products-context.jsx";
import CartContextProvider from './context/cart-context.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
  <BrowserRouter>
  <ProductsContextProvider>
    <CartContextProvider>
    <App />
    </CartContextProvider>
  </ProductsContextProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
reportWebVitals();
