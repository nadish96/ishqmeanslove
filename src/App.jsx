import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Wedding from "./pages/Wedding";
import Commercial from "./pages/Commercial";
import Personal from "./pages/Personal";
import About from "./pages/About";
import Contact from "./pages/Contact";

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/wedding" replace />} />
        <Route path="/wedding" element={<Wedding />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <Header />
      <main className="p-6">
        <AppRoutes />
      </main>
    </Router>
  );
}

export default App;
