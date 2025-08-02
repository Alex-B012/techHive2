import { ImageData, VideoData } from '../../../../types/newsPanel'
import './newsArticleImgVideo.css'
import NewArticleVideo from '../NewsArticleVideo/NewsArticleVideo'
import NewsArticleImg from '../NewsArticleImg/NewsArticleImg'

interface NewsArticleImgVideoProp {
   img?: ImageData,
   video?: VideoData,
}

function NewsArticleImgVideo({ img, video }: NewsArticleImgVideoProp) {
   return (
      <div className='newsArticleImgVideo__container'>
         {img && (<NewsArticleImg imgObj={img} />)}
         {!img && video && <NewArticleVideo videoObj={video} />}
      </div>
   )
}

export default NewsArticleImgVideo