import './laptopDisplaySpecDisplay.css'
import { Laptop } from '../../../../../types/products/laptops'
import { displayPrice } from '../../../../../utils/productUtils'

interface LaptopDisplaySpecDisplayProp {
   product: Laptop
}

function LaptopDisplaySpecDisplay({ product }: LaptopDisplaySpecDisplayProp) {
   return (
      <div className="laptopDisplay__specSection">
         <h4 className="laptopDisplay__specTitle">Display</h4>
         <div className='laptopDisplay__specText'>Screen Size:
            {displayPrice(product.specifications.display.size, "", 0)} in
         </div>
         <div className='laptopDisplay__specText'>Screen Resolution:   {product.specifications.display.resolution}
         </div>
         {product.specifications.display.touchscreen === "y" &&
            <div className='laptopDisplay__specText'>Touchscreen Display: Yes
            </div>
         }
         {product.specifications.display.hybrid_display === "y" &&
            <div className='laptopDisplay__specText'>Convertible/Hybrid Display: Yes
            </div>}
      </div>

   )
}

export default LaptopDisplaySpecDisplay