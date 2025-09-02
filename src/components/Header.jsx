import { NavLink } from "react-router-dom";
import { useState } from "react";

const navLinks = [
  { label: "Portfolio", path: "/portfolio" },
  {
    label: "Galleries",
    path: "/portfolio/galleries",
    subLinks: [
      { label: "Wedding", path: "/portfolio/galleries/wedding" },
      { label: "Artists", path: "/portfolio/galleries/artists" },
      { label: "Family", path: "/portfolio/galleries/family" },
      { label: "Birthdays", path: "/portfolio/galleries/birthdays" },
    ],
  },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null); // track which dropdown is open

  return (
    <header className="sticky top-0 z-50 bg-[#f9f6f3] text-[#1e1e1e]">
      {/* Top Bar */}
      <div className="py-4 px-6 pb-8 flex items-center justify-between">
        {/* Left: Site title */}
        <NavLink 
          to="/"
          className="whitespace-nowrap text-2xl sm:text-3xl md:text-4xl font-alt-heading font-bold tracking-wide uppercase text-[#1e1e1e] hover:text-[#8c735b] transition-colors"
        >
          Nadish Sood
        </NavLink>

        {/* Right: Navigation (desktop) */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <div key={link.label} className="relative">
              {link.subLinks ? (
                <>
                  {/* Parent Link for Desktop */}
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-[#8c735b] hover:text-[#1e1e1e] ${
                        isActive ? "font-semibold text-[#1e1e1e]" : ""
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>

                  {/* Sublinks */}
                  <div className="absolute mt-2 shadow-md bg-[#f9f6f3] border rounded p-2 space-y-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {link.subLinks.map((sub) => (
                      <NavLink
                        key={sub.path}
                        to={sub.path}
                        className={({ isActive }) =>
                          isActive
                            ? "block text-[#1e1e1e] font-semibold"
                            : "block text-[#8c735b] hover:text-[#1e1e1e]"
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

        {/* Right: Hamburger (mobile) */}
        <button
          className="block md:hidden text-[#1e1e1e] text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`${
          menuOpen ? "block" : "hidden"
        } md:hidden flex flex-col items-center gap-4 pb-4 border-t`}
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
                  className="text-[#8c735b] hover:text-[#1e1e1e]"
                >
                  {link.label}
                </button>

                {/* Sublinks for Mobile */}
                <div
                  className={`${
                    dropdownOpen === link.label ? "block" : "hidden"
                  } flex flex-col items-center mt-2 space-y-1`}
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
