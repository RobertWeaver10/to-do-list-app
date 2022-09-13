import React, { useState } from "react";
import NewTask from "./components/addNewTask/NewTask.js";
import Tasks from "./components/Tasks/Tasks.js";
import TaskSortBy from "./components/taskSortBy/TaskSortBy.js";

const INITIAL_TASKS = [
  {
    id: "initialExample",
    title: "Example",
    timeDue: "7:10 PM",
    date: new Date(2023, 6, 10),
    tag: "grey",
  },
  {
    id: "sortingExample2",
    title: "Example 2",
    timeDue: "7:10 PM",
    date: new Date(2022, 7, 10),
    tag: "red",
  },
  {
    id: "sortingExample3",
    title: "Example 3",
    timeDue: "7:10 PM",
    date: new Date(2026, 3, 14),
    tag: "blue",
  },
  {
    id: "sortingExample4",
    title: "Example 4",
    timeDue: "7:10 PM",
    date: new Date(2022, 9, 10),
    tag: "red",
  },
  {
    id: "sortingExample5",
    title: "Example 5",
    timeDue: "7:10 PM",
    date: new Date(2022, 4, 1),
    tag: "green",
  },
  {
    id: "sortingExample6",
    title: "Example 6",
    timeDue: "7:10 PM",
    date: new Date(2024, 11, 15),
    tag: "teal",
  },
  {
    id: "sortingExample7",
    title: "Example 7",
    timeDue: "7:10 PM",
    date: new Date(2023, 1, 3),
    tag: "green",
  },
  {
    id: "sortingExample8",
    title: "Example 8",
    timeDue: "7:10 PM",
    date: new Date(2026, 3, 13),
    tag: "orange",
  },
];

function App() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  const addTaskHandler = (taskData) => {
    setTasks((previousState) => {
      return [taskData, ...previousState];
    });
  };

  const completedTaskHandler = (taskData) => {
    setTasks((activeTask) =>
      activeTask.filter((task) => {
        return task.id !== taskData.id;
      })
    );
  };

  const sortByDate = (list) => {
    for (let i = 1; i < list.length; i++) {
      let currentTask = list[i];
      let j = i - 1;
      while (j > -1 && currentTask.date.getDate() < list[j].date.getDate()) {
        list[j + 1] = list[j];
        j--;
      }
      list[j + 1] = currentTask;
    }
    return list;
  };

  const sortByYear = (list) => {
    for (let i = 1; i < list.length; i++) {
      let currentTask = list[i];
      let j = i - 1;
      while (
        j > -1 &&
        currentTask.date.getFullYear() < list[j].date.getFullYear()
      ) {
        list[j + 1] = list[j];
        j--;
      }
      list[j + 1] = currentTask;
    }
    return list;
  };

  const sortByMonth = (list) => {
    for (let i = 1; i < list.length; i++) {
      let currentTask = list[i];
      let j = i - 1;
      while (j > -1 && currentTask.date.getMonth() < list[j].date.getMonth()) {
        list[j + 1] = list[j];
        j--;
      }
      list[j + 1] = currentTask;
    }
    return list;
  };

  const splitByTag = (list) => {
    //grey => 0, red => 1, blue => 2, orange => 3, green => 4, teal => 5
    let splitList = [[], [], [], [], [], []];
    for (let i = 0; i < list.length; i++) {
      if (list[i].tag === "grey") {
        splitList[0].push(list[i]);
      } else if (list[i].tag === "red") {
        splitList[1].push(list[i]);
      } else if (list[i].tag === "blue") {
        splitList[2].push(list[i]);
      } else if (list[i].tag === "orange") {
        splitList[3].push(list[i]);
      } else if (list[i].tag === "green") {
        splitList[4].push(list[i]);
      } else {
        splitList[5].push(list[i]);
      }
    }
    return splitList;
  };

  const sortByHandler = (sortByFilter) => {
    if (sortByFilter === "dueDate") {
      //sort tasks by due date
      let tasksCopy = [...tasks];

      sortByDate(tasksCopy);
      sortByMonth(tasksCopy);
      sortByYear(tasksCopy);

      setTasks(tasksCopy);
    } else if (sortByFilter === "tag") {
      //sort in order of tag
      let tasksCopy = splitByTag(tasks);
      //sort each sublist by date, month, then year
      for (let i = 0; i < tasksCopy.length; i++) {
        sortByDate(tasksCopy[i]);
        sortByMonth(tasksCopy[i]);
        sortByYear(tasksCopy[i]);
      }
      //after sorting each sublist then unpack back into one array
      let sortedTasks = [];
      for (let i = 0; i < tasksCopy.length; i++) {
        sortedTasks.push(...tasksCopy[i]);
      }
      //pass the single sorted array into setTasks()
      setTasks(sortedTasks);
    }
  };

  return (
    <div>
      <NewTask onAddTask={addTaskHandler} />
      <TaskSortBy onSortBy={sortByHandler} />
      <Tasks onCompletedTask={completedTaskHandler} items={tasks}></Tasks>
    </div>
  );
}

export default App;
