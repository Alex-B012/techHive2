import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './newsPage.css'
import NewsHeadlines from './components/NewsHeadlines/NewsHeadlines'
import { news_data, newsCategories_info } from '../../data/news';
import { getNewsDataFromArray } from '../../utils/newsUtils';
import NewsNavigation from './components/NewsNavigation/NewsNavigation';
import NewsArticleAuthor from './components/NewsArticleAuthor/NewsArticleAuthor';
import NewsArticleImgVideo from './components/NewsArticleImgVideo/NewsArticleImgVideo';
import NewsArticleTextArea from './components/NewsArticleTextArea/NewsArticleTextArea';
import { scrollToTop } from '../../utils/miscUtils';

function NewsPage() {
   const { newsCategory, newsId } = useParams<{
      newsCategory: string;
      newsId: string;
   }>();
   const [newsData, setNewsData] = useState<any>(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);

   const fetchNews = useCallback(async () => {
      try {
         setLoading(true);

         if (!newsCategory || !newsId) throw new Error('Invalid parameters');
         const news_id = parseInt(newsId, 10);
         if (isNaN(news_id) || news_id <= 0) throw new Error('Invalid news ID');

         const obj = { newsId: news_id, news_data: news_data };
         const data = await getNewsDataFromArray(obj);
         if (!data) throw new Error('Data not found');

         setNewsData(data);
         setLoading(false);
      } catch (error: unknown) {
         if (error instanceof Error) {
            setError(error.message || 'Failed to fetch news');
         } else {
            setError('Failed to fetch news');
         }
         setLoading(false);
         console.error('Error fetching news:', error);
      }
   }, [newsId, newsCategory]);

   useEffect(() => {
      if (newsId && newsCategory) {
         fetchNews();
      }
   }, [newsId, newsCategory, fetchNews]);


   useEffect(() => {
      scrollToTop();
   }, []);

   return (
      <div className="newsPage">
         <div className="newsPage__empty" />
         <div className="newsPage__container">
            {loading && (
               <div className="loading-indicator">
                  <p>Loading...</p>
               </div>
            )}
            {error && (
               <div className="error-message">
                  <p>Error: {error}</p>
               </div>
            )}
            {!loading && !error && newsData && (
               <div className='newsPage__content'>
                  <NewsNavigation news_url={newsCategory || ''} categoriesArr={newsCategories_info} />
                  <NewsHeadlines
                     title={newsData.title}
                     subtitle={newsData.subtitle}
                  />
                  <NewsArticleAuthor author_data={newsData.article_authorObj} date={newsData.date} />
                  {newsData.article_yt_videoObj.video &&
                     <NewsArticleImgVideo video={newsData.article_yt_videoObj} />}
                  {!newsData.article_yt_videoObj.video && <NewsArticleImgVideo img={newsData.article_imgObj} />}
                  <NewsArticleTextArea data={newsData} />
               </div>
            )}
            {!loading && !error && !newsData && (
               <div className="no-data">
                  <p>No news found for this category/id</p>
               </div>
            )}
         </div>
      </div>
   );
}

export default NewsPage