import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskList from './components/TaskList';
import CompletedTasks from './components/CompletedTasks';

function App() {
  const [tasks, setTasks] = useState([]);

  // Carrega tarefas do localStorage na inicialização
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  // Atualiza localStorage sempre que a lista de tarefas muda
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskList tasks={tasks} setTasks={setTasks} />} />
        <Route path="/completed" element={<CompletedTasks tasks={tasks} />} />
      </Routes>
    </Router>
  );
}

export default App;
