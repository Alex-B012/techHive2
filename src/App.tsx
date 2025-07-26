import { Routes, Route } from "react-router-dom";
import './App.css';

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
// import Home from "./Pages/Pricing/Pricing";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/pricing" element={<Pricing />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
