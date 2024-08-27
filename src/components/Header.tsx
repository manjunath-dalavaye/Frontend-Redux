import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
  <header>
    <h1>Task Manager</h1>
    <nav>
      <Link to="/tasks">Tasks</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
    </nav>
  </header>
);

export default Header;
