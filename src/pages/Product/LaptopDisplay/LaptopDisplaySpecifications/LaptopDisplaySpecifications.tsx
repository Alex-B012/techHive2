import { SpecificationsLaptop } from '../../../../types/products/laptops';
import ProductDisplaySpecCPU from '../../components/ProductDisplaySpecCPU/ProductDisplaySpecCPU';
import ProductDisplaySpecGraphics from '../../components/ProductDisplaySpecGraphics/ProductDisplaySpecGraphics';
import ProductDisplaySpecStorageMemory from '../../components/ProductDisplaySpecStorageMemory/ProductDisplaySpecStorageMemory';
import ProductDisplayWarranty from '../../components/ProductDisplayWarranty/ProductDisplayWarranty';
import LaptopDisplaySpecDisplay from './LaptopDisplaySpecDisplay/LaptopDisplaySpecDisplay';
import LaptopDisplaySpecFeatures from './LaptopDisplaySpecFeatures/LaptopDisplaySpecFeatures';
import './laptopDisplaySpecifications.css'


interface LaptopDisplaySpecificationsProp {
   spec: SpecificationsLaptop;
}

function LaptopDisplaySpecifications({ spec }: LaptopDisplaySpecificationsProp) {
   return (
      <div className="productDisplay__specifications">
         {
            spec.display.resolution.length > 0 && (
               <div className="productDisplay__specificationsArea">
                  <h3 className="productDisplay__specificationsMaintTitle">
                     Specifications
                  </h3>
                  {spec.display.resolution.length > 0 && <LaptopDisplaySpecDisplay spec={spec} />
                  }

                  {spec.cpu.brand.length > 0 && <ProductDisplaySpecCPU spec={spec} />}

                  {spec.ram.size > 0 && <ProductDisplaySpecStorageMemory spec={spec} />
                  }
                  {spec.gpu.brand.length > 0 && <ProductDisplaySpecGraphics spec={spec} />
                  }
                  <LaptopDisplaySpecFeatures spec={spec} />

                  {<ProductDisplayWarranty warranty={spec.warrenty} />}

               </div>)
         }
      </div>
   )
}

export default LaptopDisplaySpecifications