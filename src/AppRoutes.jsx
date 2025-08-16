import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import MainLayout from "./layouts/MainLayout";
import Weddings from "./pages/Weddings";
import WeddingAlbums from "./pages/WeddingAlbums";
import WeddingAlbumDetails from "./pages/WeddingAlbumDetails";
import Commercial from "./pages/Commercial";
import Personal from "./pages/Personal";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WeddingHighlights from "./pages/WeddingHighlights";

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="weddings" replace />} />

          <Route path="weddings">
            <Route index element={<Weddings />} />
            <Route path="albums" element={<WeddingAlbums />} />
            <Route path="albums/:albumSlug" element={<WeddingAlbumDetails />} />
            <Route path="highlights" element={<WeddingHighlights />} />
          </Route>

          <Route path="commercial">
            <Route index element={<Commercial />} />
          </Route>

          <Route path="personal">
            <Route index element={<Personal />} />
          </Route>

          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          <Route path="*" element={<Navigate to="weddings" replace />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
