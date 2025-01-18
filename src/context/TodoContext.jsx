import React, { createContext, useState, useEffect, useContext } from "react";

// Create a context for the Todo app
const TodoContext = createContext();

const fetchTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
    return response.json();
};

export const TodoProvider = ({ children }) => {  
    const [todos, setTodos] = useState([
    ]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loading = async () => {
            const fetchedTodos = await fetchTodos();
            setTodos(fetchedTodos);
            setLoading(false);
        };
        loading();
    }, []);

    const addTodo = (newTodo) => {
        const updatedTodos = [ { id: todos.length  , title: newTodo, completed: false },...todos];
        setTodos(updatedTodos);
    };

    const deleteTodo = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    };

    const toggleComplete = (id) => {
        const updatedTodos = todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    };

    return (
        <TodoContext.Provider value={{ todos, loading, addTodo, deleteTodo, toggleComplete }}>
            {children}
        </TodoContext.Provider>
    );
};


export const useTodos = () => {
    const context = useContext(TodoContext);
    return context;
};
