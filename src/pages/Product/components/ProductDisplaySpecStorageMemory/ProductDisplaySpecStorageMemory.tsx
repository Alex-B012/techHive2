import { SpecificationsComputer } from '../../../../types/products/computers';
import { SpecificationsLaptop } from '../../../../types/products/laptops';
import './productDisplaySpecStorageMemory.css'

interface ProductDisplaySpecStorageMemoryProp {
   spec: SpecificationsLaptop | SpecificationsComputer;
}

function ProductDisplaySpecStorageMemory({ spec }: ProductDisplaySpecStorageMemoryProp) {
   return (
      <div className="productDisplay__specSection">
         <h4 className="productDisplay__specTitle">Storage & Memory</h4>
         {spec.ssd.length > 0 && (
            <div className='productDisplay__specText'>
               <span className="productDisplay__featureName">
                  Solid-State Drive Capacity:
               </span>
               {` ${spec.ssd}`}
            </div>
         )
         }

         <div className='productDisplay__specText'>
            <span className="productDisplay__featureName">
               RAM Size:
            </span>
            {spec.ram.size} GB
         </div>

         {
            spec.ram.type.length > 0 &&
            <div className='productDisplay__specText'>
               <span className="productDisplay__featureName">
                  RAM Type:
               </span>
               {spec.ram.type}
            </div>
         }
      </div >
   )
}

export default ProductDisplaySpecStorageMemory