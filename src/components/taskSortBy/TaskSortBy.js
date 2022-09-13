import React from "react";
import "./TaskSortBy.css";

const TaskSortBy = (props) => {
  //gotta pass whichever option is selected up to app.js and then pass it down to tasks.js
  //want to have an event listener that triggers on change and tells tasks.js how to sort
  const sortByHandler = (event) => {
    props.onSortBy(event.target.value);
  };

  return (
    <div className="task-sort">
      <label className="sort-by-label">Sort by</label>
      <select className="sort-by-dropdown" onChange={sortByHandler}>
        <option value="no-ordering">select</option>
        <option value="dueDate">Due Date</option>
        <option value="tag">Tag</option>
      </select>
    </div>
  );
};

export default TaskSortBy;
