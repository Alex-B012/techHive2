import { Link } from 'react-router-dom';
import './newsCategoryBtn.css'
import { NewsCategory } from '../../../../types/news';

interface NewsCategoryBtnProp {
   newsCat_data: NewsCategory;
}

function NewsCategoryBtn({ newsCat_data }: NewsCategoryBtnProp) {
   return (
      <Link className='newsCategoryBtn__link' to={`/news/${newsCat_data.url}`}>
         <button className='newsCategoryBtn__btn'>
            {newsCat_data.name}
         </button>
      </Link>
   )
}

export default NewsCategoryBtn