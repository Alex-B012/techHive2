import PromoHotOffers from "../../components/PromoHotOffers/PromoHotOffers"
import "./pricing.css"
import { productCategories_data } from "../../data/pricing/pr_productCategories"

function Pricing() {
   return (
      <div className='pricingPage'>
         <div className="pricingPage__empty"></div>
         <div className="pricingPage__container">
            <PromoHotOffers arr_data={productCategories_data} />
         </div>
      </div>
   )
}

export default Pricing