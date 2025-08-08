
import { Computer } from '../../../../types/products/computers';
import './computerDisplayMainInfo.css'
import LaptopDisplayPriceArea from './LaptopDisplayPriceArea/LaptopDisplayPriceArea';

interface ComputerDisplayMainInfoProp {
   product: Computer;
}

function ComputerDisplayMainInfo({ product }: ComputerDisplayMainInfoProp) {
   return (
      <div className='computerDisplay__mainInfo' >
         <img className="computerDisplay__img" src={product.img} alt={product.model} />
         <div className='computerDisplay__info'>
            <h2 className="computerDisplay__title">
               {`${product.brand} ${product.name}`}
            </h2>
            <p className="computerDisplay__model">Model: {product.model}</p>
            {product.rating > 0 && (
               <p className="computerDisplay__rating">Rating: {product.rating}</p>
            )}
            <LaptopDisplayPriceArea price={product.price} />

         </div>
      </div >
   )
}

export default ComputerDisplayMainInfo