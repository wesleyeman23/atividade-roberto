import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;

    addTask({
      id: Date.now(),
      title,
      description,
      completed: false
    });

    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
  <input 
    type="text" 
    placeholder="Título da tarefa" 
    value={title} 
    onChange={(e) => setTitle(e.target.value)} 
    className="form-input"
  />
  <textarea 
    placeholder="Descrição da tarefa" 
    value={description} 
    onChange={(e) => setDescription(e.target.value)} 
    className="form-textarea"
  />
  <button type="submit">Adicionar Tarefa</button>
</form>

  );
}

export default TaskForm;
