import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';


function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleComplete={toggleComplete} removeTask={removeTask} />
    </div>
  );
}

export default App;
