import React, { useState } from "react";

const Task1 = () => {
  const [show, setShow] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [newTech, setNewTech] = useState("");
  const [records, setRecords] = useState([
    "Cyber Security",
    "DJANGO",
    "WEB3",
    "SQL",
  ]);
  const [clicked, setClicked] = useState(false); // State for button toggle

  const sum = () => {
    return parseInt(number1 || 0) + parseInt(number2 || 0);
  };

  const addTech = () => {
    if (newTech.trim()) {
      setRecords([...records, newTech]);
      setNewTech("");
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-[550px] p-4 text-left">
        <ul className="flex flex-col gap-6 w-full">
          {/* Task 1 */}
          <li>
            <h3 className="font-semibold">1. Display Simple JSX</h3>
            <p className="text-blue-600">Hello, this is simple JSX</p>
          </li>

          <hr className="border-t-2 border-gray-200 my-4" />

          {/* Task 2 */}
          <li>
            <h3 className="font-semibold">2. Display an Array of Records on Screen</h3>
            <ul className="list-disc list-inside">
              {records.map((record, index) => (
                <li key={index} className="text-blue-600">
                  {record}
                </li>
              ))}
            </ul>
          </li>

          <hr className="border-t-2 border-gray-200 my-4" />

          {/* Task 3 */}
          <li>
            <h3 className="font-semibold">3. Show/Hide Element on Screen</h3>
            <p>{show ? "Hello, I am noticeable." : ""}</p>
            <button
              className="mt-2 px-4 py-1 bg-blue-400 text-white"
              onClick={() => setShow(!show)}
            >
              Show/Hide
            </button>
          </li>

          <hr className="border-t-2 border-gray-200 my-4" />

          {/* Task 4 */}
          <li>
            <h3 className="font-semibold">4. Enable/Disable a Button</h3>
            <button
              className="mt-2 px-4 py-1 bg-blue-400 text-white"
              onClick={() => setDisabled(!disabled)}
            >
              Enable/Disable
            </button>
            <button
              className={`mt-2 px-4 py-1 ml-4 ${
                disabled
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-400 text-white transition-transform duration-200 ease-in-out transform hover:scale-105 active:scale-95"
              }`}
              disabled={disabled}
              onClick={() => setClicked(!clicked)}
            >
              {disabled ? "Button Disabled" : clicked ? "Clicked" : "Click Me"}
            </button>
          </li>

          <hr className="border-t-2 border-gray-200 my-4" />

          {/* Task 5 */}
          <li>
            <h3 className="font-semibold">5. Two-Way Data Binding using Textbox</h3>
            <input
              className="w-full p-2 mt-2 border border-gray-400"
              type="text"
              value={number1}
              onChange={(e) => setNumber1(e.target.value)}
              placeholder="Enter number 1: "
            />
            <input
              className="w-full p-2 mt-2 border border-gray-400"
              type="text"
              value={number2}
              onChange={(e) => setNumber2(e.target.value)}
              placeholder="Enter number 2: "
            />
          </li>

          <hr className="border-t-2 border-gray-200 my-4" />

          {/* Task 6 */}
          <li>
            <h3 className="font-semibold">6. Do Sum of Two Numbers</h3>
            <p className="text-blue-600">Sum: {sum()}</p>
          </li>

          <hr className="border-t-2 border-gray-200 my-4" />

          {/* Task 7 */}
          <li>
            <h3 className="font-semibold">7. Dynamically Add Child Components (List)</h3>
            <ul className="list-disc list-inside">
              {records.map((record, index) => (
                <li key={index} className="text-blue-600">
                  {record}
                </li>
              ))}
            </ul>
            <input
              className="w-full p-2 mt-2 border border-gray-400"
              type="text"
              value={newTech}
              onChange={(e) => setNewTech(e.target.value)}
              placeholder="Enter new technology: "
            />
            <button
              className="mt-2 px-4 py-1 bg-blue-400 text-white"
              onClick={addTech}
            >
              Add Technology
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Task1;
