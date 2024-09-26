import React, { useState } from "react";

const Task2 = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-[400px] p-6 bg-white rounded-lg shadow-lg">
        <h3 className="font-semibold text-xl text-center mb-4">Counter Example</h3>
        <p className="text-blue-600 text-center mb-2">Current Count:</p>
        <div className="flex justify-center mb-4">
          <span className="bg-blue-200 px-8 py-4 rounded-lg text-blue-600 text-6xl font-bold shadow-md">
            {count}
          </span>
        </div>

        <div className="flex flex-col space-y-4">
          <button
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg transition-transform duration-200 ease-in-out transform hover:scale-105 active:scale-95 shadow-md"
            onClick={() => setCount(count - 1)}
          >
            Decrease
          </button>
          <button
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg transition-transform duration-200 ease-in-out transform hover:scale-105 active:scale-95 shadow-md"
            onClick={() => setCount(count + 1)}
          >
            Increase
          </button>
          <button
            className="w-full px-4 py-2 bg-red-500 text-white rounded-lg transition-transform duration-200 ease-in-out transform hover:scale-105 active:scale-95 shadow-md"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task2;