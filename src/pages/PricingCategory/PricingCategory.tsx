import { useEffect } from 'react';
import { productCategories_data } from '../../data/pricing/pr_productCategories'
import ProductNavigation from '../Product/components/ProductNavigation/ProductNavigation'
import './pricingCategory.css'
import PricingCategoryList from './PricingCategoryList/PricingCategoryList'
import { scrollToTop } from '../../utils/miscUtils';

function PricingCategory() {
   useEffect(() => {
      scrollToTop();
   }, []);
   return (
      <div className='pricingCategoryPage'>
         <div className="pricingCategoryPage__empty"></div>
         <div className="pricingCategoryPage__container">
            <ProductNavigation />
            <PricingCategoryList data={productCategories_data} />
         </div>
      </div>
   )
}

export default PricingCategory