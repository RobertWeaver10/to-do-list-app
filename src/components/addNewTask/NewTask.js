import "./NewTask.css";
import NewTaskForm from "./NewTaskForm";

const NewTask = (props) => {
  const saveTaskDataHandler = (enteredTaskData) => {
    const taskData = {
      ...enteredTaskData,
      id: enteredTaskData.title + Math.random().toString(),
    };
    props.onAddTask(taskData);
  };

  return (
    <div className="new-task">
      <NewTaskForm onSaveTaskData={saveTaskDataHandler} />
    </div>
  );
};

export default NewTask;
