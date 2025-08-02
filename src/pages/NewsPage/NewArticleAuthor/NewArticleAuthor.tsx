import { ArticleAuthor } from '../../../types/news'
import './newArticleAuthor.css'

interface NewArticleAuthorProp {
   author_data: ArticleAuthor,
   date: string,
}

function NewArticleAuthor({ author_data, date }: NewArticleAuthorProp) {
   return (
      <div className='newArticleAuthor__container'>
         <div className='newArticleAuthor__imgContainer'>
            {author_data.img && (<img className='newArticleAuthor__img' src={author_data.img} alt={author_data.name} />)}
         </div>
         <div className='newArticleAuthor__info'>
            <div className='newArticleAuthor__name'>{author_data.name}</div>
            <div className='newArticleAuthor__date'>{date}</div>
         </div>
      </div>
   )
}

export default NewArticleAuthor