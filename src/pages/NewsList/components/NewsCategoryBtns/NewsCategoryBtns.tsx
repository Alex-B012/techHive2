import { NewsCategoriesInfo, NewsCategoryBtnInfo } from "../../../../types/news";
import NewsCategoryBtn from "../NewsCategoryBtn/NewsCategoryBtn";
import "./newsCategoryBtns.css"

interface NewsCategoryBtnsProp {
   title: string;
   existing_categories: NewsCategoriesInfo;
}

function NewsCategoryBtns({ title, existing_categories }: NewsCategoryBtnsProp) {
   return (
      <div className="newsCategoryBtns__container">
         <h2 className="newsCategoryBtns__title">{title}</h2>
         {existing_categories && (
            <div className="newsListCategotyBtns__btnsList">
               {Object.entries(existing_categories).map(([key, category]) => (
                  <NewsCategoryBtn key={key} newsCat_data={category} />
               ))}
            </div>)}
      </div>
   )
}

export default NewsCategoryBtns