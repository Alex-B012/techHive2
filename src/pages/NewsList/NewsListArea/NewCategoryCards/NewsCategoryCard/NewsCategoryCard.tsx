import { NewsItem } from '../../../../../types/newsPanel'
import './newsCategoryCard.css'
import NewsCategoryCardInfo from './NewsCategoryCardInfo/NewsCategoryCardInfo'

interface NewsCategoryCardProp {
   data: NewsItem
}

function NewsCategoryCard({ data }: NewsCategoryCardProp) {
   return (
      <div className='newsCategoryCard__container'>
         <img className='newsCategoryCard__img' src={data.article_img.img} alt={data.article_img.name} />
         < NewsCategoryCardInfo title={data.title} author={data.article_author.name} date={data.date} />

      </div>
   )
}

export default NewsCategoryCard