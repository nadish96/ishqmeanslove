import { NavLink } from "react-router-dom";
import { useState } from "react";

const navLinks = [
  {
    label: "Weddings",
    path: "/weddings",
    subLinks: [
      { label: "Highlights", path: "/weddings" },
      { label: "Full Albums", path: "/weddings/albums" },
    ],
  },
  { label: "Commercial", path: "/commercial" },
  { label: "Personal", path: "/personal" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null); // track which dropdown is open

  return (
    <header className="sticky top-0 z-50 bg-[#f9f6f3] text-[#1e1e1e]">
      {/* Top Bar */}
      <div className="relative py-4 px-6 pb-8 flex items-center justify-between">
        {/* Left: Social link */}
        <a
          href="https://www.instagram.com/nadishsood"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[#8c735b] hover:text-[#1e1e1e] transition-colors"
        >
          Instagram
        </a>

        {/* Center: Site title */}
        <h1 className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-2xl sm:text-3xl md:text-4xl font-serif font-bold tracking-wide uppercase text-[#1e1e1e]">
          Nadish Sood
        </h1>

        {/* Right: Hamburger (mobile) */}
        <button
          className="block md:hidden text-[#1e1e1e] text-2xl"
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
          <div key={link.label} className="relative">
            {link.subLinks ? (
              <>
                {/* Parent Link for Mobile (toggle sublinks) */}
                <button
                  onClick={() =>
                    setDropdownOpen(
                      dropdownOpen === link.label ? null : link.label
                    )
                  }
                  className="text-[#8c735b] hover:text-[#1e1e1e] md:hidden"
                >
                  {link.label}
                </button>

                {/* Parent Link for Desktop */}
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `hidden md:inline text-[#8c735b] hover:text-[#1e1e1e] ${
                      isActive ? "font-semibold text-[#1e1e1e]" : ""
                    }`
                  }
                >
                  {link.label}
                </NavLink>

                {/* Sublinks */}
                <div
                  className={`${
                    dropdownOpen === link.label ? "block" : "hidden"
                  } flex flex-col items-center md:absolute md:mt-2 md:shadow-md md:bg-[#f9f6f3] md:border md:rounded md:p-2 md:space-y-1`}
                >
                  {link.subLinks.map((sub) => (
                    <NavLink
                      key={sub.path}
                      to={sub.path}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        isActive
                          ? "text-[#1e1e1e] font-semibold"
                          : "text-[#8c735b] hover:text-[#1e1e1e]"
                      }
                    >
                      {sub.label}
                    </NavLink>
                  ))}
                </div>
              </>
            ) : (
              <NavLink
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#1e1e1e] font-semibold"
                    : "text-[#8c735b] hover:text-[#1e1e1e]"
                }
              >
                {link.label}
              </NavLink>
            )}
          </div>
        ))}
      </nav>
    </header>
  );
};

export default Header;
