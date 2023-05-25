import React from 'react';
import { connect } from 'react-redux';

const TodoList = ({ todos, addTodo, removeTodo }) => {
  const handleAddTodo = () => {
    const newTodo = prompt('Enter a new todo:');
    addTodo({
      id: Date.now(),
      text: newTodo
    });
  };

  const handleRemoveTodo = (id) => {
    removeTodo(id);
  };

  return (
    <div>
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Define mapStateToProps function
const mapStateToProps = state => ({
  todos: state.todos
});

// Define mapDispatchToProps function
const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch({ type: 'ADD_TODO', payload: todo }),
  removeTodo: id => dispatch({ type: 'REMOVE_TODO', payload: id })
});

// Connect TodoList component to Redux store
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
