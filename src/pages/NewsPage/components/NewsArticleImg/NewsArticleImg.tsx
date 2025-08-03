import { ImageData } from '../../../../types/newsPanel'
import './newsArticleImg.css'

interface NewsArticleImgProp {
   imgObj: ImageData,
}

function NewsArticleImg({ imgObj }: NewsArticleImgProp) {
   return (
      <div className='newsArticleImg__container'>
         <img className='newsArticleImg__img' src={imgObj.img} alt={`${imgObj.name}`} />
      </div>
   )
}

export default NewsArticleImg