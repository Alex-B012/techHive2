import { NewsCategoriesInfo, NewsCategoryBtnInfo } from "../../../types/news";
import NewsCategoryBtn from "../components/NewsCategoryBtn/NewsCategoryBtn";
import "./newsCategoryBtns.css"

interface NewsCategoryBtnsProp {
   title: string;
   existing_categories: NewsCategoriesInfo;
}

function chooseNewsCategory(name: string) {
   console.log("chooseNewsCategory - start")
}

function NewsCategoryBtns({ title, existing_categories }: NewsCategoryBtnsProp) {

   return (
      <div className="newsCategoryBtns__container">
         <h2 className="newsCategoryBtns__title">{title}</h2>
         {existing_categories && (<ul className="newsListCategotyBtns__btnsList">
            {Object.entries(existing_categories).map(([key, category]) => (
               <NewsCategoryBtn key={key} name={category.name} />
            ))}
         </ul>)}
      </div>
   )
}

export default NewsCategoryBtns