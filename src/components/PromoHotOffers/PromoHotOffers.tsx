import "./promoHotOffers.css"
import { ProductCategory } from "../../types/productCategories";
import PromoHotOffersCard from "./PromoHotOffersCard/PromoHotOffersCard"
import { prepareArrayWithLimit } from "../../utils/arrayFuncs";

interface PromoHotOffersProps {
   arr_data: ProductCategory[];
}



function PromoHotOffers({ arr_data }: PromoHotOffersProps) {
   const filteredObjs = prepareArrayWithLimit(arr_data);

   return (
      <div className="promoHotOffers__container">
         <h3 className="promoHotOffers__title">Our hottest offers</h3>
         <div className="promoHotOffers__cardsList">
            {filteredObjs.map((item) => <PromoHotOffersCard data={item} key={item.id} />)}
         </div>
      </div>
   )
}

export default PromoHotOffers