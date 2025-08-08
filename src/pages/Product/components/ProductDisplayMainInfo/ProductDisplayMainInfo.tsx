import { Computer } from '../../../../types/products/computers';
import { Laptop } from '../../../../types/products/laptops'
import './productDisplayMainInfo.css'
import ProductDisplayPriceArea from './ProductDisplayPriceArea/ProductDisplayPriceArea';

interface ProductDisplayMainInfoProp {
   product: Laptop | Computer;
}

function ProductDisplayMainInfo({ product }: ProductDisplayMainInfoProp) {
   return (
      <div className='productDisplay__mainInfo' >
         <img className="productDisplay__img" src={product.img} alt={product.model} />
         <div className='productDisplay__info'>
            <h2 className="productDisplay__title">
               {`${product.brand} ${product.name}`}
            </h2>
            <p className="productDisplay__model">Model: {product.model}</p>
            {product.rating > 0 && (
               <p className="productDisplay__rating">Rating: {product.rating}</p>
            )}
            <ProductDisplayPriceArea price={product.price} />

         </div>
      </div >
   )
}

export default ProductDisplayMainInfo