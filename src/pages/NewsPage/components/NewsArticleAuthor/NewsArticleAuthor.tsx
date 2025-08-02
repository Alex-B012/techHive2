import { ArticleAuthor } from '../../../../types/news'
import './newsArticleAuthor.css'

interface NewsArticleAuthorProp {
   author_data: ArticleAuthor,
   date: string,
}

function NewsArticleAuthor({ author_data, date }: NewsArticleAuthorProp) {
   return (
      <div className='newsArticleAuthor__container'>
         <div className='newsArticleAuthor__imgContainer'>
            {author_data.img && (<img className='newsArticleAuthor__img' src={author_data.img} alt={author_data.name} />)}
         </div>
         <div className='newsArticleAuthor__info'>
            <div className='newsArticleAuthor__name'>{author_data.name}</div>
            <div className='newsArticleAuthor__date'>{date}</div>
         </div>
      </div>
   )
}

export default NewsArticleAuthor