import { NewsCategoryBtnInfo } from "../types/news";
import { NewsItem } from "../types/newsPanel";
import { PageLinkInterface } from "../types/pageLinks"
import { Computer } from "../types/products/computers";
import { Laptop } from "../types/products/laptops";
import { ProductsData } from "../types/products/products"
import { PricingCategoryCardInterface } from "../types/products/products";

// Fisher-Yates (or Knuth) shuffle algorithm
export function shuffleArray<T>(array: T[]): T[] {
   for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
   }
   return array;
}

// Remove empty objects; shuffle and limit the News array up to 4 object
export function prepareNewsArray<T extends { promoTitle?: string }>(array: T[]): T[] {
   const filteredArray = array.filter(item => item.promoTitle && item.promoTitle.length > 0);

   const shuffledArray = shuffleArray(filteredArray);
   if (filteredArray.length <= 4) {
      return filteredArray;
   }
   return shuffledArray.slice(0, 4);
}

// Remove empty News array objects and sort the array by date
export function prepareNewsCards<T extends { title?: string; date?: string }>(array: T[]): T[] {
   const filteredArray = array.filter(item =>
      item.title &&
      item.title.trim().length > 0 &&
      item.date &&
      isValidDateString(item.date)
   );

   return filteredArray.sort((a, b) => {
      if (!a.date || !b.date) return 0;

      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) return 0;
      return dateB.getTime() - dateA.getTime();
   });

   function isValidDateString(dateString: string): boolean {
      const dateParts = dateString.trim().split(/\s+/);
      if (dateParts.length !== 3) return false;

      const monthNames = [
         "January", "February", "March", "April", "May", "June",
         "July", "August", "September", "October", "November", "December"
      ];

      const monthIndex = monthNames.indexOf(dateParts[0]);
      const day = parseInt(dateParts[1], 10);
      const year = parseInt(dateParts[2], 10);

      if (monthIndex === -1 || isNaN(day) || isNaN(year)) return false;

      const date = new Date(year, monthIndex, day);
      return (
         date.getFullYear() === year &&
         date.getMonth() === monthIndex &&
         date.getDate() === day
      );
   }
}


// Filter and sort pageLink objects by name 
export function filterPageLinksByNames(array: PageLinkInterface[], pageNames: string[]): PageLinkInterface[] {
   const filteredPages = array.filter(item => pageNames.includes(item.name));

   return filteredPages.sort((a, b) => {
      const indexA = pageNames.indexOf(a.name);
      const indexB = pageNames.indexOf(b.name);
      return indexA - indexB;
   });
}

// Shuffle and limit the array up to 4 object
export function prepareArrayWithLimit<T>(array: T[], limit: number = 4): T[] {
   const shuffledArray = shuffleArray(array);
   if (array.length <= limit) return shuffledArray;

   return shuffledArray.slice(0, limit);
}

// Get an array of unique news categories
export const getUniqueCategories = (inputArray: NewsItem[]): NewsCategoryBtnInfo[] => {
   const categorySet = new Set<string>();
   inputArray.forEach(item => categorySet.add(item.category));

   return Array.from(categorySet).map((category, index) => ({
      id: index,
      cat_name: category
   }));
};

// Prepare an array of PricingCategoryCard objects for PricingCategoryCards with the provided conditions
export const prepareCategoryCardsArr = ({
   productsObj,
   category,
}: {
   productsObj: ProductsData;
   category: string;
}): PricingCategoryCardInterface[] => {
   const mapProduct = (product: Laptop | Computer): PricingCategoryCardInterface => ({
      id: product.id,
      category: product.category,
      name: product.name,
      brand: product.brand,
      model: product.model,
      price: {
         current: product.price.current,
         discount: product.price.discount
            ? {
               price: product.price.discount.price ?? -1,
               ends_days: product.price.discount.ends_days ?? -1,
            }
            : {
               price: -1,
               ends_days: -1,
            },
      },
      img: product.img,
   });

   let resultArr: PricingCategoryCardInterface[] = [];

   switch (category) {
      case 'pricing': {
         resultArr = [
            ...productsObj.laptops.map(mapProduct),
            ...productsObj.computers.map(mapProduct),
         ];
         break;
      }
      case 'laptops': {
         resultArr = productsObj.laptops.map(mapProduct);
         break;
      }
      case 'computers': {
         resultArr = productsObj.computers.map(mapProduct);
         break;
      }
      default: {
         resultArr = [];
         break;
      }
   }

   return resultArr;
};



