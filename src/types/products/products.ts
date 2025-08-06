import { Computer } from "./computers";
import { Laptop } from "./laptops";

export interface ProductsData {
   laptops: Laptop[];
   computers: Computer[];
}

export interface PricingCategoryCardInterface {
   id: number,
   category: string,
   name: string,
   brand: string,
   model: string,
   price: {
      current: number,
      discount:
      {
         price: number,
         ends_days: number,
      },
   },
   img: string
}