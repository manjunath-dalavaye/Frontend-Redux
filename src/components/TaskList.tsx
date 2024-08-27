import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import '../assets/styles/main.scss'

const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.list);

  console.log('Tasks:', tasks);

  return (
    <div className='task-list-container'>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
