import "./App.css";
import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import PortfolioPage from "./components/PortfolioPage";
import BlogPage from "./components/BlogPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/blog" element={<BlogPage />} />
    </Routes>
  );
}

export default App;
