import { Laptop } from '../../../../types/products/laptops';
import './laptopDisplayAbout.css'

interface LaptopDisplayAboutProp {
   product: Laptop;
}

function LaptopDisplayAbout({ product }: LaptopDisplayAboutProp) {
   return (
      <div className='laptopDisplay__about'>
         <h3 className="laptopDisplay__aboutTitle">
            About This Product
         </h3>
         <ul className="laptopDisplay__aboutArea">
            {product.about.map((item) => (
               <li key={item.id} className="laptopDisplay__aboutPapagraph">
                  {item.heading && (
                     <h5 className="laptopDisplay__aboutHeading">
                        {item.heading}
                     </h5>
                  )}
                  {item.text && (
                     <h5 className="laptopDisplay__aboutText">
                        {item.text}
                     </h5>
                  )}
               </li>
            ))}
         </ul>
      </div>
   )
}

export default LaptopDisplayAbout