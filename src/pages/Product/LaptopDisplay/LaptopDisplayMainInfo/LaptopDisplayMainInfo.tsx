import { Laptop } from '../../../../types/products/laptops'
import './laptopDisplayMainInfo.css'
import LaptopDisplayPriceArea from './LaptopDisplayPriceArea/LaptopDisplayPriceArea';

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
            {product.rating > 0 && (
               <p className="laptopDisplay__rating">Rating: {product.rating}</p>
            )}
            <LaptopDisplayPriceArea price={product.price} />

         </div>
      </div >
   )
}

export default LaptopDisplayMainInfo