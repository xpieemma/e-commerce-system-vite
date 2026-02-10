// src/main.ts

import { ProductFactory } from "./factory/ProductFactory.ts";
import { ElectronicsProduct } from "./models/ElectronicsProduct.ts";
import { GroceryProduct } from "./models/GroceryProduct.ts";
import { fetchProducts } from "./services/apiService.ts";
import { handleError } from "./utils/errorHandler.ts";

// Import the product classes,
// tax calculator, and API service.
//  instances of Product by fetching
// product data from the API

// ------

// asynchronous functions
// to fetch product data and display it.

// ----

// Demonstrate error handling and
// OOP principles in action.

const DOM = {
  grid: document.getElementById("grid") as HTMLElement,
  searchBtn: document.getElementById("searchBtn") as HTMLBodyElement,
  input: document.getElementById("searchingProduct") as HTMLInputElement,
  heading : document.getElementById("produits") as HTMLElement
};

const lesProduits : (GroceryProduct | ElectronicsProduct)[] = [];

document.addEventListener("click", (evnt) => {
    const target = evnt.target as HTMLElement;
    if (target.closest(".product-card") || 
target === DOM.searchBtn ||
target === DOM.input ||
target === DOM.heading) {
    return;
}
DOM.input.value ="";
renderFn([...lesProduits]);

});

//using immutable list 


function renderFn(products: (GroceryProduct | ElectronicsProduct)[]) {
  if (!DOM.grid) return;
  DOM.grid.innerHTML = "";

  products.forEach((p) => {
    const c = document.createElement("div");
    c.className = "product-card";

    c.innerHTML = `
        <h2>${p.getTitle()} </h2>
        <p>${p.getDescription()}<p>
        <p>Price: $${p.getPrice().toFixed(2)}<p>
        <p>You save: $${(p.getPrice() - p.getPriceWithDiscount()).toFixed(2)} <p>
        <p>$${p.getPriceWithDiscount()} after discount<p>
        <p>$${(p.getPriceWithTax() - p.getPriceWithDiscount()).toFixed(2)} tax<p>
        <p>$${p.getPriceWithTax()} Final price with tax<p>
         `;
    DOM.grid.appendChild(c);
  });
}


  DOM.searchBtn?.addEventListener("click", () => {
    const val = DOM.input.value.trim().toLowerCase();

    const f = 
    val === "" ?
    [...lesProduits] 
    : lesProduits.filter((p) =>
    p.getTitle().toLowerCase().includes(val));
    renderFn(f);
  });


DOM.heading?.addEventListener("click", () => {
    DOM.input.value ="";
    renderFn([...lesProduits]);
});

async function getDisplayProducts() {
  try {
    const product = await fetchProducts();

    // const products : (GroceryProduct | ElectronicsProduct) [] = product.map((prod: any) => {
    //     return ProductFactory.create(prod)
    //     });
    lesProduits.push( ...product.map((prod: any) => ProductFactory.create(prod)));
    renderFn([...lesProduits]); 



    // products.forEach((p) => {
    //     console.log(p.displayDetails());
    //     console.log(`You save: $${(p.getPrice()- p.getPriceWithDiscount()).toFixed(2)}` )
    //     console.log(`$${p.getPriceWithDiscount()} after discount`);
    //     console.log(`$${(p.getPriceWithTax() - p.getPriceWithDiscount()).toFixed(2)} tax`)
    //     console.log(`$${p.getPriceWithTax()} with tax`)
    //     console.log("\n");
    // })
  } catch (err) {
    handleError(err);
  }
}

getDisplayProducts();
