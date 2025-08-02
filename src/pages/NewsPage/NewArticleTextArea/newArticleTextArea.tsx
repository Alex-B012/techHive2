import { NewsItem } from '../../../types/newsPanel'
import ArticleContentTemplate from './ArticleContentTemplate/ArticleContentTemplate';
import './newArticleTextArea.css'

interface NewArticleTextAreaProp {
   data: NewsItem;
}

function NewArticleTextArea({ data }: NewArticleTextAreaProp) {
   return (
      <div className='newArticleTextArea__container'>
         {data.text.map((item) => (<ArticleContentTemplate content={item} key={item.id_par} />))}
      </div>
   )
}

export default NewArticleTextArea