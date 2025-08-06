import { Link } from 'react-router-dom';
import './pricingCategoryCard.css'
import { displayPrice } from '../../../../utils/misc';
import { PricingCategoryCardInterface } from '../../../../types/products/products';

interface PricingCategoryCardProp {
   item_data: PricingCategoryCardInterface;
}

function PricingCategoryCard({ item_data }: PricingCategoryCardProp) {
   const { id, category, name, brand, model, price, img } = item_data;

   const priceDisplay = price.discount.price ? price.discount.price : price.current;
   let discountDisplay = price.discount.price ? price.current - price.discount.price : -100


   return (
      <Link className='pricingCategoryCard__link' to={`pricing/${category}/${id}`} >
         <img className='pricingCategoryCard__img' src={img} alt={model} />
         <div className='pricingCategoryCard__info'>
            <h4 className='pricingCategoryCard__brand'>{brand}</h4>
            <h3 className='pricingCategoryCard__title'>{name}</h3>
            <div className='pricingCategoryCard__priceContainer'>
               <div className='pricingCategoryCard__price'>{displayPrice(priceDisplay, "$")}</div>
               {discountDisplay > 0 && <div className='pricingCategoryCard__discount'>Save {displayPrice(discountDisplay, "$", 0)}</div>}
            </div>
         </div>
      </Link>
   )
}

export default PricingCategoryCard