import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';

const TodoList = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Build a Todo App', completed: false },
        { id: 3, text: 'Write Tests', completed: false },
    ]);

    const addTodo = (text) => {
        const newTodoItem = {
            id: Date.now(),
            text,
            completed: false,
        };
        setTodos([...todos, newTodoItem]);
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <h1>Todo List</h1>
            <AddTodoForm onAdd={addTodo} />
            <ul>
                {todos.map(todo => (
                    <li
                        key={todo.id}
                        onClick={() => toggleTodo(todo.id)}
                        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                    >
                        {todo.text}
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;