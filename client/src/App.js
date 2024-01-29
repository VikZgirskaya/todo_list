import { useEffect, useState } from "react";
import { TodoItemInput, DoneList, TodoList } from "./components";
import "./styles.css";

export default function App() {
  const [todoList, setTodoList] = useState([]);

  //GET /todo/list
  useEffect(() => {
    const getTodos = async () => {
      const data = await fetch("/api/todo/list");
      const todoList = await data.json();

      setTodoList(todoList.items);
    };

    getTodos()
      .catch(console.error);
  }, []);

  return (
    <div className="container">
      <h1 className="todoItemHeader">
        TO<span className="todoLogo">DO</span> list</h1>
      <TodoItemInput
        todoList={todoList}
        setTodoList={setTodoList} />
      <TodoList
        setTodoList={setTodoList}
        todoList={todoList}
        />
      <DoneList
        setTodoList={setTodoList}
        todoList={todoList}
        />
    </div>
  );
}
