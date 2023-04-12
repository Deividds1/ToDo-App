import TodoFilter from './TodoFilter';
import React, { useState } from 'react';

function TodoList({ todos, onTodosChange }) {
    const [inputValue, setInputValue] = useState('');
    const [nextId, setNextId] = useState(4);
    const [filter, setFilter] = useState('all');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddTodo = () => {
        const newTodo = { id: nextId, text: inputValue, completed: false };
        const newTodos = [...todos, newTodo];
        onTodosChange(newTodos);
        setInputValue('');
        setNextId(nextId + 1);
        console.log(newTodos);
    };

    const handleToggleComplete = (id) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                };
            }
            return todo;
        });
        onTodosChange(newTodos);
    };

    const handleDeleteTodo = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id);
        onTodosChange(newTodos);
    };

    const handleKeyUp = (event) => {
        if (event.key === 'Enter') {
            if (inputValue === '') {

            }
            else { handleAddTodo(); }

        }
    };

    const handleFilterChange = (filter) => {
        setFilter(filter);
    };

    let filteredTodos = todos;
    if (filter === 'active') {
        filteredTodos = todos.filter((todo) => !todo.completed);
    } else if (filter === 'completed') {
        filteredTodos = todos.filter((todo) => todo.completed);
    }

    return (
        <div className='list'>
            <input
                placeholder='Create a new todo...'
                className='text'
                type='text'
                value={inputValue}
                onChange={handleInputChange}
                onKeyUp={handleKeyUp}
            />

            <ul>
                {filteredTodos.map((todo) => (
                    <li key={todo.id} id={`todo-item-${todo.id}`} className={todo.completed ? 'completed' : ''}>
                        <input
                            className='check'
                            type='checkbox'
                            checked={todo.completed}
                            onChange={() => handleToggleComplete(todo.id)}
                        />
                        {todo.text}{' '}
                        <button onClick={() => handleDeleteTodo(todo.id)}>X</button>
                    </li>
                ))}
            </ul>
            <TodoFilter onFilterChange={handleFilterChange} />
        </div>
    );
};


export default TodoList;
