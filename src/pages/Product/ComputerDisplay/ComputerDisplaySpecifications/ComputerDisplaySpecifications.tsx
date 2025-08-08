import LaptopDisplaySpecCPU from '../../components/ProductDisplaySpecCPU/ProductDisplaySpecCPU';
import LaptopDisplaySpecDisplay from './LaptopDisplaySpecDisplay/LaptopDisplaySpecDisplay';
import LaptopDisplaySpecGraphics from './LaptopDisplaySpecGraphics/LaptopDisplaySpecGraphics';
import './computerDisplaySpecifications.css'
import LaptopDisplaySpecStorageMemory from './LaptopDisplaySpecStorageMemory/LaptopDisplaySpecStorageMemory';
import { SpecificationsComputer } from '../../../../types/products/computers';

interface ComputerDisplaySpecificationsProp {
   spec: SpecificationsComputer;
}

function ComputerDisplaySpecifications({ spec }: ComputerDisplaySpecificationsProp) {
   return (
      <div className="computerDisplay__specifications">
         {
            spec.cpu.brand.length > 0 && (
               <div className="computerDisplay__specificationsArea">
                  <h3 className="computerDisplay__specificationsMaintTitle">
                     Specifications
                  </h3>

                  {spec.cpu.brand.length > 0 && <LaptopDisplaySpecCPU spec={spec} />}

                  {spec.ram.size > 0 && <LaptopDisplaySpecStorageMemory spec={spec} />
                  }
                  {spec.gpu.brand.length > 0 && <LaptopDisplaySpecGraphics spec={spec} />
                  }
                  <ComputerDisplaySpecFeatures spec={spec} />

               </div>)
         }
      </div>
   )
}

export default ComputerDisplaySpecifications