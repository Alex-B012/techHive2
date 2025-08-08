import { SpecificationsLaptop } from '../../../../../types/products/laptops';
import './laptopDisplaySpecGraphics.css'

interface LaptopDisplaySpecGraphicsProp {
   spec: SpecificationsLaptop;
}

function LaptopDisplaySpecGraphics({ spec }: LaptopDisplaySpecGraphicsProp) {
   return (
      <div className="laptopDisplay__specSection">
         <h4 className="laptopDisplay__specTitle">Graphics</h4>

         {spec.dedicated_gpu === "y" &&
            <div className='laptopDisplay__specText'>
               <span className="laptopDisplay__featureName">
                  Dedicated GPU:
               </span>
               Yes
            </div>
         }

         <div className='laptopDisplay__specText'>
            <span className="laptopDisplay__featureName">
               Graphics Card:
            </span>
            {`${spec.gpu.brand} ${spec.gpu.name}`}
         </div>

         {spec.gpu.memory > 0 &&
            <div className='laptopDisplay__specText'>
               <span className="laptopDisplay__featureName">
                  Video Memory:
               </span>
               {spec.gpu.memory} GB
            </div>}
      </div>
   )
}

export default LaptopDisplaySpecGraphics