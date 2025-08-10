import NewCategoryCards from '../NewsList/NewsListArea/NewCategoryCards/NewsCategoryCards'
import './newsCategoryPage.css'
import { news_data, newsCategories_info } from "../../data/news"
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getNewsCategoryDataFromArray, getNewsCategoryName } from '../../utils/newsUtils';
import { NewsItem } from '../../types/newsPanel';
import NewsCategoryBtns from '../NewsList/components/NewsCategoryBtns/NewsCategoryBtns';
import { scrollToTop } from '../../utils/miscUtils';

function NewsCategoryPage() {
   const { newsCategory } = useParams<{
      newsCategory: string;
   }>();

   const [newsCategoryData, setNewsCategoryData] = useState<NewsItem[]>([]);
   const [newsCategoryName, setNewsCategoryName] = useState<string | null>(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);


   const fetchNews = useCallback(async () => {
      try {
         setLoading(true);

         if (!newsCategory || typeof newsCategory !== 'string') {
            throw new Error('Invalid parameters');
         }

         const obj = {
            newsCategoryUrl_par: newsCategory,
            news_data: news_data,
            categoriesArr: newsCategories_info,
         };
         const data = await getNewsCategoryDataFromArray(obj);

         if (!data) {
            throw new Error('Data not found');
         }

         setNewsCategoryData(data.resultArr);
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
   }, [newsCategory]);

   useEffect(() => {
      if (newsCategory) {
         fetchNews();
         let result = getNewsCategoryName({ categoryUrl: newsCategory, categoriesArr: newsCategories_info })
         setNewsCategoryName(result)

      }
   }, [newsCategory, fetchNews]);

   useEffect(() => {
      scrollToTop();
   }, []);

   return (
      <div className="newsCategoryPage">
         <div className="newsCategoryPage__empty"></div>
         <div className="newsCategoryPage__container">

            {newsCategoryName && <NewsCategoryBtns
               title={newsCategoryName || ''}
               existing_categories={newsCategories_info}
               allCategories={true}
               showAll={true}
            />}

            {loading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            <NewCategoryCards data={newsCategoryData} />
         </div>
      </div>
   );
}

export default NewsCategoryPage
