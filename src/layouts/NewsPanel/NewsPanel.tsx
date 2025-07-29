import "./newspanel.css";
import NewsPanelCard from "./NewsPanelCard/NewsPanelCard";
import { prepareNewsArray } from "../../utils/arrayFuncs";
import { Article } from "../../types/newsPanel";

interface NewsPanelProps {
   data: Article[]
}

function NewsPanel({ data }: NewsPanelProps) {
   const shuffledNews = prepareNewsArray(data);

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