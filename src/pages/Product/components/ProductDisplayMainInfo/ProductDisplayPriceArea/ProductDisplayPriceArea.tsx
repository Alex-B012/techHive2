
import { PriceComputer } from '../../../../../types/products/computers';
import { PriceLaptop } from '../../../../../types/products/laptops';
import { displayPrice, getDiscountDate } from '../../../../../utils/productUtils';
import './productDisplayPriceArea.css'

interface ProductDisplayPriceAreaProp {
   price: PriceLaptop | PriceComputer;
}

function ProductDisplayPriceArea({ price }: ProductDisplayPriceAreaProp) {
   return (
      <div className="productDisplay__priceArea">
         {(price.discount?.price
            && price.discount.price > 0
            && price.discount.price < price.current)
            && (
               <div className="productDisplay__price">
                  <div className='productDisplay__discountAvailable'>
                     <div >
                        <span>Available until</span>
                        <span className='productDisplay__discountDate'> {` ${getDiscountDate(price.discount.ends_days)}`}</span>
                     </div>
                     <div>
                        {displayPrice(price.discount.price, "$")}
                     </div>
                  </div>
                  <div className='productDisplay__priceDiscount'>
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
            <div className="productDisplay__price">
               <div>{displayPrice(price.current, "$")}</div>
            </div>)
         }
      </div>
   )
}

export default ProductDisplayPriceArea