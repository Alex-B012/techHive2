
import './computerDisplay.css'

import { Computer } from '../../../types/products/computers';

interface ComputerDisplayProp {
   product: Computer;
}

function ComputerDisplay({ product }: ComputerDisplayProp) {
   return (
      <div className='laptopDisplay__container'>
         <ComputerDisplayMainInfo product={product} />
         <ComputerDisplayOverview product={product} />
         <ComputerDisplayAbout product={product} />
         <ComputerDisplaySpecifications spec={product.specifications} />
      </div >
   )
}

export default ComputerDisplay