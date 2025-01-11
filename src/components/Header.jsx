import React, { useState } from "react";
import { GiPowerButton} from "react-icons/gi"; // Import des icônes
import { IoMdPlanet } from "react-icons/io";


const Header = ({ activeSection, toggleDarkMode, darkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white dark:bg-gray-800 bg-opacity-90 shadow-md z-50">
      <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        {/* Logo */}
        <IoMdPlanet className="text-blue-500 dark:text-white" size={40} />
     

        {/* Hamburger Icon */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-600 dark:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Navbar Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute md:static top-full left-0 w-full md:w-auto bg-white bg-opacity-90 dark:bg-gray-800 md:bg-transparent md:dark:bg-transparent md:flex items-center space-y-4 md:space-y-0 md:space-x-4 flex-col md:flex-row`}
        >
          {["home", "about", "portfolio", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                if (section === "home") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                } else {
                  document
                    .querySelector(`#${section}`)
                    .scrollIntoView({ behavior: "smooth" });
                }
              }}
              className={`block px-4 py-2 text-center md:px-0 text-gray-800 dark:text-gray-100 hover:text-blue-600 ${
                activeSection === section ? "border-b-2 border-blue-600 dark:border-white" : ""
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg focus:outline-none flex items-center justify-center w-10 h-10"
        >
          {darkMode ? (
            <GiPowerButton className="text-white" size={20} />
          ) : (
            <GiPowerButton className="text-blue-600" size={20} />
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;
