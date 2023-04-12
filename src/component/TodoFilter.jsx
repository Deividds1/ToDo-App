import React from 'react';

function TodoFilter({ onFilterChange }) {
    return (
        <div className='filter'>
            <button onClick={() => onFilterChange('all')}>All</button>
            <button onClick={() => onFilterChange('active')}>Active</button>
            <button onClick={() => onFilterChange('completed')}>Completed</button>
        </div>
    );
}

export default TodoFilter;