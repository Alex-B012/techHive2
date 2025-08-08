import { SpecificationsLaptop } from '../../../../../types/products/laptops';
import './laptopDisplaySpecCPU.css'

interface LaptopDisplaySpecCPUProp {
   spec: SpecificationsLaptop;
}

function LaptopDisplaySpecCPU({ spec }: LaptopDisplaySpecCPUProp) {
   return (
      <div className="laptopDisplay__specSection">
         <h4 className="laptopDisplay__specTitle">Processor</h4>
         <div className='laptopDisplay__specText'>
            <span className="laptopDisplay__featureName">
               Processor Type:
            </span>
            {`${spec.cpu.brand} ${spec.cpu.type}`}
         </div>

         {spec.cpu.cores > 0 &&
            <div className='laptopDisplay__specText'><span className="laptopDisplay__featureName">
               Processor Cores:
            </span>
               {spec.cpu.cores}
            </div>
         }

         {spec.cpu.speed.length > 0 &&
            <div className='laptopDisplay__specText'><span className="laptopDisplay__featureName">
               Processor Speed:
            </span>
               {spec.cpu.speed}
            </div>
         }
         {spec.cpu.cache.length > 0 &&
            <div className='laptopDisplay__specText'><span className="laptopDisplay__featureName">
               Processor Cache:
            </span>
               {spec.cpu.cache}
            </div>}
      </div>
   )
}

export default LaptopDisplaySpecCPU