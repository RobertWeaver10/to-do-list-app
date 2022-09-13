import React, { useState } from "react";
import "./NewTaskForm.css";

const NewTaskForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredTimeDue, setEnteredTimeDue] = useState("");
  const [enteredDueDate, setEnteredDueDate] = useState("");
  const [enteredTag, setEnteredTag] = useState("grey");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const timeDueChangeHandler = (event) => {
    setEnteredTimeDue(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDueDate(event.target.value);
  };

  const tagChangeHandler = (event) => {
    setEnteredTag(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredTitle === "") {
      return;
    }
    if (enteredDueDate === "") {
      return;
    }

    let dueTime = "";
    if (
      enteredTimeDue.slice(0, 2) < 12 &&
      enteredTimeDue.slice(0, 2) !== "00"
    ) {
      if (enteredTimeDue.slice(0, 2) < 10) {
        dueTime = enteredTimeDue.slice(1) + " AM";
      } else {
        dueTime = enteredTimeDue + " AM";
      }
    } else if (enteredTimeDue.slice(0, 2) === "00") {
      dueTime = "12" + enteredTimeDue.slice(2) + " AM";
    } else if (enteredTimeDue.slice(0, 2) > 12) {
      let timeHour = enteredTimeDue.slice(0, 2) - 12;
      dueTime = timeHour + enteredTimeDue.slice(2) + " PM";
    } else if (enteredTimeDue.slice(0, 2) === "12") {
      dueTime = enteredTimeDue + " PM";
    }

    const inputs = {
      title: enteredTitle,
      timeDue: dueTime,
      date: new Date(enteredDueDate),
      tag: enteredTag,
    };

    props.onSaveTaskData(inputs);

    setEnteredTitle("");
    setEnteredTimeDue("");
    setEnteredDueDate("");
    setEnteredTag("grey");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-task__inputs">
        <div className="new-task__input">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-task__input">
          <label>Time Due</label>
          <input
            type="time"
            value={enteredTimeDue}
            onChange={timeDueChangeHandler}
          />
        </div>
        <div className="new-task__input">
          <label>Due date</label>
          <input
            type="date"
            value={enteredDueDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-task__input">
          <label>Tag</label>
          <select value={enteredTag} onChange={tagChangeHandler}>
            <option value="grey">default</option>
            <option value="red">red</option>
            <option value="blue">blue</option>
            <option value="orange">orange</option>
            <option value="green">green</option>
            <option value="teal">teal</option>
          </select>
        </div>
      </div>
      <div className="new-task__action">
        <button type="submit">add task</button>
      </div>
    </form>
  );
};

export default NewTaskForm;
