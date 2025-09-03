import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import PortfolioWeddings from "./pages/PortfolioWeddings";
import PortfolioGalleryWedding from "./pages/PortfolioGalleryWedding";
import WeddingSarahAndMike from "./pages/WeddingSarahAndMike";
import WeddingDowntownLoft from "./pages/WeddingDowntownLoft";
import WeddingFallVineyard from "./pages/WeddingFallVineyard";
import WeddingGardenCeremony from "./pages/WeddingGardenCeremony";
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
            <Route path="weddings">
              <Route index element={<PortfolioWeddings />} />
              <Route path="gallery">
                <Route index element={<PortfolioGalleryWedding />} />
                <Route
                  path="sarah-and-mike"
                  element={<WeddingSarahAndMike />}
                />
                <Route path="downtown-loft" element={<WeddingDowntownLoft />} />
                <Route path="fall-vineyard" element={<WeddingFallVineyard />} />
                <Route
                  path="garden-ceremony"
                  element={<WeddingGardenCeremony />}
                />
              </Route>
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
