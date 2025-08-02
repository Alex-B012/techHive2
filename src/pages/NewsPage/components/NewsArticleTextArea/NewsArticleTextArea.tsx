import { NewsItem } from '../../../../types/newsPanel'
import ArticleContentTemplate from './ArticleContentTemplate/ArticleContentTemplate';
import './newsArticleTextArea.css'

interface NewsArticleTextAreaProp {
   data: NewsItem;
}

function NewsArticleTextArea({ data }: NewsArticleTextAreaProp) {
   return (
      <div className='newsArticleTextArea__container'>
         {data.text.map((item) => (<ArticleContentTemplate content={item} key={item.id_par} />))}
      </div>
   )
}

export default NewsArticleTextArea