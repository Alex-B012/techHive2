import PromoHotOffers from "../../components/PromoHotOffers/PromoHotOffers"
import "./pricing.css"
import { productCategories_data } from "../../data/pricing/pr_productCategories"
import PromoCatOffers from "../../components/PromoCatOffers/PromoCatOffers"

function Pricing() {
   return (
      <div className='pricingPage'>
         <div className="pricingPage__empty"></div>
         <div className="pricingPage__container">
            <PromoHotOffers arr_data={productCategories_data} title={"Our hottest offers"} />

            <PromoCatOffers arr_data={productCategories_data} title={"Back to School Picks"} />
            <PromoCatOffers arr_data={productCategories_data} title={"Shop by Category"} />

         </div>
      </div>
   )
}

export default Pricing