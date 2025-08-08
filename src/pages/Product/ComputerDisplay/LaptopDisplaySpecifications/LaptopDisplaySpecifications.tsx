import { SpecificationsLaptop } from '../../../../types/products/laptops';
import LaptopDisplaySpecCPU from './LaptopDisplaySpecCPU/LaptopDisplaySpecCPU';
import LaptopDisplaySpecDisplay from './LaptopDisplaySpecDisplay/LaptopDisplaySpecDisplay';
import LaptopDisplaySpecFeatures from './LaptopDisplaySpecFeatures/LaptopDisplaySpecFeatures';
import LaptopDisplaySpecGraphics from './LaptopDisplaySpecGraphics/LaptopDisplaySpecGraphics';
import './laptopDisplaySpecifications.css'
import LaptopDisplaySpecStorageMemory from './LaptopDisplaySpecStorageMemory/LaptopDisplaySpecStorageMemory';

interface LaptopDisplaySpecificationsProp {
   spec: SpecificationsLaptop;
}

function LaptopDisplaySpecifications({ spec }: LaptopDisplaySpecificationsProp) {
   return (
      <div className="laptopDisplay__specifications">
         {
            spec.display.resolution.length > 0 && (
               <div className="laptopDisplay__specificationsArea">
                  <h3 className="laptopDisplay__specificationsMaintTitle">
                     Specifications
                  </h3>
                  {spec.display.resolution.length > 0 && <LaptopDisplaySpecDisplay spec={spec} />
                  }

                  {spec.cpu.brand.length > 0 && <LaptopDisplaySpecCPU spec={spec} />}

                  {spec.ram.size > 0 && <LaptopDisplaySpecStorageMemory spec={spec} />
                  }
                  {spec.gpu.brand.length > 0 && <LaptopDisplaySpecGraphics spec={spec} />
                  }
                  <LaptopDisplaySpecFeatures spec={spec} />

               </div>)
         }
      </div>
   )
}

export default LaptopDisplaySpecifications