// taskData.js

export const initialTasks = [
  { id: "task-1", content: "Task 1" },
  { id: "task-2", content: "Task 2" },
  { id: "task-3", content: "Task 3" },
  { id: "task-4", content: "Task 4" },
  { id: "task-5", content: "Task 5" },
  { id: "task-6", content: "Task 6" },
  { id: "task-7", content: "Task 7" },
  { id: "task-8", content: "Task 8" },
  { id: "task-9", content: "Task 9" },
  { id: "task-10", content: "Task 10" },
];

export const initialColumns = {
  today: {
    name: "Today",
    tasks: [],
  },
  tomorrow: {
    name: "Tomorrow",
    tasks: [],
  },
  thisWeek: {
    name: "This Week",
    tasks: [],
  },
  nextWeek: {
    name: "Next Week",
    tasks: [],
  },
  unplanned: {
    name: "Unplanned",
    tasks: initialTasks,
  },
};
