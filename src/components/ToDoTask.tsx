import './ToDoTask.css';

import React, { FC } from 'react';
import { ITask } from '../Interfaces/index';

interface Props {
  task : ITask,
  taskDeleteHandler(taskNameToDelete : string): void
}

const ToDoTask = ({task, taskDeleteHandler} : Props) => {
  return <div className="ToDoTask">
      <div>{task.taskName}</div>
      <div>{task.taskTime}</div>
      <div onClick={() => taskDeleteHandler(task.taskName)}>X</div>
  </div>;
}

export default ToDoTask;
