import { calculateDiscountPrice } from "../utils/discountCalculator.ts";
import { calculateTax } from "../utils/taxCalculator.ts";
import { Product } from "./Product.ts";


export class ElectronicsProduct extends Product {
    getPriceWithDiscount(): number {
        return Number (calculateDiscountPrice(this.getPrice(), this.getDiscountPercentage()).toFixed(2));
    }
    getPriceWithTax(): number {
        const tax = calculateTax(
            this.getPrice(),
            this.getCategory()
        );
        return Number ((this.getPrice() + calculateTax(this.getPrice(), this.getCategory())).toFixed(2));
    }
}