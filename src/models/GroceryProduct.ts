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
            this.getPriceWithDiscount(),
            this.getCategory()
        );
    
    return Number ((this.getPriceWithDiscount() + groceryTax).toFixed(2));
    }
}