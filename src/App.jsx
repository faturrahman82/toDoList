import { useState } from "react";
import { TaskInput } from "./components/TaskInput";
import { TaskItem } from "./components/TaskItem";
import StatsFooter from "./components/StatsFooter";


function App() {
  const [toDoList, setTodoList] = useState([]);

  const addTask = (taskName) => {
    const newTask = { taskName, checked: false };
    setTodoList([...toDoList, newTask]);
  };

  function deleteTask(deleteTaskName) {
    setTodoList(toDoList.filter((task) => task.taskName !== deleteTaskName));
  }

  function toggleCheck(taskName) {
    setTodoList((prevToDoList) =>
      prevToDoList.map((task) =>
        task.taskName === taskName ? { ...task, checked: !task.checked } : task
      )
    );
  }

  console.log(toDoList);
  return (
    <>
      <body className="container">
        <h1 className="">Task Master</h1>
        <TaskInput addTask={addTask} />
        <div className="toDoList">
          <span>To do</span>
          <ul className="list-items">
            {toDoList.map((task, key) => (
              <TaskItem
                task={task}
                key={key}
                deleteTask={deleteTask}
                toggleCheck={toggleCheck}
              />
            ))}
          </ul>
          {toDoList.length === 0 ? (
            <p className="notify">You are done!</p>
          ) : null}
        </div>
      </body>
      <StatsFooter toDoList={toDoList}/>
    </>
  );
}

export default App;
