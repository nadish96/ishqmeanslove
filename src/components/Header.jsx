import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="py-4 text-center">
        <h1 className="text-2xl font-bold tracking-wide text-gray-800">
          Adrien Sanguinetti
        </h1>
      </div>
      <nav className="flex justify-center gap-6 text-sm font-medium py-2 border-t">
        <NavLink
          to="/wedding"
          className={({ isActive }) =>
            isActive
              ? "text-black font-semibold"
              : "text-gray-500 hover:text-black"
          }
        >
          Wedding
        </NavLink>
        <NavLink
          to="/commercial"
          className={({ isActive }) =>
            isActive
              ? "text-black font-semibold"
              : "text-gray-500 hover:text-black"
          }
        >
          Commercial
        </NavLink>
        <NavLink
          to="/personal"
          className={({ isActive }) =>
            isActive
              ? "text-black font-semibold"
              : "text-gray-500 hover:text-black"
          }
        >
          Personal
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-black font-semibold"
              : "text-gray-500 hover:text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-black font-semibold"
              : "text-gray-500 hover:text-black"
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
