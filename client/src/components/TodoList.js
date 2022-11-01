import React, {useState} from 'react' 
import TodoForm from './TodoForm'
import Todo from './Todo'
import {Link } from 'react-router-dom'

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;                                
        } 

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
     };


      
     const updateTodo = (todoId, newValue) => {
      if (!newValue.text || /^\s*$/.test(newValue.text)) {
        return;                                
        } 

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
     }

      const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr)
      };


      
      

     const completeTodo = id => {
      let updatedTodos = todos.map(todo => {
         if (todo.id === id) {
           todo.isComplete = !todo.isComplete;
         }
         return todo;
      })
      setTodos(updatedTodos);
     };

    
  return (
    <div>
      <h1> What are we doing today?</h1>
      <TodoForm onSubmit={addTodo} />
     <Todo todos={todos} completeTodo={completeTodo} removeTodo=
     {removeTodo} updateTodo={updateTodo} 
          />
           <Link to="/home">
          <button className="btn btn-lg m-3 btn-danger">Go back to home!</button>
        </Link>
    </div>

  );
}

export default TodoList;
