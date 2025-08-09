
import { SpecificationsLaptop } from '../../../../../types/products/laptops';
import { displayPrice } from '../../../../../utils/productUtils';
import './laptopDisplaySpecFeatures.css'

interface LaptopDisplaySpecFeaturesProp {
   spec: SpecificationsLaptop;
}

function LaptopDisplaySpecFeatures({ spec }: LaptopDisplaySpecFeaturesProp) {
   return (
      <div className="productDisplay__specSection">
         <h4 className="productDisplay__specTitle">Product Features</h4>

         {spec.os.name.length > 0 && (
            <div className='productDisplay__specText'>
               <span className="productDisplay__featureName">Pre-loaded Operating System: </span>
               <span className='productDisplay__featureSpan'>
                  {spec.os.name}
                  {spec.os.lang.length > 0 && ` (${spec.os.lang})`}
               </span>

            </div>
         )}

         {spec.loaded_software[0].length > 0 && (
            <div className='productDisplay__specText'>
               <span className="productDisplay__featureName">{`Pre-loaded Software: `}</span>
               {spec.loaded_software.map((item, index) => (
                  <span className='productDisplay__featureSpan' key={index}>
                     {String(item)}
                     {index < spec.display.display_features.length - 1 && ', '}
                  </span>
               ))}
            </div>
         )}

         {spec.frame_color.length > 0 &&
            <div className='productDisplay__specText'>
               <span className="productDisplay__featureName">Colour:</span> {spec.frame_color}
            </div>
         }

         {spec.webcam === "y" &&
            <div className='productDisplay__specText'>
               <span className="productDisplay__featureName">Webcam:</span> Yes
            </div>
         }

         {spec.keyboard.lang.length > 0 && (
            <div className='productDisplay__specText'>
               <span className="productDisplay__featureName">Keyboard Language:</span>
               {` ${spec.keyboard.lang}`}
            </div>)
         }

         {spec.keyboard.backlit === "y" && (
            <div className='productDisplay__specText'>
               <span className="productDisplay__featureName">Backlit keyboard:</span> Yes
            </div>)
         }


         {spec.demensions.cm.w > 0 && (
            <div className='productDisplay__specText'>
               <span className="productDisplay__featureName">Dimensions (cm):</span> {displayPrice(spec.demensions.cm.w, "")} (W) x {displayPrice(spec.demensions.cm.h, "")} (H) x {displayPrice(spec.demensions.cm.d, "")} (D) cm
            </div>)
         }

         {spec.demensions.in.w > 0 && (
            <div className='productDisplay__specText'>
               <span className="productDisplay__featureName">Dimensions (in):</span> {displayPrice(spec.demensions.in.w, "")} (W) x {displayPrice(spec.demensions.in.h, "")} (H) x {displayPrice(spec.demensions.in.d, "")} (D) in
            </div>)
         }

         {spec.weight.kg > 0 && (
            <div className='productDisplay__specText'>
               <span className="productDisplay__featureName">Weight:</span> {displayPrice(spec.weight.kg, "")} kg
            </div>)
         }

         {spec.weight.lbs > 0 && (
            <div className='productDisplay__specText'>
               <span className="productDisplay__featureName">Weight (lbs):</span> {displayPrice(spec.weight.lbs, "")} lbs
            </div>)
         }
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

export default LaptopDisplaySpecFeatures