// getCategoryUrl function return a category name from the categories object

import { NewsItem } from "../types/newsPanel";

interface NewsCategory {
   name: string;
   url: string;
}

interface NewsCategoriesObjInfo {
   [key: string]: NewsCategory;
}

interface getCategoryUrlProp {
   categoryName: string;
   categoriesArr: NewsCategoriesObjInfo;
}

export function getCategoryUrl({ categoryName, categoriesArr }: getCategoryUrlProp): string | null {
   for (const key in categoriesArr) {
      const category = categoriesArr[key];
      if (category.name === categoryName) return category.url;
   }

   return null;
}


//  getNewsDataFromArray return a news object from the array of news objects by category name and object id
interface getNewsDataFromArray {
   newsId: number,
   news_data: NewsItem[]
}

export async function getNewsDataFromArray({ newsId, news_data }: getNewsDataFromArray): Promise<NewsItem | null> {
   if (typeof newsId !== 'number') throw new Error('Invalid newsId');
   const result = news_data.find((item) => item.id === newsId);

   return result || null;
}
