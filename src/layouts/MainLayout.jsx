import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        <Outlet /> {/* This renders the nested route pages */}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
