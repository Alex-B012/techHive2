import { Routes, Route, useLocation } from "react-router-dom";
import './App.css';

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import NewsPanel from "./components/NewsPanel/NewsPanel";
import Video from "./components/Video/Video";
import Pricing from "./pages/Pricing/Pricing";
import NewsList from "./pages/NewsList/NewsList";
import Contacts from "./pages/Contacts/Contacts";
import Careers from "./pages/Careers/Careers";
import Team from "./pages/Team/Team";
import NotFound from "./pages/NotFound/NotFound";


import Banner from "./components/Banner/banner";
import { banner_info } from "./data/pricing/pricing"



function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isPricingPage = location.pathname === "/pricing";
  const isNewsPage = location.pathname === "/news";

  return (
    <div className="App">
      <Header />
      {isHomePage && <Video />}
      {isPricingPage && <Banner data={banner_info} />}
      {/* {isNewsPage && <Banner data={""} />} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        {/* <Route path="/pricing/:categoryId" element={<Category />} /> */}
        {/* <Route path="/pricing/:categoryId/:productId" element={<Product />} /> */}

        <Route path="/news" element={<NewsList />} />
        {/* <Route path="/news/:newsId" element={<NewsPage />} /> */}
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/team" element={<Team />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <NewsPanel />
      <Footer />
    </div>
  );
}

export default App;
