import { Link } from "react-router-dom";
import "./newscard.css";
import { Article } from "../../../types/news";

interface NewsCardProps {
   item: Article;
   order: number;
}

function NewsCard({ item, order }: NewsCardProps) {
   const news__animation = "news__animation";
   return (
      <div className="news__card">
         <p className="news__cardText">
            <span>{item.promoTitle}</span>
            <Link
               to={item.url}
               className={`news__cardLink ${order === 0 || order === 2 ? news__animation : ""}`}
            >
               {"Learn More >>>"}
            </Link>
         </p>
      </div>
   );
}

export default NewsCard;