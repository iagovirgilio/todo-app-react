import React from 'react';

function Task({ task, toggleComplete, removeTask }) {
  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      {task.text}
      <button onClick={() => toggleComplete(task.id)}>
        {task.completed ? 'Desfazer' : 'Concluir'}
      </button>
      <button onClick={() => removeTask(task.id)}>Remover</button>
    </li>
  );
}

export default Task;
