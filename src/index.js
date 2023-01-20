import { Typography } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import useTodoState from './useTodoState';
import './style.css';

const App = () => {
  const {todos, addTodo, deleteTodo} = useTodoState([]);

  return (
    <div className='App'>
      <Typography component='h1' variant='h2'>
        Todos
      </Typography>
      <TodoForm saveTodo={todoText => {
        const trimmedText = todoText.trim();
        if (trimmedText.length > 0) {
          addTodo(trimmedText);
        }
      }}/>
      <TodoList todos={todos} deleteTodo={deleteTodo}/>
    </div>
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);


