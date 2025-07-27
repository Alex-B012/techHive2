// Fisher-Yates (or Knuth) shuffle algorithm
export function shuffleArray<T>(array: T[]): T[] {
   for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
   }
   return array;
}


// Кemove empty objects; shuffle and limit the array up to 6 object
export function prepareNewsArray<T extends { promoTitle?: string }>(array: T[]): T[] {
   const filteredArray = array.filter(item => item.promoTitle && item.promoTitle.length > 0);

   const shuffledArray = shuffleArray(filteredArray);
   if (filteredArray.length <= 6) {
      return filteredArray;
   }
   return shuffledArray.slice(0, 6);
}