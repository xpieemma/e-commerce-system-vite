import { calculateDiscountPrice } from "../utils/discountCalculator.ts";
import { calculateTax } from "../utils/taxCalculator.ts";
import { Product } from "./Product.ts";

export class GroceryProduct extends Product {
    getPriceWithDiscount(): number {
        return Number ( calculateDiscountPrice(
            this.getPrice(),
            this.getDiscountPercentage()
        ).toFixed(2));
        
    }

    getPriceWithTax(): number {
        const groceryTax = calculateTax(
            this.getPrice(),
            this.getCategory()
        );
    
    return Number ((this.getPrice() + groceryTax).toFixed(2));
    }
}