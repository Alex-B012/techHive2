import "./newsListArea.css"
import {
   newsCategories_info,
   newsPage_intro,
   news_data,
} from "../../../data/news";
import NewsCategoryBtns from "../components/NewsCategoryBtns/NewsCategoryBtns";
import { NewsPageIntro } from "../../../types/news";
import NewCategoryCards from "./NewCategoryCards/NewCategoryCards";

interface NewsListAreaProp {
   intro: NewsPageIntro;
}

function chooseNewsCategory(name: string) {
   console.log("chooseNewsCategory - start")
}

function NewsListArea({ intro }: NewsListAreaProp) {
   return (
      <div className="newsListArea__container">
         <NewsCategoryBtns
            title={newsPage_intro.categoryBtnTitle}
            existing_categories={newsCategories_info}
         />
         <NewCategoryCards data={news_data} />
      </div>
   )
}

export default NewsListArea