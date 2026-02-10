//src/utils/taxCalculator.ts

//calculateTax() function to handle tax 
// calculations for products.
// if a product costs $100 and is taxed at 10%,
//  the function should return $10. (same reasoning as discount)

//  the product data returned from 
// the API does not include a taxPercentage 
// field like it includes a discountPercentage field. 

// default standard tax rate of 4.75% to each product; 
// however, products with a category of “groceries” 
// should only be taxed at 3%.

// import { Product } from "../models/Product.ts";

export function calculateTax(price: number, category: string) : number {
    const taxStandard = .0475;
    const taxGrocery = .03;

    const rate =  category.toLowerCase() === 'groceries' ?  taxGrocery : taxStandard;
    // ?  true : false 
    return price * rate;
}