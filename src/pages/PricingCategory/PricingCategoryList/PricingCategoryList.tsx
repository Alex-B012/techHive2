import { useParams } from 'react-router-dom'
import { ProductCategory } from '../../../types/productCategories'
import './pricingCategoryList.css'
import PricingCategoryCard from './PricingCategoryCard/PricingCategoryCard';
import SelectPricingCategory from './SelectPricingCategory/SelectPricingCategory';
import { removeAllWhitespace } from '../../../utils/misc';
import { ProductsData } from '../../../types/products/products';

interface PricingCategoryListProp {
   data: ProductCategory[],
   products_data: ProductsData,
}

function PricingCategoryList({ data, products_data }: PricingCategoryListProp) {
   const { categoryUrl } = useParams<{
      categoryUrl: string;
   }>();

   console.log("categoryUrl", categoryUrl)
   let categoryUrl_prepared = "";
   if (categoryUrl) categoryUrl_prepared = removeAllWhitespace({ str: categoryUrl });

   const arrOfProduct = Object.entries(products_data).forEach(([key, value]) => {
      console.log(`${key}: ${value}`);
   });

   return (
      <div className='pricingCategoryList__container'>
         <SelectPricingCategory data={data} />
         PricingCategoryList


         {/* {products_data.laptops.map((item) => <PricingCategoryCard data={item} key={item.id} />)} */}
         {/* {products_data.computers.map((item) => <PricingCategoryCard data={item} key={item.id} />)} */}
      </div>
   )
}

export default PricingCategoryList