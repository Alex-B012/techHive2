import "./promoHotOffers.css"
import { ProductCategory } from "../../types/productCategories";
import { prepareArrayWithLimit } from "../../utils/arrayUtils";
import PromoHotOffersCard from "./PromoHotOffersCard/PromoHotOffersCard"

interface PromoHotOffersProps {
   arr_data: ProductCategory[];
   title: string;
}

function PromoHotOffers({ arr_data, title }: PromoHotOffersProps) {
   const filteredObjs = prepareArrayWithLimit(arr_data);

   return (
      <div className="promoHotOffers__container">
         <h3 className="promoHotOffers__title">{title}</h3>
         <div className="promoHotOffers__cardsList">
            {filteredObjs.map((item) => <PromoHotOffersCard data={item} key={item.id} />)}
         </div>
      </div>
   )
}

export default PromoHotOffers