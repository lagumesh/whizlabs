import React, { useState } from 'react';

const NewTaskForm = ({ onCreate }) => {
  const [task, setTask] = useState({
    name: '',
    startDate: '',
    endDate: '',
    priority: 'LOW',
    assignee: '',
    color: '#EECEFF', // Default color
    progress: 0,
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(task); // Pass the task data to parent or state
    setTask({
      name: '',
      startDate: '',
      endDate: '',
      priority: 'LOW',
      assignee: '',
      color: '#EECEFF',
      progress: 0,
      description: '',
    });
  };

  return (
    <form className="p-6 bg-white rounded-lg shadow-lg" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-4">New Task</h2>
      
      {/* Task Name */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Task Name</label>
        <input
          type="text"
          name="name"
          value={task.name}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          placeholder="Enter the Task Name"
          required
        />
      </div>

      {/* Start Date */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Start-Date</label>
        <input
          type="date"
          name="startDate"
          value={task.startDate}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>

      {/* End Date */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">End-Date</label>
        <input
          type="date"
          name="endDate"
          value={task.endDate}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>

      {/* Priority */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Priority</label>
        <select
          name="priority"
          value={task.priority}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        >
          <option value="LOW">LOW</option>
          <option value="MEDIUM">MEDIUM</option>
          <option value="HIGH">HIGH</option>
        </select>
      </div>

      {/* Assignee */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Assignees</label>
        <input
          type="email"
          name="assignee"
          value={task.assignee}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          placeholder="Assignee Email"
        />
      </div>

      {/* Color Picker */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Color</label>
        <input
          type="color"
          name="color"
          value={task.color}
          onChange={handleChange}
          className="w-16 h-10 cursor-pointer"
        />
      </div>

      {/* Progress */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Progress %</label>
        <input
          type="number"
          name="progress"
          value={task.progress}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          min="0"
          max="100"
        />
      </div>

      {/* Task Description */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Task Description</label>
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          rows="4"
          placeholder="Type Task Description..."
          maxLength="2000"
        />
      </div>

      {/* Submit and Cancel */}
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          className="px-4 py-2 border rounded text-gray-600"
          onClick={() => setTask({
            name: '',
            startDate: '',
            endDate: '',
            priority: 'LOW',
            assignee: '',
            color: '#EECEFF',
            progress: 0,
            description: '',
          })}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Create
        </button>
      </div>
    </form>
  );
};

export default NewTaskForm;
