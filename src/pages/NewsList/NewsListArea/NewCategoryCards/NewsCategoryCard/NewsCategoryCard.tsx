import { Link } from 'react-router-dom'
import { NewsItem } from '../../../../../types/newsPanel'
import './newsCategoryCard.css'
import NewsCategoryCardInfo from './NewsCategoryCardInfo/NewsCategoryCardInfo'
import { newsCategories_info } from '../../../../../data/news';
import { getNewsCategoryUrl } from '../../../../../utils/newsUtils';

interface NewsCategoryCardProp {
   data: NewsItem;
}

function NewsCategoryCard({ data, }: NewsCategoryCardProp) {
   const obj = {
      categoryName: data.category,
      categoriesArr: newsCategories_info,
   }
   const newsCat_url = getNewsCategoryUrl(obj);

   return (
      <Link className='newsCategoryCard__container' to={`/news/${newsCat_url}/${data.id}`}>
         <img className='newsCategoryCard__img' src={data.article_imgObj.img} alt={data.article_imgObj.name} />
         < NewsCategoryCardInfo title={data.title} author={data.article_authorObj.name} date={data.date} category={data.category} />
      </Link >
   )
}

export default NewsCategoryCard