import { Link } from 'react-router-dom'
import { NewsItem } from '../../../../../types/newsPanel'
import './newsCategoryCard.css'
import NewsCategoryCardInfo from './NewsCategoryCardInfo/NewsCategoryCardInfo'
import { newsCategories_info } from '../../../../../data/news';
import { getCategoryUrl } from '../../../../../utils/newsFuncs';

interface NewsCategoryCardProp {
   data: NewsItem;
}

function NewsCategoryCard({ data, }: NewsCategoryCardProp) {
   const obj = {
      categoryName: data.category,
      categoriesArr: newsCategories_info,
   }
   const newsCat_url = getCategoryUrl(obj);

   return (
      <Link className='newsCategoryCard__container' to={`/news${newsCat_url}/${data.id}`}>
         <img className='newsCategoryCard__img' src={data.article_img.img} alt={data.article_img.name} />
         < NewsCategoryCardInfo title={data.title} author={data.article_author.name} date={data.date} category={data.category} />
      </Link >
   )
}

export default NewsCategoryCard