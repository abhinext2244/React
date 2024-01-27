import React from "react";
function TaskItem({item,delatehandler,handleToggle}) {
    return ( 
    <div>
      <h2 style={{color:item.completed?"green":"red"}}>{item.task}</h2>
      <button onClick={handleToggle}>{item.completed?"yes":"NO"}</button>
      <p>{item.taskAssignedTo}</p>
      <button onClick={delatehandler}>Delete</button>
    </div>
)
  }
  
  export default TaskItem;