
import { Computer } from '../../../../types/products/computers';
import { Laptop } from '../../../../types/products/laptops';
import './productDisplayAbout.css'

interface ProductDisplayAboutProp {
   product: Laptop | Computer;
}

function ProductDisplayAbout({ product }: ProductDisplayAboutProp) {
   return (
      <div className='productDisplay__about'>
         <h3 className="productDisplay__aboutTitle">
            About This Product
         </h3>
         <ul className="productDisplay__aboutArea">
            {product.about.map((item) => (
               <li key={item.id} className="productDisplay__aboutPapagraph">
                  {item.heading.length > 0 && (
                     <h5 className="productDisplay__aboutHeading">
                        {item.heading}
                     </h5>
                  )}
                  {item.text && (
                     <h5 className="productDisplay__aboutText">
                        {item.text}
                     </h5>
                  )}
               </li>
            ))}
         </ul>
      </div>
   )
}

export default ProductDisplayAbout