import React, { useState } from 'react';

const AddTodoForm = ({ onAdd }) => {
    const [newTodo, setNewTodo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newTodo.trim()) return;
        onAdd(newTodo);
        setNewTodo('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new todo"
            />
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default AddTodoForm;