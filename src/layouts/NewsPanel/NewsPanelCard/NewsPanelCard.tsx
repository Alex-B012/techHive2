import { Link } from "react-router-dom";
import "./newsPanelCard.css";
import { NewsItem } from "../../../types/newsPanel";

interface NewsPanelCardProps {
   item: NewsItem;
   order: number;
}

function NewsPanelCard({ item, order }: NewsPanelCardProps) {
   const news__animation = "newsPanelCard__animation", news__animation2 = "newsPanelCard__animation2";
   return (
      <div className="newsPanelCard__card">
         <p className="newsPanelCard__cardText">
            <span>{item.promoTitle}</span>
            <Link
               to={`/news/${item.id}`}
               className={`newsPanelCard__cardLink ${order === 0 ? news__animation : order === 2 ? news__animation2 : ""}`}
            >
               {"Learn More >>>"}
            </Link>
         </p>
      </div>
   );
}

export default NewsPanelCard;