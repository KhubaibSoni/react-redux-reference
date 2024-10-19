import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove, selectFilteredTodos, setFilter, toggle } from '../features/todo';

function TodoApp() {
  // Local state for new task input
  const [newTask, setNewTask] = useState('');
  const dispatch = useDispatch();
  const todo = useSelector(selectFilteredTodos);

  // Function to add a new task
  const handleAddTask = () => {
    dispatch(add(newTask));
    setNewTask(''); // Clear input after adding
  };

  const handleDeleteTask = (val) => {
    // Delete task logic (Redux dispatch)
    dispatch(remove(val))
  };

  const handleToggleTask = (id) => {
    // Toggle task completed/incomplete (Redux dispatch)
    dispatch(toggle(id))
    
  };

  const handleFilterChange = (filter) => {
    // Filter change logic (Redux dispatch)
    dispatch(setFilter(filter))
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Todo List with Filters</h1>

      {/* Input for adding new tasks */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button onClick={handleAddTask} style={{ marginLeft: '10px' }}>Add Task</button>
      </div>

      {/* Todo List */}
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {/* Loop through tasks from Redux */}
        {todo.map((task, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <input type="checkbox" onChange={() => handleToggleTask(index)} checked={task.completed} /> 
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.value}
            </span>
            <button onClick={() => handleDeleteTask(index)} style={{ marginLeft: '10px' }}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Filter Buttons */}
      <div style={{ marginTop: '20px' }}>
        <button onClick={() => handleFilterChange('ALL')} style={{ marginRight: '10px' }}>All</button>
        <button onClick={() => handleFilterChange('COMPLETED')} style={{ marginRight: '10px' }}>Completed</button>
        <button onClick={() => handleFilterChange('INCOMPLETE')}>Incomplete</button>
      </div>
    </div>
  );
}

export default TodoApp;
