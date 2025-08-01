import { NewsCategoryBtnInfo } from "../types/news";
import { NewsItem } from "../types/newsPanel";
import { PageLinkInterface } from "../types/pageLinks"

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

// Filter pageLink objects by name 
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
