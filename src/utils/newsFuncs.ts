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
      if (category.url === "/" + categoryUrl) return category.name;
   }
   return null;
}

//  getNewsDataFromArray return a news object from the array of news objects by category name and object id
interface getNewsDataFromArrayInterface {
   newsId: number,
   news_data: NewsItem[]
}

export async function getNewsDataFromArray({ newsId, news_data }: getNewsDataFromArrayInterface): Promise<NewsItem | null> {
   if (typeof newsId !== 'number') throw new Error('Invalid newsId');
   const result = news_data.find((item) => item.id === newsId);

   return result || null;
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
