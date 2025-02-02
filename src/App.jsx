import React, { useState } from 'react';
import Compo from "./component/Compo";
import Addtodo from "./component/Addtodo";
import "./App.css";
import Todohold from "./component/Todohold";

function App() {
  const [todolist, setTodolist] = useState([
    { todoName: "Gaurav Singh", todoDate: "05/05/2005" },
    { todoName: "Aman Singh", todoDate: "25/09/2015" },
    { todoName: "Ravi Singh", todoDate: "25/09/2015" },
    
  ]);

  // Function to add a new to-do item
  const addTodo = (newTodo) => {
    setTodolist([...todolist, newTodo]);
  };

  // Function to delete a to-do item
  const deleteTodo = (index) => {
    const updatedTodoList = todolist.filter((_, i) => i !== index);
    setTodolist(updatedTodoList);
  };

  return (
    <>
      <center>
        <Compo />
      </center>

      <Addtodo addTodo={addTodo} />
      <Todohold todolist={todolist} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;

