import { Link, useParams } from 'react-router-dom';
import { ProductCategory } from '../../../../types/productCategories'
import { navigationLinksArr } from "../../../../data/pricing/pr_productCategories"
import './selectPricingCategory.css'
import { removeAllWhitespace } from '../../../../utils/miscUtils';

interface SelectPricingCategoryProp {
   data: ProductCategory[],
}

function SelectPricingCategory({ data }: SelectPricingCategoryProp) {
   const { categoryUrl } = useParams<{
      categoryUrl: string;
   }>();

   let categoryUrl_prepared = "";
   if (categoryUrl) categoryUrl_prepared = removeAllWhitespace(categoryUrl);

   const currentUrlObj = navigationLinksArr.find((item) => item.url === categoryUrl_prepared)
   const linksArrToDisplay = navigationLinksArr.filter((item) => item.url !== categoryUrl);

   return (
      <div className='selectPricingCategory__container'>
         {currentUrlObj &&
            <h2 className='selectPricingCategory__title'>{currentUrlObj.name}</h2>
         }

         <div className='selectPricingCategory__linkContainer'>
            {linksArrToDisplay.map((item) =>
               <Link className="selectPricingCategory__link" to={`/pricing/${item.url}`} key={item.url} >
                  {item.name}
               </Link>)}
         </div>


      </div >
   )
}

export default SelectPricingCategory