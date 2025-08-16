import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="p-6">
        <Outlet /> {/* This renders the nested route pages */}
      </main>
      {/* Optional: Add Footer component here if needed */}
    </>
  );
};

export default MainLayout;
