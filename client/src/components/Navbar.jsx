import { Link, NavLink } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore.js";
import { useState } from "react";
import logo from "../assets/logo.png"

const Navbar = () => {
  const { authUser } = useAuthStore();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileOpen, setMobileOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setMobileOpen(!isMobileOpen);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b-5 border-b  border-gray-400 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={logo}
            className="h-8"
            alt="Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            DevConnect
          </span>
        </Link>

        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {authUser ? (
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-8 h-8 rounded-full "
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
                      <button
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Sign out
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-4">
              Get started
            </button>
          )}

          <button
            onClick={toggleMobileMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600"
            aria-expanded={isMobileOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
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

<div
  className={`items-center ${
    isMobileOpen ? "flex" : "hidden"
  } w-full md:flex md:w-auto md:order-1 md:ml-auto`}
  id="navbar-user"
>
  <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 mr-11">

            {[
              { to: "/home", label: "Home" },
              { to: "/explore", label: "Explore" },
           //   { to: "/services", label: "Services" },
             
              { to: "/messages", label: "Messages" }, 
              { to: "/about", label: "About" },
            ].map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-blue-700 font-semibold md:p-0"
                      : "block py-2 px-3 text-gray-900 hover:text-blue-700 md:p-0 dark:text-white"
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
