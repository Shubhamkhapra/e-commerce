import React from "react";
import Layout from "./shared/layout";

const NotFound = () => {
    const styles = {
        fontWeight: "bold",
        textAlign: "center",
    }
    return (
        <Layout>
            <div style={styles}>
                <h1>404</h1>
                <h2>Sorry, page not found</h2>
            </div>
        </Layout>
    )
}


export default NotFound;