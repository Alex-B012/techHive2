import './promoCatOffers.css'
import { ProductCategory } from "../../types/productCategories";
import { prepareArrayWithLimit } from "../../utils/arrayFuncs";
import PromoCatOffersCard from './PromoCatOffersCard/PromoCatOffersCard';

interface PromoCatOffersProps {
   arr_data: ProductCategory[];
   title: string;
}

function PromoCatOffers({ arr_data, title }: PromoCatOffersProps) {
   const filteredObjs = prepareArrayWithLimit(arr_data);

   return (
      <div className="promoCatOffers__container">
         <h3 className="promoCatOffers__title">{title}</h3>
         <div className="promoCatOffers__cardsList">
            {filteredObjs.map((item) => <PromoCatOffersCard data={item} key={item.id} />)}
         </div>
      </div>
   )
}

export default PromoCatOffers