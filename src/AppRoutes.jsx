import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import PortfolioWeddings from "./pages/portfolio/PortfolioWeddings";
import PortfolioWeddingAlbums from "./pages/portfolio/PortfolioWeddingAlbums";
import WeddingAparnaAndRahul from "./pages/portfolio/albums/wedding-albums/WeddingSarahAndMike";
import WeddingSnehaAndAkshay from "./pages/portfolio/albums/wedding-albums/WeddingDowntownLoft";
import FlorenciaWeddingDress from "./pages/portfolio/albums/wedding-albums/WeddingGardenCeremony";
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
              <Route path="albums">
                <Route index element={<PortfolioWeddingAlbums />} />
              </Route>
              <Route path="album">
                <Route
                  path="aparna-and-rahul"
                  element={<WeddingAparnaAndRahul />}
                />
                <Route path="sneha-and-akshay" element={<WeddingSnehaAndAkshay />} />
                <Route
                  path="florencias-wedding-dress"
                  element={<FlorenciaWeddingDress />}
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
