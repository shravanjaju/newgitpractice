import { createStore } from 'redux';

// Define initial state
const initialState = {
  todos: []
};

// Define reducer function
function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [...state.todos, action.payload]
      };
    case 'REMOVE_TODO':
      return {
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    default:
      return state;
  }
}

// Create Redux store
const store = createStore(todoReducer);

export default store;
