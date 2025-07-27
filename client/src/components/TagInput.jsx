import { useState } from "react";

export default function TagInput({onInputChange , tags , setTags}) {
 
  const [input, setInput] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      e.preventDefault();
      if (!tags.includes(input.trim())) {
        setTags([...tags, input.trim()]);
      }
      setInput("");
    }
  

  
  };

  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
    
 
  };

  return (
    <div className="w-full max-w-lg p-4  rounded-lg shadow-md bg-gray-100  border-gray-300 dark:bg-gray-700">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Health Tags
      </label>

      <div className="flex flex-wrap items-center gap-2 ">
        {tags && tags.map((tag, index) => (
          <span
            key={index}
            id={`badge-dismiss-${index}`}
            className="flex items-center bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
          >
            {tag}
            <button
              type="button"
              className="inline-flex items-center p-1 ms-2 text-sm text-blue-400 bg-transparent rounded hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300"
              onClick={() => removeTag(index)}
              aria-label="Remove"
            >
              <svg
                className="w-2 h-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Remove badge</span>
            </button>
          </span>
        ))}

        <input
          type="text"
          className="flex-1 outline-none border-gray-400  bg-transparent text-sm px-2 py-1 dark:text-white"
          placeholder="eg: Diabetes, Anxiety, Women's Health,covid-19 ..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}
