import { NewsItem } from '../../../../types/newsPanel';
import { prepareNewsCards } from '../../../../utils/arrayFuncs';
import './newCategoryCards.css'
import NewsCategoryCard from './NewsCategoryCard/NewsCategoryCard';

interface NewCategoryCardsProp {
   data: NewsItem[];
}

function NewCategoryCards({ data }: NewCategoryCardsProp) {
   const newsForDisplay = prepareNewsCards(data);

   return (
      <div className='newCategoryCards__container'>
         {newsForDisplay && newsForDisplay.map((item) => (
            <NewsCategoryCard data={item} key={item.id} />
         ))}
      </div>
   )
}

export default NewCategoryCards