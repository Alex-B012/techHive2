import { ImageData, VideoData } from '../../../../types/newsPanel'
import './newsArticleImgVideo.css'
import NewsArticleImg from '../NewsArticleImg/NewsArticleImg'
import NewsArticleVideo from '../NewsArticleVideo/NewsArticleVideo'

interface NewsArticleImgVideoProp {
   img?: ImageData,
   video?: VideoData,
}

function NewsArticleImgVideo({ img, video }: NewsArticleImgVideoProp) {
   return (
      <div className='newsArticleImgVideo__container'>
         {img && (<NewsArticleImg imgObj={img} />)}
         {!img && video && <NewsArticleVideo videoObj={video} />}
      </div>
   )
}

export default NewsArticleImgVideo