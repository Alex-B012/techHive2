import { Link } from 'react-router-dom';
import './newsCategoryBtn.css';
import { NewsCategory } from '../../../../types/news';

interface NewsCategoryBtnProp {
   newsCat_data: NewsCategory;
   addAllCategories: boolean;
}

function NewsCategoryBtn({ newsCat_data, addAllCategories }: NewsCategoryBtnProp) {
   const path = addAllCategories ? '/news' : `/news/${newsCat_data.url}`;

   return (
      < Link
         className="newsCategoryBtn__link"
         to={path}
      >
         <span className="newsCategoryBtn__btn">
            {newsCat_data.name}
         </span>
      </ Link >
   );
}

export default NewsCategoryBtn;
