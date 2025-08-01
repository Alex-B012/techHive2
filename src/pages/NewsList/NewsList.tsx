import WelcomeParagraph from "../../components/WelcomeParagraph/WelcomeParagraph";
import "./newsList.css";
import { newsPage_intro } from "../../data/news";
import NewsListArea from "./NewsListArea/NewsListArea";

function NewsList() {
  console.log("newsPage_intro", newsPage_intro);

  return (
    <div className="newsListPage">
      <div className="newsListPage__empty"></div>
      <div className="newsListPage__container">
        <WelcomeParagraph
          title={newsPage_intro.title}
        />
        <NewsListArea intro={newsPage_intro} />

      </div>
    </div>
  );
}

export default NewsList;
