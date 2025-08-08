import { SpecificationsComputer } from '../../../../types/products/computers';
import { SpecificationsLaptop } from '../../../../types/products/laptops';
import './productDisplaySpecCPU.css'

interface ProductDisplaySpecCPUProp {
   spec: SpecificationsLaptop | SpecificationsComputer;
}

function ProductDisplaySpecCPU({ spec }: ProductDisplaySpecCPUProp) {
   return (
      <div className="productDisplay__specSection">
         <h4 className="productDisplay__specTitle">Processor</h4>
         <div className='productDisplay__specText'>
            <span className="productDisplay__featureName">
               Processor Type:
            </span>
            {`${spec.cpu.brand} ${spec.cpu.type}`}
         </div>

         {spec.cpu.cores > 0 &&
            <div className='productDisplay__specText'><span className="productDisplay__featureName">
               Processor Cores:
            </span>
               {spec.cpu.cores}
            </div>
         }

         {spec.cpu.speed.length > 0 &&
            <div className='productDisplay__specText'><span className="productDisplay__featureName">
               Processor Speed:
            </span>
               {spec.cpu.speed}
            </div>
         }
         {spec.cpu.cache.length > 0 &&
            <div className='productDisplay__specText'><span className="productDisplay__featureName">
               Processor Cache:
            </span>
               {spec.cpu.cache}
            </div>}
      </div>
   )
}

export default ProductDisplaySpecCPU