import React, { useState, useEffect } from 'react';
import TodoList from "./components/TodoList";
import TodoForm from './components/TodoForm';
import { Alert } from 'reactstrap';

function App() {

  const [todoList, setTodoList] = useState([]);
  const [alertVisible, setAlertVisible] = useState(false);
  const [totalCompleted, setTotalCompleted] = useState(0);

  const handleDoneTask = (id) => {
    let newTask = todoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task };
    });
    setTodoList(newTask);
  }

  const handleDeleteTask = (type, id) => {
    let newTask = todoList.filter(task => {
      switch (type) {
        case "single":
          return (task.id !== id);
        case "complete":
          return !task.complete;
        default:
          return "";
      }
    });
    setTodoList(newTask);
  }

  const handleAddTask = (userInput) => {
    let newTask = [...todoList];
    newTask = [...newTask, { id: Date.now(), task: userInput, complete: false }];
    setTodoList(newTask);
  }

  useEffect(() => {
    setTotalCompleted(todoList.filter(task => task.complete).length);
    if (totalCompleted % 3 === 0 && totalCompleted !== 0) {
      setAlertVisible(true);
    }
    else {
      setAlertVisible(false);
    }
  }, [todoList, totalCompleted])

  return (
    <div className="App">
      <div className="container p-3">
        <h1>To Do List</h1>
        <Alert color="success" isOpen={alertVisible}>
          Hurray! You have completed {totalCompleted} tasks!
        </Alert>
        <TodoForm handleAddTask={handleAddTask} />
        <TodoList todoList={todoList} handleDeleteTask={handleDeleteTask} handleDoneTask={handleDoneTask} />
      </div>
    </div>
  );
}

export default App;
