import { Link } from 'react-router-dom';
import { ProductCategory } from '../../../../types/productCategories';
import './pricingCategoryCard.css'

interface PricingCategoryCardProp {
   data: ProductCategory;
}

function PricingCategoryCard({ data }: PricingCategoryCardProp) {
   return (
      <div className='pricingCategoryCard__container'>
         <Link className='pricingCategoryCard__link' to={`/pricing/${data.name.toLowerCase()}`}>
            <img className='pricingCategoryCard__img' src={data.promo.pricing_cat.img} alt={data.name} />
            <h4 className="promoCatOffersCard__heading">{data.name}</h4>
         </Link>

      </div>
   )
}

export default PricingCategoryCard