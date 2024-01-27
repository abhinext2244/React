import React, { useState } from "react";
import "./App.css";
import TaskItem from "./components/TaskItem";

function App() {
  const [tasks, setTasks] = useState([]);
  const [formState, setFormState] = useState({
    task: "", // string
    completed: false, // boolean
    taskAssignedTo: "", // string
  });

  function handleChange(event) {
    // Implement logic to handle form changes
    let TargetName=event.target.name;
    let value=TargetName==="completed"?event.target.checked:event.target.value;
    setFormState({
      ...formState,
      [TargetName]:value
    })
    
    // console.log(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    setTasks([...tasks,formState])
    setFormState({
      task: "", // string
      completed: false, // boolean
      taskAssignedTo: "", // str
    })
    // Implement logic to handle form submission
  }
  function delatehandler(index){
    let updateArray=[...tasks]
    updateArray.splice(index,1)
    setTasks(updateArray)
  }
  function handleToggle(index){
    let updateArray=[...tasks]
    updateArray[index].completed=!updateArray[index].completed;
    setTasks(updateArray)
  
  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input name="task" type="text" placeholder="Add Task" value={formState.task} onChange={handleChange} />
          <label>
            Completed:
            <input name="completed" type="checkbox" onChange={handleChange}/>
          </label>
          <select name="taskAssignedTo" onChange={handleChange}>
            <option value="">Select Assignee</option>
            <option value="Bruce">Bruce</option>
            <option value="Barry">Barry</option>
            <option value="Clark">Clark</option>
            <option value="Oliver">Oliver</option>
            <option value="Jina">Jina</option>
          </select>
          <button type="submit">Add Task</button>
        </form>
      </div>
      <hr />
      {tasks.map((item, index) => (
        <TaskItem key={index}
         item={item} 
         delatehandler={()=>delatehandler(index)}
         handleToggle={()=>handleToggle(index)
        }/>
      ))}
    </>
  );
}

export default App;