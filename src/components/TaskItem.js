import React, { useState } from 'react';

function TaskItem({ task, updateTask, deleteTask, toggleCompletion }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleUpdate = () => {
    updateTask({ ...task, title: newTitle, description: newDescription });
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input 
            type="text" 
            value={newTitle} 
            onChange={(e) => setNewTitle(e.target.value)} 
          />
          <textarea 
            value={newDescription} 
            onChange={(e) => setNewDescription(e.target.value)} 
          />
          <button onClick={handleUpdate} className="edit">Salvar</button>
        </>
      ) : (
        <>
          <h3 style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.title}</h3>
          <p style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.description}</p>
        </>
      )}
      {!task.completed && (
        <>
          <button onClick={() => toggleCompletion(task.id)} className="add-task">
            Concluir
          </button>
          <button onClick={() => deleteTask(task.id)} className="delete">Excluir</button>
          <button onClick={() => setIsEditing(!isEditing)} className="edit">
            {isEditing ? 'Cancelar' : 'Editar'}
          </button>
        </>
      )}
    </li>
  );
}

export default TaskItem;
