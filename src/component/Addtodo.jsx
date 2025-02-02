import React, { useState } from 'react';

function Addtodo({ addTodo }) {
  const [name, setName] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleAddClick = () => {
    if (name && dueDate) {

      const dateformate= new Date(dueDate)
      const day=String(dateformate.getDate()).
      padStart(2,'0');
      const month =String(dateformate.getMonth()+1).padStart(2,'0')
      const year=dateformate.getFullYear();
       const formateddate=`${day}/${month}/${year}`;



      const newTodo = { todoName: name, todoDate: formateddate };
      addTodo(newTodo);
      setName('');
      setDueDate('');
    } else {
      alert("Please enter both a name and a due date.");
    }
  };

  return (
    <div className="container">
      <div className="row kl-row"></div>
      <div className="row kl-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter the name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-4">
          <input
            type="Date"
            placeholder="Enter Due Date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddClick}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addtodo;

