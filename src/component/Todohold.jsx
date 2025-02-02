import React from 'react';
import Todoitems from "./Todoitems";

function Todohold({ todolist, deleteTodo }) {
  return (
    <div className="item-container">
      {todolist.length > 0 ? (
        todolist.map((item, index) => (
          <Todoitems
            key={index}
            todoName={item.todoName}
            todoDate={item.todoDate}
            deleteTodo={() => deleteTodo(index)}
          />
        ))
      ) : (
        <center><p style={{
          border: '2px solid #ccc',  
              padding: '20px',            
              borderRadius: '8px',        
              backgroundColor: '#f9f9f9',
              width: '200px',            
              textAlign: 'center',        
              margin: '20px auto',      
          
        }}>No tasks to display</p></center>
        
      )}
    </div>
  );
}

export default Todohold;
