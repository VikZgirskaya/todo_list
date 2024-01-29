import { useState } from "react";
import { useTodoItemInput } from "./hooks/useTodoItemInput";
import "./todoItemInput.css";

const TodoItemInput = (props) => {
    const {todoList, setTodoList} = props;
    const [title, setTitle] = useState("");
    const { addTodoItem } = useTodoItemInput(todoList, setTodoList, title, setTitle);

    return (
      <form className="addTodoItemForm" onSubmit={addTodoItem}>
          <input 
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add a new todo item"
            className="addTodoItemInput"
            required 
          />
          <button className="addTodoItemBtn" type="submit">Add</button>
      </form>
    )
}

export default TodoItemInput;