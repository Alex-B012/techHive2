import { Laptop } from '../../../types/products/laptops'
import LaptopDisplaySpecifications from './LaptopDisplaySpecifications/LaptopDisplaySpecifications';
import ProductDisplayMainInfo from '../components/ProductDisplayMainInfo/ProductDisplayMainInfo';
import ProductDisplayAbout from '../ProductDisplayAbout/ProductDisplayAbout';
import ProductDisplayOverview from '../ProductDisplayOverview/ProductDisplayOverview';

interface LaptopDisplayProp {
   product: Laptop;
}

function LaptopDisplay({ product }: LaptopDisplayProp) {
   return (
      <div className='laptopDisplay__container'>
         <ProductDisplayMainInfo product={product} />
         <ProductDisplayOverview product={product} />
         <ProductDisplayAbout product={product} />
         <LaptopDisplaySpecifications spec={product.specifications} />
      </div >
   )
}

export default LaptopDisplay