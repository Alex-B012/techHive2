// getCategoryUrl function return a category name from the categories object

import { NewsItem } from "../types/newsPanel";

interface NewsCategory {
   name: string;
   url: string;
}

export interface NewsCategoriesObjInfo {
   [key: string]: NewsCategory;
}

interface getNewsCategoryUrlProp {
   categoryName: string;
   categoriesArr: NewsCategoriesObjInfo;
}

export interface getNewsCategoryNameProp {
   categoryUrl: string;
   categoriesArr: NewsCategoriesObjInfo;
}

// get news url by category name
export function getNewsCategoryUrl({ categoryName, categoriesArr }: getNewsCategoryUrlProp): string | null {
   for (const key in categoriesArr) {
      const category = categoriesArr[key];
      if (category.name === categoryName) return category.url;
   }
   return null;
}

// get news category name by url 
export function getNewsCategoryName({ categoryUrl, categoriesArr }: getNewsCategoryNameProp): string | null {
   for (const key in categoriesArr) {
      const category = categoriesArr[key];
      console.log("categoryUrl", categoryUrl)
      console.log("categoriesArr", categoriesArr)
      if (category.url === categoryUrl) return category.name;
   }
   return null;
}

//  getNewsDataFromArray returns a news object from the array of news objects by category name and object id
interface getNewsDataFromArrayInterface {
   newsId: number,
   news_data: NewsItem[]
}

export async function getNewsDataFromArray({ newsId, news_data }: getNewsDataFromArrayInterface): Promise<NewsItem | null> {
   if (typeof newsId !== 'number') throw new Error('Invalid newsId');
   const result = news_data.find((item) => item.id === newsId);
   return result || null;
}

//  getNewsCategoryDataFromArray returns an array of news objects from the array of news objects by category name
interface getNewsCategoryDataFromArrayInterface {
   newsCategoryUrl_par: string;
   news_data: NewsItem[];
   categoriesArr: NewsCategoriesObjInfo;
}

export async function getNewsCategoryDataFromArray({
   newsCategoryUrl_par,
   news_data,
   categoriesArr
}: getNewsCategoryDataFromArrayInterface): Promise<{ resultArr: NewsItem[] } | null> {

   if (typeof newsCategoryUrl_par !== 'string') {
      throw new Error('The newsCategoryUrl_par parameter must be a string');
   }

   const category = Object.values(categoriesArr).find(
      cat => cat.url === newsCategoryUrl_par
   );

   if (!category) {
      console.warn('No news items found for the specified category');
      return null;
   }

   const resultArr = news_data.filter(item =>
      item.category === category.name
   );

   if (resultArr.length === 0) {
      console.warn('No news items found for the specified category');
      return null;
   }

   return { resultArr };
}

// Change the height of the iframe accorging to the current width of the video
export function changeIframeHeight(element: HTMLElement) {
   console.log('Элемент:', element);

   if (!element) return;

   const width = element.offsetWidth;
   const aspectRatio = 16 / 9;
   const newHeight = width / aspectRatio;

   element.style.height = `${Math.round(newHeight)}px`;
   element.style.width = '100%';
}
