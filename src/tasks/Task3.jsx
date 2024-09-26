import React, { useState } from "react";

const Task3 = () => {
  const items = [
  "Laptop",
  "Smartphone",
  "Tablet",
  "Smartwatch",
  "Headphones",
  "Camera",
  "Speaker",
  "Mouse",
  "Keyboard",
  "Charger",
  ];
  const [search, setSearch] = useState("");

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
        <h2 className="text-xl font-semibold mb-4">Search Items</h2>
        <div className="relative mb-6">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="w-full p-3 pl-10 rounded-md border border-gray-400 focus:border-blue-500 focus:outline-none"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <ul className="grid grid-cols-2 gap-4">
          {filteredItems.map((item, index) => (
            <li
              key={index}
              className="p-4 bg-blue-500 rounded-lg text-white shadow-md hover:bg-blue-600 transition-colors duration-200"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Task3;