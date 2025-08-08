import { Laptop } from '../../../../types/products/laptops'
import './laptopDisplayOverview.css'

interface LaptopDisplayOverviewProp {
   product: Laptop;
}

function LaptopDisplayOverview({ product }: LaptopDisplayOverviewProp) {
   return (
      <div className="laptopDisplay__overview">
         <h3 className="laptopDisplalaptopDisplay__overviewTitle">
            Overview
         </h3>
         <p className="laptopDisplay__overviewText">{product.overview}</p>
      </div>
   )
}

export default LaptopDisplayOverview