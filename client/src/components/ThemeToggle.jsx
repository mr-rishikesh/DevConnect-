import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className="relative inline-flex items-center p-2 rounded-lg focus:outline-none transform transition-transform hover:scale-110 text-white dark:text-gray-200 bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 mr-2"
      aria-label="Toggle dark mode"
    >
      {/* Sun icon */}
      <svg
        className={`w-6 h-6 transition-all ${
          darkMode ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        } absolute text-yellow-500`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
        />
      </svg>
      {/* Moon icon */}
      <svg
        className={`w-6 h-6 transition-all ${
          darkMode ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        } absolute text-blue-200`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    </button>
  );
};

export default ThemeToggle;
