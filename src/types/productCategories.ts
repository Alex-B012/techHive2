export interface ProductCategory {
   id: number;
   name: string;
   promo: {
      home: {
         text: string;
         img: string;
      };
      pricing_cat: {
         text: string;
         img: string;
      };
   };
   desc: string;
}