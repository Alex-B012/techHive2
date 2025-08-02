import { NewsItem } from '../../../types/newsPanel'
import './newArticleTextArea.css'

interface NewArticleTextAreaProp {
   data: NewsItem;
}

function NewArticleTextArea({ data }: NewArticleTextAreaProp) {
   return (
      <div className='newArticleTextArea__container'>

      </div>
   )
}

export default NewArticleTextArea