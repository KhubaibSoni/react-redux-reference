import { createSlice } from "@reduxjs/toolkit";

// Retrieve and parse stored data from localStorage
const data = localStorage.getItem("list")
  ? JSON.parse(localStorage.getItem("list"))
  : [];

// Initial state
const initialState = {
  arr: data || [], // Todo list
  filter: 'ALL',   // Filter state (ALL, COMPLETED, INCOMPLETE)
};

export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      state.arr.push({ value: action.payload, completed: false });
      localStorage.setItem("list", JSON.stringify(state.arr));
    },
    remove: (state, action) => {
      state.arr.splice(action.payload, 1);
      localStorage.setItem("list", JSON.stringify(state.arr));
    },
    toggle: (state, action) => {
      const task = state.arr[action.payload];
      if (task) {
        task.completed = !task.completed;
      }
      localStorage.setItem("list", JSON.stringify(state.arr));
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

// Export actions and reducer
export const { add, remove, toggle, setFilter } = TodoSlice.actions;
export default TodoSlice.reducer;

// Selector to get filtered tasks based on the current filter
export const selectFilteredTodos = (state) => {
  const { arr, filter } = state.todo;
  if (filter === 'COMPLETED') {
    return arr.filter((task) => task.completed);
  } else if (filter === 'INCOMPLETE') {
    return arr.filter((task) => !task.completed);
  }
  return arr; // Return all tasks if filter is 'ALL'
};
