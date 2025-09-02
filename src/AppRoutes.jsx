import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import PortfolioGallery from "./pages/PortfolioGallery";
import PortfolioWedding from "./pages/PortfolioWedding";
import PortfolioArtists from "./pages/PortfolioArtists";
import PortfolioFamily from "./pages/PortfolioFamily";
import PortfolioBirthdays from "./pages/PortfolioBirthdays";
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
            <Route index element={<Portfolio />} />
            <Route path="galleries">
              <Route index element={<PortfolioGallery />} />
              <Route path="wedding" element={<PortfolioWedding />} />
              <Route path="artists" element={<PortfolioArtists />} />
              <Route path="family" element={<PortfolioFamily />} />
              <Route path="birthdays" element={<PortfolioBirthdays />} />
            </Route>
          </Route>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />3{" "}
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
