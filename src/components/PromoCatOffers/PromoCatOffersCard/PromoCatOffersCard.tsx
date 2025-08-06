import './promoCatOffersCard.css'
import { Link } from 'react-router-dom'
import { ProductCategory } from '../../../types/productCategories';

interface PromoCatOffersCardProps {
   data: ProductCategory;
}

function PromoCatOffersCard({ data }: PromoCatOffersCardProps) {
   const categoryUrl = data.name.toLowerCase();

   return (
      <div className='promoCatOffersCard__container'>
         <Link to={`/pricing/${categoryUrl}`} className="promoCatOffersCard__link">
            <img src={data.promo.pricing_cat.img} alt={data.name} className="promoCatOffersCard__img" />
            <h4 className="promoCatOffersCard__heading">{data.name}</h4>
         </Link >
      </div >
   )
}

export default PromoCatOffersCard