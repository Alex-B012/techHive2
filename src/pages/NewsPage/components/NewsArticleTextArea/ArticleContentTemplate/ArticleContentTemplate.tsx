import { ArticleParagraphInterface } from '../../../../../types/newsPanel';
import './articleContentTemplate.css'
import NewsArticleImg from '../../NewsArticleImg/NewsArticleImg';
import NewArticleVideo from '../../NewsArticleVideo/NewsArticleVideo';
import ArticleParagraph from '../../ArticleParagraph/ArticleParagraph';

interface ArticleContentTemplateProp {
   content: ArticleParagraphInterface;
}

function ArticleContentTemplate({ content }: ArticleContentTemplateProp) {
   return (
      <div className='articleContentTemplate__container'>
         {content.heading && (
            <h4 className='articleContentTemplate__title'>
               {content.heading}
            </h4>)
         }

         {content.heading_videoObj?.video && <NewArticleVideo videoObj={content.heading_videoObj} />}
         {content.heading_yt_videoObj?.video && <NewArticleVideo videoObj={content.heading_yt_videoObj} />}

         {!content.heading_videoObj?.video && !content.heading_yt_videoObj?.video && content.heading_imgObj?.img && <NewsArticleImg imgObj={content.heading_imgObj} />}

         {content.paragraphs.map((item, index) => <ArticleParagraph text={item} key={index} />)}
      </div>
   )
}

export default ArticleContentTemplate