import { useParams } from "react-router-dom";
import { NewsCategoriesInfo } from "../../../../types/news";
import NewsCategoryBtn from "../NewsCategoryBtn/NewsCategoryBtn";
import "./newsCategoryBtns.css";

interface NewsCategoryBtnsProp {
   title: string;
   existing_categories: NewsCategoriesInfo;
   allCategories: boolean;
   showAll: boolean;
}

function NewsCategoryBtns({
   title,
   existing_categories,
   showAll = false,
}: NewsCategoryBtnsProp) {

   const { newsCategory } = useParams<{
      newsCategory: string;
   }>();

   return (
      <div className="newsCategoryBtns__container">
         <h2 className="newsCategoryBtns__title">{title}</h2>
         {existing_categories && (
            <div className="newsListCategotyBtns__btnsList">
               {Object.entries(existing_categories).map(([key, category]) => {
                  return (
                     key !== "all" && showAll === false ? (
                        <NewsCategoryBtn
                           key={key}
                           newsCat_data={category}
                           addAllCategories={false}
                        />
                     ) : showAll === true && key === "all" ? (
                        <NewsCategoryBtn
                           key={key}
                           newsCat_data={category}
                           addAllCategories={true}
                        />
                     ) : category.url === newsCategory ? ("") : (<NewsCategoryBtn
                        key={key}
                        newsCat_data={category}
                        addAllCategories={false}
                     />)
                  )
               })}
            </div>
         )}
      </div>
   );
}

export default NewsCategoryBtns;
