import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import Taskbar from "../components/taskbar";

export const Dashboard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [newTask, setNewTask] = useState({
    text: "",
    start_date: "",
    duration: "",
    color: "#FF5733",
  });
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Create User Stories",
      start_date: "2023-07-01",
      duration: 5,
      progress: 0.6,
      color: "#FF5733",
    },
    {
      id: 2,
      text: "Create User Flows",
      start_date: "2023-07-07",
      duration: 4,
      progress: 0.4,
      color: "#3498DB",
    },
    {
      id: 3,
      text: "Create Wireframes",
      start_date: "2023-07-12",
      duration: 3,
      progress: 0.7,
      color: "#8E44AD",
    },
  ]);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const closeDropdown = () => setIsDropdownOpen(false);

  // Handle new task form input changes
  const handleTaskChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prev) => ({ ...prev, [name]: value }));
  };

  // Add new task to the task list
  const handleAddTask = () => {
    if (newTask.text && newTask.start_date && newTask.duration) {
      const updatedTasks = [...tasks, { ...newTask, id: tasks.length + 1 }];
      setTasks(updatedTasks);
      setNewTask({ text: "", start_date: "", duration: "", color: "#FF5733" }); // Reset task form
      setShowTaskModal(false); // Close modal after adding task
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <div className="h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />
      {/* Dashboard Content */}
      <div className="w-full flex items-center justify-between px-6 pt-2 bg-white">
        {/* Task Actions */}
        <div className="flex items-center space-x-4">
          <button
            className="bg-[#5C55E5] text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            onClick={() => setShowTaskModal(true)}
          >
            + New Task
          </button>
          <div className="relative" onBlur={closeDropdown}>
            {/* Dropdown Button */}
            <button
              className="bg-gray-100 px-4 py-2 border border-blue-500 rounded-lg hover:bg-gray-200"
              onClick={toggleDropdown}
            >
              Import/Export
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div
                className="absolute mt-2 bg-white shadow-lg rounded-lg w-40 border border-gray-200 z-10"
                onClick={(e) => e.stopPropagation()} // Prevent dropdown from closing on click
              >
                <button
                  className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                  onClick={() => {
                    console.log("Import from CSV clicked");
                  }}
                >
                  Import from CSV
                </button>
                <button
                  className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                  onClick={() => {
                    console.log("Export to CSV clicked");
                  }}
                >
                  Export to CSV
                </button>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-gray-500">Auto Schedule Adjustment</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-10 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-500"></div>
              <div className="w-4 h-4 bg-white rounded-full absolute left-1 top-1 peer-checked:translate-x-4 transition"></div>
            </label>
          </div>
        </div>
        <div className="p-6">
              {/* Search Input */}
              <div className="relative w-full max-w-sm">
                <input
                  type="text"
                  placeholder="Search tasks..."
                  className="w-full px-4 py-2 pl-10 border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/search--v1.png"
                  alt="Search Icon"
                  className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                />
              </div>
            </div>
      </div>

      {/* New Task Modal */}
      {showTaskModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Add New Task</h2>
            <form>
              <div className="mb-4">
                <label className="block font-medium mb-1">Task Name</label>
                <input
                  type="text"
                  name="text"
                  value={newTask.text}
                  onChange={handleTaskChange}
                  placeholder="Enter task name"
                  className="w-full border px-3 py-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block font-medium mb-1">Start Date</label>
                <input
                  type="date"
                  name="start_date"
                  value={newTask.start_date}
                  onChange={handleTaskChange}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block font-medium mb-1">
                  Duration (days)
                </label>
                <input
                  type="number"
                  name="duration"
                  value={newTask.duration}
                  onChange={handleTaskChange}
                  className="w-full border px-3 py-2 rounded"
                  min="1"
                />
              </div>
              <div className="mb-4">
                <label className="block font-medium mb-1">Color</label>
                <input
                  type="color"
                  name="color"
                  value={newTask.color}
                  onChange={handleTaskChange}
                  className="w-16 h-8 cursor-pointer border rounded"
                />
              </div>
            </form>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowTaskModal(false)}
                className="px-4 py-2 border rounded text-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleAddTask}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
      )}
           

      <Taskbar tasks={tasks} />
    </div>
  );
};
