export const isInCart = (product, cartItems) =>{
    return cartItems.find(item=> item.id === product.id);
}

const API = "http://localhost:8080";
export async function fetchFromAPI(endpoint, opts) {
    const { method, body } = { method: "POST", body: null, ...opts };

    try {
        const response = await fetch(`${API}/${endpoint}`, {
            method,
            ...(body && { body: JSON.stringify(body) }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            // Handle non-2xx responses
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jsonResponse = await response.json();
        console.log("Success", jsonResponse);
        return jsonResponse;
    } catch (error) {
        console.error("Request error", error);
        return { error: error.message };
    }
}
