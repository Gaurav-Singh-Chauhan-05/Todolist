import React from 'react';

function Todoitems({ todoName, todoDate, deleteTodo }) {
  return (
    <div className="container">
      <div className="row kl-row"></div>
      <div className="row kl-row">
        <div className="col-6">
          <h2>{todoName}</h2>
        </div>
        <div className="col-4">
          <p>{todoDate}</p>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={deleteTodo}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todoitems;

