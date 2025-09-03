import { NavLink } from "react-router-dom";
import { useState } from "react";

const navLinks = [
  { label: "Weddings", path: "/portfolio/weddings" },
  {
    label: "Others",
    path: "#",
    subLinks: [
      { label: "Artists", path: "/portfolio/artists" },
      { label: "Family", path: "/portfolio/family" },
      { label: "Birthdays", path: "/portfolio/birthdays" },
    ],
  },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  return (
    <header className="sticky top-0 z-50 bg-[#faf8f5] text-[#2c2c2c]">
      {/* Top Bar */}
      <div className="py-6 px-8 pb-10 flex items-center justify-between">
        {/* Left: Site title */}
        <NavLink 
          to="/"
          className="whitespace-nowrap text-2xl sm:text-3xl md:text-4xl font-alt-heading font-bold tracking-wide uppercase text-[#2c2c2c] hover:text-[#b8860b] transition-colors"
        >
          Nadish Sood
        </NavLink>

        {/* Right: Navigation (desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              {link.subLinks ? (
                <>
                  {/* Dropdown parent */}
                  <button
                    className="text-[#b8860b] hover:text-[#2c2c2c] transition-colors"
                    onClick={(e) => e.preventDefault()}
                  >
                    {link.label}
                  </button>
                  
                  {/* Dropdown menu */}
                  <div className="absolute top-full left-0 mt-3 py-3 w-48 bg-[#faf8f5] border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    {link.subLinks.map((subLink) => (
                      <NavLink
                        key={subLink.path}
                        to={subLink.path}
                        className={({ isActive }) =>
                          `block px-4 py-3 text-sm transition-all duration-200 rounded-md ${
                            isActive
                              ? "text-[#2c2c2c] font-semibold bg-gray-100"
                              : "text-[#b8860b] hover:text-[#2c2c2c] hover:bg-gray-50"
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
                      ? "text-[#2c2c2c] font-semibold"
                      : "text-[#b8860b] hover:text-[#2c2c2c]"
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
          className="block md:hidden text-[#2c2c2c] text-2xl"
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
                  className="text-[#b8860b] hover:text-[#2c2c2c]"
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
                          ? "text-[#2c2c2c] font-semibold text-sm"
                          : "text-[#b8860b] hover:text-[#2c2c2c] text-sm"
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
                    ? "text-[#2c2c2c] font-semibold"
                    : "text-[#b8860b] hover:text-[#2c2c2c]"
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
