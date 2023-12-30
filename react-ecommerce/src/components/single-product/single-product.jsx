import React, { useContext, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { ProductsContext } from "../../context/products-context";
import Layout from "../shared/layout";
import "./single-product.style.scss";

const SingleProduct = ({ match, history: { push } }) => {
    debugger
    const { products } = useContext(ProductsContext);
    const { id } = match.params;
    const [product, setProduct] = useState(null);
    useEffect(() => {
        const product = products.find((item) => Number(item.id) === Number(id));
        // if product does not exist, redirect to shop page
        if (!product) {
            return push("/shop");
        }
        // setProduct to the found product. state will cause component to re-render
        setProduct(product);
    }, [id, product, push, products]);
    // if product is null, return null
    if (!product) {
        return null;
    }
    const { imageUrl, title, price, description } = product;
    return (
        <Layout>
            <div className="single-product-container">
                <div className="p-image">
                    <img src={imageUrl} alt="product" />
                </div>
                <div className="p-details">
                    <div className="name-price">
                        <h1>{title}</h1>
                        <p>${price}</p>
                    </div>
                    <div className="add-to-cart-btns">
                        <button className="button is-white sk-btn" id ="btn-white-outline">Add to cart</button>
                        <button className="button is-black sk-btn" id ="btn-white-outline">Proceed to checkout</button>
                    </div>
                    <div className="p-description">
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default  withRouter(SingleProduct);
