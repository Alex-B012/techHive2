import { Routes, Route, useLocation } from "react-router-dom";
import './App.css';

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import News from "./components/News/News";
import Video from "./components/Video/Video";
// import Home from "./Pages/Pricing/Pricing";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <div className="App">
      <Header />
      {isHomePage && <Video />}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/pricing" element={<Pricing />} /> */}
      </Routes>
      <News />
      <Footer />
    </div>
  );
}

export default App;
