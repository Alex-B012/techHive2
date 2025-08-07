import { useEffect, useRef, useState } from 'react';
import { NewsItem } from '../../../../types/newsPanel';
import { prepareNewsCards } from '../../../../utils/arrayUtils';
import './newsCategoryCards.css'
import NewsCategoryCard from './NewsCategoryCard/NewsCategoryCard';

interface NewsCategoryCardsProp {
   data: NewsItem[];
}

function NewsCategoryCards({ data }: NewsCategoryCardsProp) {
   const containerRef = useRef<HTMLDivElement>(null);
   const [rowsCount, setRowsCount] = useState<number>(0);
   const [newsForDisplay, setNewsForDisplay] = useState<NewsItem[]>([]);
   const [height] = useState<number>(160);

   useEffect(() => {
      const preparedNews = prepareNewsCards(data);
      setNewsForDisplay(preparedNews);
      setRowsCount(preparedNews.length);
   }, [data]);

   useEffect(() => {
      setRowsCount(newsForDisplay.length);
      if (containerRef.current) {
         const newGridTemplate = `repeat(${rowsCount} ${height}px)`;
         containerRef.current.style.setProperty('grid-template-rows', newGridTemplate);
      }
   }, [rowsCount, newsForDisplay, height]);

   return (
      <div className='newsCategoryCards__container'
         ref={containerRef} style={{
            display: 'grid',
            gridTemplateRows: `repeat(${rowsCount} ${height})`,
            gap: '1rem'
         }}>
         {newsForDisplay && newsForDisplay.map((item) => (
            <NewsCategoryCard data={item} key={item.id} />
         ))}
      </div>
   )
}

export default NewsCategoryCards