
import { Computer } from '../../../../types/products/computers';
import { Laptop } from '../../../../types/products/laptops';
import './productDisplayOverview.css'

interface ProductDisplayOverviewProp {
   product: Laptop | Computer;
}

function ProductDisplayOverview({ product }: ProductDisplayOverviewProp) {
   return (
      <div className="productDisplay__overview">
         <h3 className="productDisplalaptopDisplay__overviewTitle">
            Overview
         </h3>
         <p className="productDisplay__overviewText">{product.overview}</p>
      </div>
   )
}

export default ProductDisplayOverview