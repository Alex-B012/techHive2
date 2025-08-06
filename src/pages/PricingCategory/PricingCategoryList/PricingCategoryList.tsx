import { useParams } from 'react-router-dom'
import './pricingCategoryList.css'
import { products_data } from '../../../data/pricing/pr_pricing';
import { removeAllWhitespace } from '../../../utils/misc';
import { prepareCategoryCardsArr } from '../../../utils/arrayFuncs';

import { ProductCategory } from '../../../types/productCategories'
import { PricingCategoryCardInterface, ProductsData } from '../../../types/products/products';

import PricingCategoryCard from './PricingCategoryCard/PricingCategoryCard';
import SelectPricingCategory from './SelectPricingCategory/SelectPricingCategory';

interface PricingCategoryListProp {
   data: ProductCategory[],
}

function PricingCategoryList({ data }: PricingCategoryListProp) {
   const { categoryUrl } = useParams<{
      categoryUrl: string;
   }>();

   let categoryUrl_prepared = "";
   if (categoryUrl) categoryUrl_prepared = removeAllWhitespace(categoryUrl);

   let allArray: PricingCategoryCardInterface[] = prepareCategoryCardsArr({
      productsObj: products_data as ProductsData,
      category: categoryUrl_prepared
   });


   return (
      <div className='pricingCategoryList__container'>
         <SelectPricingCategory data={data} />

         {allArray && allArray.map((item) =>
            <PricingCategoryCard item_data={item} key={item.id} />)}
      </div>
   )
}

export default PricingCategoryList