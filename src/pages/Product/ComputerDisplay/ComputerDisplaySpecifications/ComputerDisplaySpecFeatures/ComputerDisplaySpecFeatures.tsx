
import { SpecificationsComputer } from '../../../../../types/products/computers';
import './computerDisplaySpecFeatures.css'

interface ComputerDisplaySpecFeaturesProp {
   spec: SpecificationsComputer;
}

function ComputerDisplaySpecFeatures({ spec }: ComputerDisplaySpecFeaturesProp) {
   return (
      <div className="productDisplay__specSection">
         <h4 className="productDisplay__specTitle">Product Features</h4>

         {spec.os.name.length > 0 && (
            <div className='productDisplay__specText'>
               <span className="productDisplay__featureName">Pre-loaded Operating System: </span>
               {spec.os.name}
               {spec.os.lang.length > 0 && ` (${spec.os.lang})`}
            </div>
         )}

         {spec.cooling_system.length > 0 &&
            <div className='productDisplay__specText'>
               <span className="productDisplay__featureName">Cooling System:</span> {spec.cooling_system}
            </div>
         }{spec.power_supply.length > 0 &&
            <div className='productDisplay__specText'>
               <span className="productDisplay__featureName">Power Supply:</span> {spec.power_supply}
            </div>
         }
      </div>
   )
}

export default ComputerDisplaySpecFeatures