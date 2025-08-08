import { useCallback } from 'react';
import { Computer } from '../types/products/computers';
import { Laptop } from '../types/products/laptops';

export const useLoadProductData = (categoryUrl: string) => {
   return useCallback(async () => {
      try {
         if (categoryUrl === 'laptops') {
            const { laptops_data } = await import('../data/pricing/pr01_laptops');
            return laptops_data;
         } else if (categoryUrl === 'computers') {
            const { pc_data } = await import('../data/pricing/pr02_pc');
            return pc_data;
         }
      } catch (error) {
         console.error('Failed to load data:', error);
         return [];
      }
   }, [categoryUrl]);
};

export const useGetProductObj = (
   categoryUrl: string,
   laptops_dataArr: Laptop[],
   pc_dataArr: Computer[],
   productId_int: number
) => {
   return useCallback(() => {
      try {
         if (categoryUrl === 'laptops' && laptops_dataArr.length > 0) {
            return laptops_dataArr.find((item) => item.id === productId_int) || null;
         } else if (
            categoryUrl === 'computers' &&
            pc_dataArr.length > 0
         ) {
            return pc_dataArr.find((item) => item.id === productId_int) || null;
         }
         return null;
      } catch (error) {
         console.error('Could not find the requested item:', error);
         return null;
      }
   }, [
      categoryUrl,
      laptops_dataArr,
      pc_dataArr,
      productId_int,
   ]);
};

// Convert integer values to decimal and display price
export function displayPrice(num: number, currency: string = 'USD', toFixed: number = 2): string {
   const formattedNumber = (num / 100).toFixed(toFixed);
   return `${currency} ${formattedNumber.replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
}