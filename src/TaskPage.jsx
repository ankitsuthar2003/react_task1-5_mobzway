import React from "react";
import { useParams } from "react-router-dom";

const TaskPage = ({ tasks }) => {
  const { taskId } = useParams();
  const task = tasks.find((task) => task.id === taskId);

  if (!task) {
    return <div>Task not found</div>;
  }

  return (
    <div className=" text-center p-8 shadow-lg w-full min-h-screen mt-16 flex flex-col items-center">
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 bg-clip-text text-transparent mb-12 p-4">
        {task.name}
      </h1>
      <div className="w-full  bg-white rounded-lg shadow-md p-8">
        {/* You can uncomment the task description if available */}
        {/* <p className="text-gray-700 text-lg mb-6">{task.description}</p> */}
        <div className="mt-8">{task.component}</div>
      </div>
    </div>
  );
};

export default TaskPage;
