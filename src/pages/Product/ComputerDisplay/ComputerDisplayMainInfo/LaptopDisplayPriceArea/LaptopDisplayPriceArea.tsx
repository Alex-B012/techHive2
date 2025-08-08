import { PriceLaptop } from '../../../../../types/products/laptops'
import { displayPrice, getDiscountDate } from '../../../../../utils/productUtils';
import './laptopDisplayPriceArea.css'

interface LaptopDisplayPriceAreaProp {
   price: PriceLaptop;
}

function LaptopDisplayPriceArea({ price }: LaptopDisplayPriceAreaProp) {
   return (
      <div className="laptopDisplay__priceArea">
         {(price.discount?.price
            && price.discount.price > 0
            && price.discount.price < price.current)
            && (
               <div className="laptopDisplay__price">
                  <div className='laptopDisplay__discountAvailable'>
                     <div >
                        <span>Available until</span>
                        {` ${getDiscountDate(price.discount.ends_days)}`}
                     </div>
                     <div>
                        {displayPrice(price.discount.price, "$")}
                     </div>
                  </div>
                  <div className='laptopDisplay__priceDiscount'>
                     <div>
                        {displayPrice(price.current, "$")}
                     </div>
                     <div>
                        Save: {displayPrice(price.current - price.discount.price, "$", 0)}
                     </div>
                  </div>

               </div>
            )
         }
         {(!price.discount?.price || price.discount?.price <= 0) && (
            <div className="laptopDisplay__price">
               <div>{displayPrice(price.current, "$")}</div>
            </div>)
         }
      </div>
   )
}

export default LaptopDisplayPriceArea