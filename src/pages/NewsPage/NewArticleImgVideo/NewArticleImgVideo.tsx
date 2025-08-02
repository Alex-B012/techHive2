import { ImageData, VideoData } from '../../../types/newsPanel'
import NewArticleImg from './NewArticleImg/NewArticleImg'
import './newArticleImgVideo.css'
import NewArticleVideo from './NewArticleVideo/NewArticleVideo'

interface NewArticleImgVideoProp {
   img?: ImageData,
   video?: VideoData,
}

function NewArticleImgVideo({ img, video }: NewArticleImgVideoProp) {
   return (
      <div className='newArticleImgVideo__container'>
         {img && (<NewArticleImg imgObj={img} />)}
         {!img && video && <NewArticleVideo videoObj={video} />}
      </div>
   )
}

export default NewArticleImgVideo