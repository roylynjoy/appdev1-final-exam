import React, { useState } from "react";

// Updated TodoForm to include setNewTodo
const TodoForm = ({ newTodo, setNewTodo, addTodo }) => {
  const handleAddTodo = () => {
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter todo title"
      />
      <button onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
};

export default TodoForm;
