import { Link, useParams } from 'react-router-dom';
import './pageNavigation.css'
import { navigationLinksArr } from "../../data/pricing/pr_productCategories"


function PageNavigation() {
   const { newsCategory } = useParams<{
      newsCategory: string;
   }>();

   const categoryObj = navigationLinksArr.find((item) => newsCategory === item.url);
   let sectionName = '';
   let sectionUrl = '';
   let categoryName = '';
   let categoryUrl = '';

   if (categoryObj && categoryObj.name.length > 0) {
      sectionName = categoryObj.section;
      sectionUrl = categoryObj.section.toLowerCase();
      categoryName = categoryObj.name;
      categoryUrl = categoryObj.url;
   }

   return (
      <div className='pageNavigation__container'>
         <Link className="pageNavigation__link" to={"/"}>Home</Link>

         {sectionUrl.length > 0 && (
            // <span className="pageNavigation__span"> </span>
            <Link className="pageNavigation__link" to={`/${sectionUrl}`}>
               {` / ${sectionName}`}
            </Link>
         )}

         {categoryUrl.length > 0 && (
            /* <span className="pageNavigation__span"> / </span> */
            <Link className="pageNavigation__link" to={`/${sectionUrl}/${categoryUrl}`}>
               {` / ${categoryName}`}
            </Link>)
         }
      </div >
   )
}


export default PageNavigation