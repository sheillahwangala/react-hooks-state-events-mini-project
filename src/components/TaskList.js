import React from "react";
import Task from "./Task";

function TaskList({tasks, onTaskDelete}) {
  const allTasks = tasks.map((task) => (
    <Task 
          key={task.text} 
          text={task.text} 
          category={task.category} 
          onTaskDelete={onTaskDelete} 
      />
  ));

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {allTasks}
    </div>
  );
}

export default TaskList;