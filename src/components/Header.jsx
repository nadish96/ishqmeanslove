import { NavLink } from "react-router-dom";
import { useState } from "react";

const navLinks = [
  { label: "Weddings", path: "/weddings" },
  { label: "Commercial", path: "/commercial" },
  { label: "Personal", path: "/personal" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white -b ">
      {/* Top Bar */}
      <div className="relative py-4 px-6 pb-8 flex items-center justify-between">
        {/* Left: Social links */}
        <div className="text-sm text-gray-500">IG / FB</div>

        {/* Center: Site title */}
        <h1 className="absolute left-1/2 -translate-x-1/2 text-4xl font-bold tracking-wide text-gray-800">
          Nadish Sood
        </h1>

        {/* Right: Hamburger (mobile only) */}
        <button
          className="block md:hidden text-gray-600 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Nav Links */}
      <nav
        className={`${
          menuOpen ? "block" : "hidden"
        } flex flex-col items-center gap-4 pb-4 md:flex md:flex-row md:justify-center md:gap-6 md:pb-0 border-t md:border-t-0`}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-black font-semibold"
                : "text-gray-500 hover:text-black"
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
