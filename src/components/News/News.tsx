import "./news.css";
import { news_data } from "../../data/news";
import NewsCard from "./NewsCard/NewsCard";
import { prepareNewsArray } from "../../utils/arrayFuncs";

function News() {
   const shuffledNews = prepareNewsArray(news_data);

   return (
      <section className="news__section">
         <div className="news__cardsList">
            {shuffledNews.map((item, num) => (
               <NewsCard key={item.id} item={item} order={num} />
            ))}
         </div>
      </section>
   );
}

export default News;