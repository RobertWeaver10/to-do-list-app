import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Task.css";
import Date from "./Date/Date.js.js";

function Task(props) {
  const timeDue = props.timeDue;
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const title = props.title;

  const buttonClasses = "task-button";

  let backgroundCol = "#eee";

  const completedHandler = () => {
    const data = {
      id: props.id,
      title: title,
      timeDue: timeDue,
      date: props.date,
    };
    props.onTaskCompleted(data);
  };

  if (props.tag !== "grey") {
    if (props.tag === "red") {
      backgroundCol = "#d9534f";
    } else if (props.tag === "blue") {
      backgroundCol = "#428bca";
    } else if (props.tag === "orange") {
      backgroundCol = "#f0ad4e";
    } else if (props.tag === "green") {
      backgroundCol = "#5cb85c";
    } else {
      backgroundCol = "#5bc0de";
    }
  }

  return (
    <div className="task" style={{ backgroundColor: backgroundCol }}>
      <Date month={month} year={year} day={day} />
      <div>
        <h2 className="task-text">{title}</h2>
      </div>
      <div>
        <h4 className="task-text">{timeDue}</h4>
      </div>
      <div>
        <button onClick={completedHandler} className={buttonClasses}>
          completed
        </button>
      </div>
    </div>
  );
}

export default Task;
