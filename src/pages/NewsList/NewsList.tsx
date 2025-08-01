import WelcomeParagraph from "../../components/WelcomeParagraph/WelcomeParagraph";
import "./newsList.css";
import {
  newsCategories_info,
  newsPage_intro,
  news_data,
} from "../../data/news";
import NewsCategoryBtns from "./NewsCategoryBtns/NewsCategoryBtns";

function NewsList() {
  console.log("newsPage_intro", newsPage_intro);

  return (
    <div className="newsListPage">
      <div className="newsListPage__empty"></div>
      <div className="newsListPage__container">
        <WelcomeParagraph
          title={newsPage_intro.title}
        />
        <div className="newsListArea__container">
          <div className="newsListArea__categoryBtns"></div>
          <NewsCategoryBtns
            title={""}
            existing_categories={newsCategories_info}
          />
          {/* <NewsListArea data={news_data} /> */}
          <div className="newsListArea__list">
            <div className="newsListCard__container">
              <img src="" alt="" className="newsListCard__img" />
              <h3 className="newsListCard__title"></h3>
              <div className="newsListCard__info">

                {/* <span className="newsListCard__author">{`By ${author}`}</span> */}
                {/* <span className="newsListCard__date">{`published ${date}`}</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsList;
