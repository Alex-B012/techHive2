import { Laptop } from '../../../types/products/laptops'
import LaptopDisplaySpecifications from './LaptopDisplaySpecifications/LaptopDisplaySpecifications';
import ProductDisplayMainInfo from '../components/ProductDisplayMainInfo/ProductDisplayMainInfo';
import ProductDisplayOverview from '../components/ProductDisplayOverview/ProductDisplayOverview';
import ProductDisplayAbout from '../components/ProductDisplayAbout/ProductDisplayAbout';
import "./laptopDisplay.css"

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