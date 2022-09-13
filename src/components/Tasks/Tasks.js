import React from "react";
import Task from "./Task.js";
import "./Tasks.css";

const Tasks = (props) => {
  const taskCompletedHandler = (taskData) => {
    props.onCompletedTask(taskData);
  };

  //want to sort all the tasks here
  //have multiple options on what to sort on => make a new component that has a dropdown and allows users to choose
  //what they want to sort by: if sort by tag then go in order listen on form
  //make default sort be by day due by time due. An implementation of insertion sort is probably best option

  return (
    <div className="tasks">
      {props.items.map((curtask) => (
        <Task
          key={curtask.id}
          onTaskCompleted={taskCompletedHandler}
          title={curtask.title}
          timeDue={curtask.timeDue}
          date={curtask.date}
          id={curtask.id}
          tag={curtask.tag}
        />
      ))}
    </div>
  );
};

export default Tasks;
