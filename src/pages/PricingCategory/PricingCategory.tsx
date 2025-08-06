import PageNavigation from '../../components/PageNavigation/PageNavigation'
import { products_data } from '../../data/pricing/pr_pricing'
import { productCategories_data } from '../../data/pricing/pr_productCategories'
import './pricingCategory.css'
import PricingCategoryList from './PricingCategoryList/PricingCategoryList'

function PricingCategory() {
   return (
      <div className='pricingCategoryPage'>
         <div className="pricingCategoryPage__empty"></div>
         <div className="pricingCategoryPage__container">
            <PricingCategoryList data={productCategories_data} products_data={products_data} />
         </div>
      </div>
   )
}

export default PricingCategory