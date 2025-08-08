
import './computerDisplay.css'
import { Computer } from '../../../types/products/computers';
import ProductDisplayMainInfo from '../components/ProductDisplayMainInfo/ProductDisplayMainInfo';
import ProductDisplayAbout from '../ProductDisplayAbout/ProductDisplayAbout';
import ProductDisplayOverview from '../ProductDisplayOverview/ProductDisplayOverview';
import ComputerDisplaySpecifications from './ComputerDisplaySpecifications/ComputerDisplaySpecifications';

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