import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
// import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
//import TaskForm from './components/TaskForm';

const App: React.FC = () => {
  return (
    
    <Router>
              <h2>Task management task</h2>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/tasks" element={<TaskForm />} />
      </Routes>
    </Router>
  );
};

export default App;
