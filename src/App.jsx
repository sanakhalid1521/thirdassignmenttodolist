import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editing, setEditing] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo) return;
    setTodos([...todos, { id: todos.length + 1, title: newTodo, completed: false }]);
    setNewTodo('');
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id)); // Fix: Using todo.id for comparison
  };

  const handleEdit = (id) => {
    const todo = todos.find((todo) => todo.id === id); // Fix: Using todo.id for comparison
    setEditing(id);
    setNewTodo(todo.title);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedTodos = todos.map((todo) =>
      todo.id === editing ? { ...todo, title: newTodo } : todo // Fix: Using todo.id for comparison
    );
    setTodos(updatedTodos);
    setEditing(null);
    setNewTodo('');
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <form onSubmit={editing ? handleUpdate : handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter new todo"
        />
        <button type="submit">{editing ? 'Update' : 'Add'}</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}> {}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() =>
                setTodos(
                  todos.map((t) =>
                    t.id === todo.id ? { ...t, completed: !t.completed } : t // Fix: Using todo.id for comparison
                  )
                )
              }
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.title}
            </span>
            <button onClick={() => handleDelete(todo.id)}>Delete</button> {}
            <button onClick={() => handleEdit(todo.id)}>Edit</button> {}
            
                 </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
