import React, { useState } from 'react';

function TodoForm({ onSubmit }) {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(newTodo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button>Add Todo</button>
    </form>
  );
}

export default TodoForm;
