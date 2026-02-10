//src/services/apiService.ts

// API requests using async/await and Promises.
// functions to fetch product data and 
// handle errors using try/catch

const _URL = "https://dummyjson.com/products";

export async function fetchProducts() {
    try {
        const response = await fetch(_URL);

        if(!response.ok) {
            throw new Error(`Status: ${response.status}. Products failed to fetch`)
        }
        const donnees = await response.json();
        return donnees.products;

    } catch (err) {
        console.error("Error fetching the products: ", err);
        throw err;

    }
}