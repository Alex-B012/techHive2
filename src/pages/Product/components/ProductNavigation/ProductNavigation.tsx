import { Link, useParams } from 'react-router-dom';
import './productNavigation.css'

function ProductNavigation() {
   const { categoryUrl, productId } = useParams<{
      categoryUrl: string;
      productId: string
   }>();

   return (
      <div className='productNavigation__container'>
         <div className='productNavigation__container'>
            <Link className="productNavigation__link" to={"/"}>
               Home
            </Link>
            <span className="productNavigation__span"> / </span>
            <Link className="productNavigation__link" to={`/pricing`}>
               Pricing
            </Link>

            {categoryUrl !== "pricing" && productId && (<>
               <span className="productNavigation__span"> / </span>
               <Link className="productNavigation__link" to={`/pricing/${categoryUrl}`}>
                  {categoryUrl}
               </Link>
            </>)}

         </div>
      </div>
   )
}

export default ProductNavigation