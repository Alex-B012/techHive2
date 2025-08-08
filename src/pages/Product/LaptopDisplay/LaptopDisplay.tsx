import { Laptop } from '../../../types/products/laptops'
import LaptopDisplayAbout from './LaptopDisplayAbout/LaptopDisplayAbout';
import './laptopDisplay.css'
import LaptopDisplayMainInfo from './LaptopDisplayMainInfo/LaptopDisplayMainInfo';
import LaptopDisplayOverview from './LaptopDisplayOverview/LaptopDisplayOverview';
import LaptopDisplaySpecifications from './LaptopDisplaySpecifications/LaptopDisplaySpecifications';

interface LaptopDisplayProp {
   product: Laptop;
}

function LaptopDisplay({ product }: LaptopDisplayProp) {
   return (
      <div className='laptopDisplay__container'>
         <LaptopDisplayMainInfo product={product} />
         <LaptopDisplayOverview product={product} />
         <LaptopDisplayAbout product={product} />
         <LaptopDisplaySpecifications product={product} />
      </div >
   )
}

export default LaptopDisplay