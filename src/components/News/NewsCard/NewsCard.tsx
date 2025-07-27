import { Link } from "react-router-dom";
import "./newscard.css";
import { Article } from "../../../types/news";

interface NewsCardProps {
   item: Article;
   order: number;
}

function NewsCard({ item, order }: NewsCardProps) {
   const news__animation = "news__animation", news__animation2 = "news__animation2";
   return (
      <div className="news__card">
         <p className="news__cardText">
            <span>{item.promoTitle}</span>
            <Link
               to={item.url}
               className={`news__cardLink ${order === 0 ? news__animation : order === 2 ? news__animation2 : ""}`}
            >
               {"Learn More >>>"}
            </Link>
         </p>
      </div>
   );
}

export default NewsCard;