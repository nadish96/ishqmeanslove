import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import PortfolioWeddings from "./pages/portfolio/PortfolioWeddings";
import PortfolioWeddingBlogs from "./pages/portfolio/PortfolioWeddingBlogs";
import DynamicWeddingBlog from "./pages/portfolio/blogs/DynamicWeddingBlog";
import PortfolioArtists from "./pages/portfolio/PortfolioArtists";
import PortfolioFamily from "./pages/portfolio/PortfolioFamily";
import PortfolioBirthdays from "./pages/portfolio/PortfolioBirthdays";
import About from "./pages/About";
import Contact from "./pages/Contact";

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="portfolio">
            <Route path="weddings">
              <Route index element={<PortfolioWeddings />} />
              <Route path="blogs">
                <Route index element={<PortfolioWeddingBlogs />} />
              </Route>
              <Route path="blog/:slug" element={<DynamicWeddingBlog />} />
            </Route>
            <Route path="artists" element={<PortfolioArtists />} />
            <Route path="family" element={<PortfolioFamily />} />
            <Route path="birthdays" element={<PortfolioBirthdays />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
