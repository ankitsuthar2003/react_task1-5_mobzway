import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Card from "./Card";
import TaskPage from "./TaskPage";
import Task1 from "./tasks/Task1";
import Task2 from "./tasks/Task2";
import Task3 from "./tasks/Task3";
import Task4 from "./tasks/Task4.jsx";
import Task5 from "./tasks/Task5.jsx";
import "./App.css";
const tasks = [
  {
    id: "task-1",
    name: "Task 1",
    component: <Task1 />,
  },
  {
    id: "task-2",
    name: "Task 2",
    component: <Task2 />,
  },
  {
    id: "task-3",
    name: "Task 3",
    component: <Task3 />,
  },
  {
    id: "task-4",
    name: "Task 4",
    component: <Task4 />,
  },
  {
    id: "task-5",
    name: "Task 5",
    component: <Task5 />,
  },
];

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h1 className="text-center text-4xl font-bold font-serif text-blue-500">
                  React Task List
                </h1>
                {tasks.map((task) => (
                  <Card
                    key={task.id}
                    name={task.name}
                    link={`/task/${task.id}`}
                  />
                ))}
              </div>
            }
          />
          <Route path="/task/:taskId" element={<TaskPage tasks={tasks} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
