import React, { useState } from "react";
import { initialColumns } from "./taskData";

const Task5 = () => {
  const [columns, setColumns] = useState(initialColumns);
  const [draggedTaskId, setDraggedTaskId] = useState(null);
  const [sourceColumnId, setSourceColumnId] = useState(null);

  const onDragStart = (event, columnId, taskId) => {
    setDraggedTaskId(taskId);
    setSourceColumnId(columnId);
  };

  const onDragOver = (event) => {
    event.preventDefault();
  };

  const onDrop = (event, destColumnId) => {
    if (!draggedTaskId || !sourceColumnId) return;

    const sourceColumn = columns[sourceColumnId];
    const destColumn = columns[destColumnId];

    const taskToMove = sourceColumn.tasks.find(
      (task) => task.id === draggedTaskId
    );
    const updatedSourceTasks = sourceColumn.tasks.filter(
      (task) => task.id !== draggedTaskId
    );

    const updatedDestTasks = [...destColumn.tasks, taskToMove];

    setColumns({
      ...columns,
      [sourceColumnId]: {
        ...sourceColumn,
        tasks: updatedSourceTasks,
      },
      [destColumnId]: {
        ...destColumn,
        tasks: updatedDestTasks,
      },
    });
    setDraggedTaskId(null);
    setSourceColumnId(null);
  };

  return (
    <div className="drag-drop-container">
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {Object.entries(columns).map(([columnId, column]) => (
          <div
            key={columnId}
            style={{
              margin: "8px",
              padding: "16px",
              backgroundColor: "#f8f9fa", // Light background color
              width: "250px",
              minHeight: "500px",
              borderRadius: "8px",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              transition: "background-color 0.3s ease",
            }}
            onDragOver={(event) => onDragOver(event)}
            onDrop={(event) => onDrop(event, columnId)}
          >
            <h3 style={{
                textAlign: "center", 
                color: "#007BFF", 
                fontSize: "1.5rem", 
                fontWeight: "bold", 
                textTransform: "uppercase", 
                letterSpacing: "1px", 
                marginBottom: "16px"
              }}>
              {column.name}
            </h3>
            {column.tasks.map((task) => (
              <div
                key={task.id}
                draggable
                onDragStart={(event) => onDragStart(event, columnId, task.id)}
                style={{
                  userSelect: "none",
                  padding: "16px",
                  margin: "8px 0",
                  backgroundColor: "#e7f1ff", // Light blue background for tasks
                  color: "#6b21a8", // Dark purple text color
                  borderRadius: "5px",
                  cursor: "grab",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#cce4ff"; // Lighter blue on hover
                  e.currentTarget.style.boxShadow =
                    "0px 4px 8px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#e7f1ff"; // Reset to original color
                  e.currentTarget.style.boxShadow =
                    "0px 2px 4px rgba(0, 0, 0, 0.1)";
                }}
              >
                {task.content}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task5;