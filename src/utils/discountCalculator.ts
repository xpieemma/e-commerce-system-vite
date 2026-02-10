//src/utils/discountCalculator.ts
// Create a calculateDiscount() 
// function to handle discount 
// calculations for product

// if a product costs $100 and
//  has a 10% discount, 
// the function should return $10.


export function calculateDiscount(price : number, discountPercentage: number) {

    return (price * discountPercentage/100);
}
export function calculateDiscountPrice(price: number, discountPercentage:number) : number {
   return  price - calculateDiscount(price, discountPercentage);
}