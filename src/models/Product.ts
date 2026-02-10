//src/models/Products.ts

// https://dummyjson.com/docs/products

// API request 
// handle errors
// display production information 


// thorougly read through the requirements for the 
// project before planing it 

// Define a "Product class" that includes the appropriate properties 
// based on data provided in the API response.
// displayDetails() and getPriceWithDiscount()

 export abstract class Product {
   private id: number;
   private description: string;
    private rating : number;
    private price: number;
    private category : string;
    private title : string;
    private discountedPrice: number;
    private discountPercentage: number;
    
    constructor(id: number, price:number, category: string, title : string, discountedPrice: number, discountPercentage: number, description: string, rating: number){

        this.id = id;
        this.price = price;
        this.category =category;
        this.title = title;
        this.discountedPrice = discountedPrice;
        this.discountPercentage = discountPercentage;
        this.description = description;
        this.rating = rating

    }
    protected getId() {
      return this.id;
    }
    protected setId(v: number){
      this.id = v;
    }

     getPrice() {
      return this.price;
    }
    protected setPrice(v: number){
      this.price = v;
    }
    protected getDiscountedPrice() {
      return this.discountedPrice;
    }
    protected setDiscountedPrice(v: number){
      this.discountedPrice = v;
    }
     getDescription() {
      return this.description;
    }
    protected setDescription(v: string){
      this.description = v;
    }

    protected getRating() {
      return this.rating;
    }
    protected setRating(v: number){
      this.rating = v;
    }
    protected getCategory() {
      return this.category;
    }
    protected setCategory(v: string){
      this.category = v;
    }
     getTitle() {
      return this.title;
    }
    protected setTitle(v: string){
      this.title = v;
    }
    protected getDiscountPercentage() {
      return this.discountPercentage;
    }
    protected setDiscountPercentage(v: number){
      this.discountPercentage = v;
    }
    
  displayDetails(): string {
    return `Id: ${this.getId()}, Description :${this.getDescription()}
    Title: ${this.getTitle()}
    Description: ${this.getDescription()}
    Category: ${this.getCategory()}
    Rating : ${this.getRating()}
    Price: ${this.getPrice().toFixed(2)}
   Discount Percentage : ${this.getDiscountPercentage()}%`;
  }
  abstract getPriceWithTax(): number;
  abstract getPriceWithDiscount(): number;
}
 
