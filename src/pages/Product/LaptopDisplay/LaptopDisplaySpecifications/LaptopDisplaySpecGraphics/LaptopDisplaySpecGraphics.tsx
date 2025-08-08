import { Laptop } from '../../../../../types/products/laptops';
import './laptopDisplaySpecGraphics.css'

interface LaptopDisplaySpecGraphicsProp {
   product: Laptop;
}

function LaptopDisplaySpecGraphics({ product }: LaptopDisplaySpecGraphicsProp) {
   return (
      <div className="laptopDisplay__specSection">
         <h4 className="laptopDisplay__specTitle">Graphics</h4>

         {product.specifications.dedicated_gpu === "y" &&
            <div className='laptopDisplay__specText'>
               Dedicated GPU: Yes
            </div>
         }

         {product.specifications.gpu.brand.length > 0 &&
            <div className='laptopDisplay__specText'>{`Graphics Card: ${product.specifications.gpu.brand} ${product.specifications.gpu.name}`}
            </div>
         }

         {product.specifications.gpu.memory > 0 &&
            <div className='laptopDisplay__specText'>Video Memory: {product.specifications.gpu.memory} GB
            </div>}
      </div>
   )
}

export default LaptopDisplaySpecGraphics