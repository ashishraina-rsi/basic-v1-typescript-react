import React, { FC, ChangeEvent , useState } from 'react';
import './App.css';
// import ReactSampleFCComponent from './containers/Sample';
import { ITask } from "./Interfaces";
import ToDoTask from './components/ToDoTask';

const App:FC = () => {
  const [taskName, setTaskName]  = useState<string>("");
  const [taskTime, setTaskTime]  = useState<string>("");
  const [toDoList, setToDoList] = useState<ITask[]>([]);

  const TaskHandler = (event: ChangeEvent<HTMLInputElement>):void => {
    if(event.target.name === "taskName"){
      setTaskName(event.target.value);
    } else {
      setTaskTime(event.target.value);
    }
  }

  const setTask = ():void => {
    const newData = [...toDoList]
    const newTask = {
      taskName: taskName,
      taskTime: Number(taskTime)
    };
    newData.push(newTask);
    setToDoList(newData);
  }

  const completeTask = (taskNameToDelete: string): void => {
    setToDoList(
      toDoList.filter((task) => {
        return task.taskName !== taskNameToDelete
      })
    )
    setTaskName("");
    setTaskTime("");

  }

  return (
    <div className="App">
        <h1>To Do List</h1>
       {/* <ReactSampleFCComponent title={"sample"}> Sample Component </ReactSampleFCComponent>  */}

       <div className="TaskCreaterWrapper">
          <input type="text" name="taskName" value={taskName} onChange={TaskHandler}/>
          <input type="text" name="taskTime" value={taskTime} onChange={TaskHandler}/>
          <button onClick={setTask}>Set Task</button>
       </div>
       <hr />
       <div className="wrapper">
         {toDoList.length > 0 && toDoList.map((item, index) => {
           return(
            <div className="TaskDisplayer">
                <ToDoTask task={item} taskDeleteHandler={completeTask}/>
            </div>
           )
         })}
         {toDoList.length === 0 && <p>No Task to do now , go play!</p>}
       </div>
    </div>
  );
}

export default App;
