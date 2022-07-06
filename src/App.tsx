import React, { useState } from 'react';
import { AddTodoForm } from './AddTodo';
import {TodoListItem} from './TodoListItem'; 
import './index.css';


type  Todo = {
  text: string;
  complete: boolean;
};


const initialTodos: Array<Todo> = [
  {text: "Throw the bags", complete: true},
  {text:"Clean the car", complete: false},
  {text:"Take the kids", complete: false}
];

function App() {
  const [todos, setTodos] = useState (initialTodos);
  
  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo =>{
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo = (newTodo: string) => {
    setTodos([...todos, {text: newTodo, complete: false}]);
  }

  return (
    <>
    <div className="list">
    <React.Fragment >
      <div><h3 className='title'>To do list</h3></div>
      <TodoListItem todo={todos[0]} toggleTodo={toggleTodo}/>
      <TodoListItem todo={todos[1]} toggleTodo={toggleTodo}/>
      <TodoListItem todo={todos[2]} toggleTodo={toggleTodo}/>
      <div className="input">
        <AddTodoForm/>
      </div>
    </React.Fragment>
    </div>
    </>
  );
}

export default App;
