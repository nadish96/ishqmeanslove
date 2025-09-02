import { NavLink } from "react-router-dom";
import { useState } from "react";

const navLinks = [
  { label: "Portfolio", path: "/portfolio" },
  { label: "Galleries", path: "/portfolio/galleries" },
  {
    label: "Others",
    path: "#",
    subLinks: [
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
  const [dropdownOpen, setDropdownOpen] = useState(null);

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
            <div key={link.label} className="relative group">
              {link.subLinks ? (
                <>
                  {/* Dropdown parent */}
                  <button
                    className="text-[#8c735b] hover:text-[#1e1e1e] transition-colors"
                    onClick={(e) => e.preventDefault()}
                  >
                    {link.label}
                  </button>
                  
                  {/* Dropdown menu */}
                  <div className="absolute top-full left-0 mt-2 py-2 w-48 bg-[#f9f6f3] border border-gray-200 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {link.subLinks.map((subLink) => (
                      <NavLink
                        key={subLink.path}
                        to={subLink.path}
                        className={({ isActive }) =>
                          `block px-4 py-2 text-sm transition-colors ${
                            isActive
                              ? "text-[#1e1e1e] font-semibold bg-gray-100"
                              : "text-[#8c735b] hover:text-[#1e1e1e] hover:bg-gray-50"
                          }`
                        }
                      >
                        {subLink.label}
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
                {/* Mobile dropdown parent */}
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

                {/* Mobile dropdown items */}
                <div
                  className={`${
                    dropdownOpen === link.label ? "block" : "hidden"
                  } flex flex-col items-center mt-2 space-y-1`}
                >
                  {link.subLinks.map((subLink) => (
                    <NavLink
                      key={subLink.path}
                      to={subLink.path}
                      onClick={() => {
                        setMenuOpen(false);
                        setDropdownOpen(null);
                      }}
                      className={({ isActive }) =>
                        isActive
                          ? "text-[#1e1e1e] font-semibold text-sm"
                          : "text-[#8c735b] hover:text-[#1e1e1e] text-sm"
                      }
                    >
                      {subLink.label}
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
