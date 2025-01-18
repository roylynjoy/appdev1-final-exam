import React from "react";
// TODO: Import the TodoProvider from your context directory
// TODO: Import TodoList component
import { TodoProvider } from "./context/TodoContext";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div>
      <h1>Todo App</h1>
      {/* 
        TODO: Use the TodoProvider to wrap the TodoList and provide context
      */}
      <TodoProvider>
        <TodoList />
	    </TodoProvider>
    </div>
  );
};

export default App;