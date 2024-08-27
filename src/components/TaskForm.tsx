// src/components/TaskForm.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { addTask } from '../features/tasks/tasksSlice';

const TaskForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch<AppDispatch>(); // Use typed dispatch

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addTask({ title })).unwrap() // Unwrap promise if needed
      .catch(error => console.error('Failed to add task:', error));
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
