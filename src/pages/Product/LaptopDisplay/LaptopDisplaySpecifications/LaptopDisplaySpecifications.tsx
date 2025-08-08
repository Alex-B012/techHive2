import { Laptop } from '../../../../types/products/laptops';
import LaptopDisplaySpecCPU from './LaptopDisplaySpecCPU/LaptopDisplaySpecCPU';
import LaptopDisplaySpecDisplay from './LaptopDisplaySpecDisplay/LaptopDisplaySpecDisplay';
import LaptopDisplaySpecGraphics from './LaptopDisplaySpecGraphics/LaptopDisplaySpecGraphics';
import './laptopDisplaySpecifications.css'
import LaptopDisplaySpecStorageMemory from './LaptopDisplaySpecStorageMemory/LaptopDisplaySpecStorageMemory';

interface LaptopDisplaySpecificationsProp {
   product: Laptop;
}

function LaptopDisplaySpecifications({ product }: LaptopDisplaySpecificationsProp) {
   return (
      <div className="laptopDisplay__specifications">


         {
            product.specifications.display.resolution.length > 0 && (<div className="laptopDisplay__specificationsArea">
               <h3 className="laptopDisplay__specificationsMaintTitle">
                  Specifications
               </h3>
               <LaptopDisplaySpecDisplay product={product} />
               <LaptopDisplaySpecCPU product={product} />
               <LaptopDisplaySpecStorageMemory product={product} />
               <LaptopDisplaySpecGraphics product={product} />

            </div>)
         }

      </div>

   )
}

export default LaptopDisplaySpecifications