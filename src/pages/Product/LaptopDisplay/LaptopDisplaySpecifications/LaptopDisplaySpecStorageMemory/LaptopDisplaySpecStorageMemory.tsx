import { Laptop } from '../../../../../types/products/laptops'
import './laptopDisplaySpecStorageMemory.css'

interface LaptopDisplaySpecStorageMemoryProp {
   product: Laptop;
}

function LaptopDisplaySpecStorageMemory({ product }: LaptopDisplaySpecStorageMemoryProp) {
   return (
      <div className="laptopDisplay__specSection">
         <h4 className="laptopDisplay__specTitle">Storage & Memory</h4>
         {product.specifications.ssd.length > 0 && (
            <div className='laptopDisplay__specText'>
               {`Solid-State Drive Capacity: ${product.specifications.ssd}`}
            </div>
         )}

         {product.specifications.ram.size > 0 &&
            <div className='laptopDisplay__specText'>RAM Size: {product.specifications.ram.size} GB
            </div>
         }

         {product.specifications.ram.type.length > 0 &&
            <div className='laptopDisplay__specText'>RAM Type: {product.specifications.ram.type}
            </div>
         }
      </div>
   )
}

export default LaptopDisplaySpecStorageMemory