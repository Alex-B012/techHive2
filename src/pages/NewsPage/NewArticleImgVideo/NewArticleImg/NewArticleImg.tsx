import { ImageData } from '../../../../types/newsPanel'
import './newArticleImg.css'

interface NewArticleImg {
   imgObj: ImageData,
}

function NewArticleImg({ imgObj }: NewArticleImg) {
   return (
      <div className='newArticleImg__container'>
         <img className='newArticleImg__img' src={imgObj.img} />
      </div>
   )
}

export default NewArticleImg