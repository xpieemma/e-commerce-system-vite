import { ElectronicsProduct } from "../models/ElectronicsProduct.ts";
import { GroceryProduct } from "../models/GroceryProduct.ts";
import type { Product } from "../models/Product.ts";

export class ProductFactory {
    static create(prod:any): Product {
    if (prod.category.toLowerCase() === "groceries"){
        return new GroceryProduct(
        prod.id,
        prod.price,
        prod.category,
        prod.title,
        prod.discountedPrice,
        prod.discountPercentage, prod.description,
        prod.rating

        );
    }


return new ElectronicsProduct (
        prod.id,
        prod.price,
        prod.category,
        prod.title,
        prod.discountedPrice,
        prod.discountPercentage, prod.description,
        prod.rating
    );

    }
}