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
            {`${spec.gpu.brand} ${spec.gpu.name}`}
         </div>

         {spec.gpu.memory > 0 &&
            <div className='productDisplay__specText'>
               <span className="productDisplay__featureName">
                  Video Memory:
               </span>
               {spec.gpu.memory} GB
            </div>}
      </div>
   )
}

export default ProductDisplaySpecGraphics