import './promoHotOffersCard.css'
import { Link } from 'react-router-dom'
import { ProductCategory } from '../../../types/productCategories';

interface PromoHotOffersCardProps {
   data: ProductCategory;
}

function PromoHotOffersCard({ data }: PromoHotOffersCardProps) {
   const categoryUrl = data.name.toLowerCase();

   return (
      <div className='promoHotOffersCard__container'>
         <Link to={`/pricing/${categoryUrl}`} className="promoHotOffersCard__link">
            <img src={data.promo.pricing_cat.img} alt={data.name} className="promoHotOfferCard__img" />
            <h3 className="promoHotOfferCard__heading">{data.promo.pricing_cat.text}</h3>
            <div className="promoHotOfferCard__btn">Shop now <span className="promoHotOfferCard__span">{" >"}</span>
            </div>
         </Link >
      </div>
   )
}

export default PromoHotOffersCard