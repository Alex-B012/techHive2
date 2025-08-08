import { Laptop } from '../../../../types/products/laptops'
import { displayPrice } from '../../../../utils/productUtils';
import './laptopDisplayMainInfo.css'

interface LaptopDisplayMainInfoProp {
   product: Laptop;
}

function LaptopDisplayMainInfo({ product }: LaptopDisplayMainInfoProp) {
   return (
      <div className='laptopDisplay__mainInfo' >
         <img className="laptopDisplay__img" src={product.img} alt={product.model} />
         <div className='laptopDisplay__info'>
            <h2 className="laptopDisplay__title">
               {`${product.brand} ${product.name}`}
            </h2>
            <p className="laptopDisplay__model">Model: {product.model}</p>

            <div className="laptopDisplay__priceArea">
               {(product.price.discount?.price
                  && product.price.discount.price > 0
                  && product.price.discount.price < product.price.current)
                  && (
                     <div className="laptopDisplay__price">
                        <div>{displayPrice(product.price.discount.price, "$")}</div>
                        <div>Save: {displayPrice(product.price.current - product.price.discount.price, "$", 0)}</div>
                     </div>
                  )
               }
               {(!product.price.discount?.price || product.price.discount?.price <= 0) && (
                  <div className="laptopDisplay__price">
                     <div>{displayPrice(product.price.current, "$")}</div>
                  </div>)
               }
            </div>
         </div>
      </div >
   )
}

export default LaptopDisplayMainInfo