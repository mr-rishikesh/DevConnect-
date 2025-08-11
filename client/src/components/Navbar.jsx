import { Link, NavLink } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore.js";
import { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { authUser } = useAuthStore();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileOpen, setMobileOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setMobileOpen(!isMobileOpen);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-gray-900 border-b border-gray-400">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            DevConnect
          </span>
        </Link>

        {/* Right Side Buttons */}
        <div className="flex items-center md:order-2 space-x-3">
          {authUser ? (
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              >
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://avatars.githubusercontent.com/u/160262729?s=400&u=83e2a3ca3271123911fde25094ec5faf9d6c9a2e&v=4"
                  alt="user"
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 z-50 bg-white rounded-lg shadow dark:bg-gray-700">
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">
                      {authUser.fullName}
                    </span>
                    <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                      {authUser.email}
                    </span>
                  </div>
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/users"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Connect To Others
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/earnings"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Earnings
                      </Link>
                    </li>
                    <li>
                      <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Sign out
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2">
              Get started
            </button>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-300 rounded-lg md:hidden hover:bg-gray-800"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:space-x-8 md:order-1">
          {[
            { to: "/home", label: "Home" },
            { to: "/explore", label: "Explore" },
            { to: "/messages", label: "Messages" },
            { to: "/about", label: "About" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 font-semibold"
                  : "text-white hover:text-blue-400"
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile Menu (Full width below navbar) */}
      {isMobileOpen && (
        <div className="w-full bg-gray-800 text-white rounded-lg md:hidden">
          <ul className="flex flex-col font-medium p-4 space-y-3">
            {[
              { to: "/home", label: "Home" },
              { to: "/explore", label: "Explore" },
              { to: "/messages", label: "Messages" },
              { to: "/about", label: "About" },
            ].map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  onClick={() => setMobileOpen(false)}
                  end
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-blue-400 font-semibold"
                      : "block py-2 px-3 hover:text-blue-400"
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
