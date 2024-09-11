import React from 'react';

function Task({ task, toggleComplete, removeTask }) {
  return (
    <li>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={() => toggleComplete(task.id)}>
        {task.completed ? 'Desfazer' : 'Concluir'}
      </button>
      <button onClick={() => removeTask(task.id)}>Remover</button>
    </li>
  );
}

export default Task;
