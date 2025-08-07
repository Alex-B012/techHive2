import { useParams } from 'react-router-dom'
import './pricingCategoryList.css'
import { products_data } from '../../../data/pricing/pr_pricing';
import { removeAllWhitespace } from '../../../utils/misc';
import { prepareCategoryCardsArr } from '../../../utils/arrayFuncs';

import { ProductCategory } from '../../../types/productCategories'
import { PricingCategoryCardInterface, ProductsData } from '../../../types/products/products';

import PricingCategoryCard from './PricingCategoryCard/PricingCategoryCard';
import SelectPricingCategory from './SelectPricingCategory/SelectPricingCategory';
import PricingCategoryNoData from './PricingCategoryNoData/PricingCategoryNoData';
import { useEffect, useState } from 'react';
import SortPricingCategory from './SortPricingCategory/SortPricingCategory';

interface PricingCategoryListProp {
   data: ProductCategory[],
}

function PricingCategoryList({ data }: PricingCategoryListProp) {
   const [sortedArray, setSortedArray] = useState<PricingCategoryCardInterface[]>([]);
   const [selectedValue, setSelectedValue] = useState('price');
   const [sortOrder, setSortOrder] = useState(true);
   const { categoryUrl } = useParams<{
      categoryUrl: string;
   }>();

   let categoryUrl_prepared = "";
   if (categoryUrl) categoryUrl_prepared = removeAllWhitespace(categoryUrl);

   // Move the array preparation inside useEffect
   useEffect(() => {
      let allArray: PricingCategoryCardInterface[] = prepareCategoryCardsArr({
         productsObj: products_data as ProductsData,
         category: categoryUrl_prepared
      });

      // Initial sorting based on default values
      const sorted = [...allArray].sort((a, b) => {
         if (selectedValue === 'price') {
            const priceA = a.price.discount.price || a.price.current;
            const priceB = b.price.discount.price || b.price.current;
            return sortOrder ? priceA - priceB : priceB - priceA;
         }
         if (selectedValue === 'name') {
            return sortOrder
               ? a.name.localeCompare(b.name)
               : b.name.localeCompare(a.name);
         }
         return 0;
      });

      setSortedArray(sorted);
   }, [categoryUrl_prepared, selectedValue, sortOrder]);

   return (
      <div className="pricingCategoryList__container">
         <SelectPricingCategory data={data} />
         <SortPricingCategory
            value={{
               value: selectedValue,
               valueFunc: setSelectedValue
            }}
            sortOrder={{
               sortOrder: sortOrder,
               sortOrderFunc: setSortOrder
            }}
         />
         {sortedArray.map((item) =>
            <PricingCategoryCard item_data={item} key={item.id} />
         )}
         {sortedArray.length === 0 && <PricingCategoryNoData />}
      </div>
   );
}

export default PricingCategoryList
