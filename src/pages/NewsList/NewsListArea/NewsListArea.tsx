import "./newsListArea.css"
import {
   newsCategories_info,
   newsPage_intro,
   news_data,
} from "../../../data/news";
import NewsCategoryBtns from "../components/NewsCategoryBtns/NewsCategoryBtns";
import { NewsPageIntro } from "../../../types/news";

interface NewsListAreaProp {
   intro: NewsPageIntro;
}

function NewsListArea({ intro }: NewsListAreaProp) {
   return (
      <div className="newsListArea__container">
         <NewsCategoryBtns
            title={newsPage_intro.categoryBtnTitle}
            existing_categories={newsCategories_info}
         />
      </div>
   )
}

export default NewsListArea