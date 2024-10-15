import React, { useState } from 'react';
import TodoItem from '../components/todoitem'
import TodoForm from '../components/todoform';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onSubmit={handleSubmit} />
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
