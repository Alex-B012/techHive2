import { Routes, Route, useLocation } from "react-router-dom";
import './App.css';

import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";

import Home from "./pages/Home/Home";
import Pricing from "./pages/Pricing/Pricing";
import NewsList from "./pages/NewsList/NewsList";
import Contacts from "./pages/Contacts/Contacts";
import Careers from "./pages/Careers/Careers";
import Team from "./pages/Team/Team";
import NotFound from "./pages/NotFound/NotFound";

import NewsPanel from "./layouts/NewsPanel/NewsPanel";
import { news_data } from "./data/news";

import Video from "./layouts/VideoPanel/VideoPanel";
import { videoSources } from "./data/videos";

import Banner from "./layouts/Banner/banner";
import { banner_info } from "./data/pricing/pr_pricing"
import NewsPage from "./pages/NewsPage/NewsPage";
import NewsCategoryPage from "./pages/NewsCategoryPage/NewsCategoryPage";
import PricingCategory from "./pages/PricingCategory/PricingCategory";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isPricingPage = location.pathname === "/pricing";
  // const isNewsPage = location.pathname === "/news";

  return (
    <div className="App">
      <Header />
      {isHomePage && <Video data={videoSources} />}
      {isPricingPage && <Banner data={banner_info} />}
      {/* {isNewsPage && <Banner data={""} />} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/pricing/:categoryId" element={<PricingCategory />} />
        {/* <Route path="/pricing/:categoryId/:productId" element={<Product />} /> */}

        <Route path="/news" element={<NewsList />} />
        <Route path="/news/:newsCategory" element={<NewsCategoryPage />} />
        <Route path="/news/:newsCategory/:newsId" element={<NewsPage />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/team" element={<Team />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <NewsPanel data={news_data} />
      <Footer />
    </div>
  );
}

export default App;
