import React from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

const TaskManagerPage: React.FC = () => (
  <div>
    <h1>Task Manager</h1>
    <TaskForm />
    <TaskList />
  </div>
);

export default TaskManagerPage;
