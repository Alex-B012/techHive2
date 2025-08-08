import './laptopDisplaySpecDisplay.css'
import { SpecificationsLaptop } from '../../../../../types/products/laptops'
import { displayPrice } from '../../../../../utils/productUtils'

interface LaptopDisplaySpecDisplayProp {
   spec: SpecificationsLaptop;
}

function LaptopDisplaySpecDisplay({ spec }: LaptopDisplaySpecDisplayProp) {
   return (
      <div className="laptopDisplay__specSection">
         <h4 className="laptopDisplay__specTitle">Display</h4>

         <div className='laptopDisplay__specText'>
            <span className="laptopDisplay__featureName">
               Screen Size:
            </span>
            {displayPrice(spec.display.size, "", 0)} in
         </div>

         <div className='laptopDisplay__specText'>
            <span className="laptopDisplay__featureName">
               Screen Resolution:
            </span>
            {spec.display.resolution}
         </div>

         {spec.display.touchscreen === "y" &&
            <div className='laptopDisplay__specText'>
               <span className="laptopDisplay__featureName">
                  Touchscreen Display:
               </span>
               Yes
            </div>
         }
         {spec.display.hybrid_display === "y" &&
            <div className='laptopDisplay__specText'>
               <span className="laptopDisplay__featureName">
                  Convertible/Hybrid Display:
               </span>
               Yes
            </div>
         }
         {spec.display.display_features[0].length > 0 && (
            <div className='laptopDisplay__specText'>
               <span className="laptopDisplay__featureName">
                  Display features:
               </span>
               {spec.display.display_features.map((item, index) => (
                  <span key={index}>
                     {String(item)}
                     {index < spec.display.display_features.length - 1 && ', '}
                  </span>
               ))}
            </div>
         )
         }
      </div >

   )
}

export default LaptopDisplaySpecDisplay