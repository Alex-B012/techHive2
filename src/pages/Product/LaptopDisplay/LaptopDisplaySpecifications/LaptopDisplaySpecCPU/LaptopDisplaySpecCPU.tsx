import { Laptop } from '../../../../../types/products/laptops';
import './laptopDisplaySpecCPU.css'

interface LaptopDisplaySpecCPUProp {
   product: Laptop;
}

function LaptopDisplaySpecCPU({ product }: LaptopDisplaySpecCPUProp) {
   return (
      <div className="laptopDisplay__specSection">
         <h4 className="laptopDisplay__specTitle">Processor</h4>
         <div className='laptopDisplay__specText'>
            {`Processor Type: ${product.specifications.cpu.brand} ${product.specifications.cpu.type}`}
         </div>

         {product.specifications.cpu.cores > 0 &&
            <div className='laptopDisplay__specText'>Processor Cores:   {product.specifications.cpu.cores}
            </div>
         }

         {product.specifications.cpu.speed.length > 0 &&
            <div className='laptopDisplay__specText'>Processor Speed: {product.specifications.cpu.speed}
            </div>
         }
         {product.specifications.cpu.cache.length > 0 &&
            <div className='laptopDisplay__specText'>Processor Cache: {product.specifications.cpu.cache}
            </div>}
      </div>
   )
}

export default LaptopDisplaySpecCPU