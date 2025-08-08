
import './computerDisplay.css'
import { Computer } from '../../../types/products/computers';
import ProductDisplayMainInfo from '../components/ProductDisplayMainInfo/ProductDisplayMainInfo';

import ComputerDisplaySpecifications from './ComputerDisplaySpecifications/ComputerDisplaySpecifications';
import ProductDisplayOverview from '../components/ProductDisplayOverview/ProductDisplayOverview';
import ProductDisplayAbout from '../components/ProductDisplayAbout/ProductDisplayAbout';

interface ComputerDisplayProp {
   product: Computer;
}

function ComputerDisplay({ product }: ComputerDisplayProp) {
   return (
      <div className='computerDisplay__container'>
         <ProductDisplayMainInfo product={product} />
         <ProductDisplayOverview product={product} />
         <ProductDisplayAbout product={product} />
         <ComputerDisplaySpecifications spec={product.specifications} />
      </div >
   )
}

export default ComputerDisplay