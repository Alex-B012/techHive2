import './computerDisplaySpecifications.css'
import { SpecificationsComputer } from '../../../../types/products/computers';
import ProductDisplaySpecStorageMemory from '../../components/ProductDisplaySpecStorageMemory/ProductDisplaySpecStorageMemory';
import ProductDisplaySpecCPU from '../../components/ProductDisplaySpecCPU/ProductDisplaySpecCPU';
import ComputerDisplaySpecFeatures from './ComputerDisplaySpecFeatures/ComputerDisplaySpecFeatures';
import ProductDisplaySpecGraphics from '../../components/ProductDisplaySpecGraphics/ProductDisplaySpecGraphics';
import ProductDisplayWarranty from '../../components/ProductDisplayWarranty/ProductDisplayWarranty';

interface ComputerDisplaySpecificationsProp {
   spec: SpecificationsComputer;
}

function ComputerDisplaySpecifications({ spec }: ComputerDisplaySpecificationsProp) {
   return (
      <div className="productDisplay__specifications">
         {
            spec.cpu.brand.length > 0 && (
               <div className="productDisplay__specificationsArea">
                  <h3 className="productDisplay__specificationsMaintTitle">
                     Specifications
                  </h3>

                  {spec.cpu.brand.length > 0 && <ProductDisplaySpecCPU spec={spec} />}

                  {spec.ram.size > 0 && <ProductDisplaySpecStorageMemory spec={spec} />
                  }
                  {spec.gpu.brand.length > 0 && <ProductDisplaySpecGraphics spec={spec} />
                  }
                  <ComputerDisplaySpecFeatures spec={spec} />
                  {<ProductDisplayWarranty warranty={spec.warrenty} />}
               </div>)
         }
      </div>
   )
}

export default ComputerDisplaySpecifications