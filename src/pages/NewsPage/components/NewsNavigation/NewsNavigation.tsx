import { Link } from 'react-router-dom'
import './newsNavigation.css'
import { getNewsCategoryName, NewsCategoriesObjInfo } from '../../../../utils/newsFuncs';

interface NewsNavigationProp {
   news_url: string;
   categoriesArr: NewsCategoriesObjInfo;
}

function NewsNavigation({ news_url, categoriesArr }: NewsNavigationProp) {
   const newsCategoryName = getNewsCategoryName({
      categoryUrl: news_url,
      categoriesArr: categoriesArr,
   });

   return (
      <div className='newsNavigation__container'>
         <Link className="newsNavigation__link" to={"/"}>Home</Link>
         <span className="newsNavigation__span"> / </span>
         <Link className="newsNavigation__link" to={`/news`}>News</Link>
         <span className="newsNavigation__span"> / </span>
         <Link className="newsNavigation__link" to={`/news/${news_url}`}>{newsCategoryName}</Link>
      </div>
   )
}

export default NewsNavigation