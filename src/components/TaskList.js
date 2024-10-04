import React from 'react';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';

function TaskList({ tasks, setTasks }) {
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const toggleCompletion = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: true } : task // Marcar como conclu�do
    ));
  };

  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>
      <TaskForm addTask={addTask} />
      <ul>
        {tasks.filter(task => !task.completed).map(task => (
          <TaskItem 
            key={task.id} 
            task={task} 
            updateTask={updateTask} 
            deleteTask={deleteTask} 
            toggleCompletion={toggleCompletion} 
          />
        ))}
      </ul>
      <div className="completed-tasks">
        <h2>Tarefas Concluídas</h2>
        <ul>
          {tasks.filter(task => task.completed).map(task => (
            <li key={task.id}>
              <h3 style={{ textDecoration: 'line-through' }}>{task.title}</h3>
              <p style={{ textDecoration: 'line-through' }}>{task.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskList;
