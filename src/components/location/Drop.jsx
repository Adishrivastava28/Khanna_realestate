import React, { useState } from "react";

const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-52 relative inline-block">
      <button
        className="inline-flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-blue-300 w-full justify-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        Select Location
      </button>
      {isOpen && (
        <div
          className="absolute z-10 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
          onClick={() => setIsOpen(false)}
        >
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Option 1
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Option 2
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Option 3
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
