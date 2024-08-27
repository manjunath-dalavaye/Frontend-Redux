import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => (
  <aside>
    <ul>
      <li><Link to="/tasks">Tasks</Link></li>
      <li><Link to="/settings">Settings</Link></li>
    </ul>
  </aside>
);

export default Sidebar;
