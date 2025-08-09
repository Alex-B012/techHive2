import './productDisplayWarranty.css'

interface ProductDisplayWarrantyProp {
   warranty: string;
}

function ProductDisplayWarranty({ warranty }: ProductDisplayWarrantyProp) {
   return (
      <div className="productDisplay__specSection">
         <h4 className="productDisplay__specTitle">Warranty</h4>

         {warranty.length > 0 &&
            <div className='productDisplay__specText'>
               <span className="productDisplay__featureName">
                  Warrenty:
               </span>
               {warranty}
            </div>
         }
      </div>
   )
}

export default ProductDisplayWarranty