import { SpecificationsLaptop } from '../../../../../types/products/laptops'
import './laptopDisplaySpecStorageMemory.css'

interface LaptopDisplaySpecStorageMemoryProp {
   spec: SpecificationsLaptop;
}

function LaptopDisplaySpecStorageMemory({ spec }: LaptopDisplaySpecStorageMemoryProp) {
   return (
      <div className="laptopDisplay__specSection">
         <h4 className="laptopDisplay__specTitle">Storage & Memory</h4>
         {spec.ssd.length > 0 && (
            <div className='laptopDisplay__specText'>
               <span className="laptopDisplay__featureName">
                  Solid-State Drive Capacity:
               </span>
               {` ${spec.ssd}`}
            </div>
         )
         }

         <div className='laptopDisplay__specText'>
            <span className="laptopDisplay__featureName">
               RAM Size:
            </span>
            {spec.ram.size} GB
         </div>

         {
            spec.ram.type.length > 0 &&
            <div className='laptopDisplay__specText'>
               <span className="laptopDisplay__featureName">
                  RAM Type:
               </span>
               {spec.ram.type}
            </div>
         }
      </div >
   )
}

export default LaptopDisplaySpecStorageMemory