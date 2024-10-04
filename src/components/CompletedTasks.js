import React from 'react';

function CompletedTasks({ tasks }) {
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div>
      <h1>Tarefas Concluídas</h1>
      <ul>
        {completedTasks.map(task => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompletedTasks;
