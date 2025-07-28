import "./newspanel.css";
import { news_data } from "../../data/news";
import NewsPanelCard from "./NewsPanelCard/NewsPanelCard";
import { prepareNewsArray } from "../../utils/arrayFuncs";

function NewsPanel() {
   const shuffledNews = prepareNewsArray(news_data);

   return (
      <section className="newsPanel__section">
         <div className="newsPanel__cardsList">
            {shuffledNews.map((item, num) => (
               <NewsPanelCard key={item.id} item={item} order={num} />
            ))}
         </div>
      </section>
   );
}

export default NewsPanel;