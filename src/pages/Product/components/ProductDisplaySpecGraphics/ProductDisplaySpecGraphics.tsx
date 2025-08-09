import { SpecificationsComputer } from '../../../../types/products/computers';
import { SpecificationsLaptop } from '../../../../types/products/laptops';

import './productDisplaySpecGraphics.css'

interface ProductDisplaySpecGraphicsProp {
   spec: SpecificationsLaptop | SpecificationsComputer;
}

function ProductDisplaySpecGraphics({ spec }: ProductDisplaySpecGraphicsProp) {
   return (
      <div className="productDisplay__specSection">
         <h4 className="productDisplay__specTitle">Graphics</h4>

         {spec.dedicated_gpu === "y" &&
            <div className='productDisplay__specText'>
               <span className="productDisplay__featureName">
                  Dedicated GPU:
               </span>
               Yes
            </div>
         }

         <div className='productDisplay__specText'>
            <span className="productDisplay__featureName">
               Graphics Card:
            </span>
            <span>
               {`${spec.gpu.brand} ${spec.gpu.name}`}
            </span>

         </div>

         {spec.gpu.memory > 0 &&
            <div className='productDisplay__specText'>
               <span className="productDisplay__featureName">
                  Video Memory:
               </span>
               <span className='productDisplay__featureSpan'>
                  {spec.gpu.memory} GB
               </span>
            </div>}
      </div>
   )
}

export default ProductDisplaySpecGraphics