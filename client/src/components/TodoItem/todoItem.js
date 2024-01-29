import { useState } from "react";
import { showDate } from "../../utils";
import { useTodoItem } from "./hooks/useTodoItem";
import "./todoItem.css";

const TodoItem = (props) => {
    const { item, setTodoList, number } = props;
    const [updateTitle, setUpdateTitle] = useState(false);
    const [newTitle, setNewTitle] = useState(item.title);
    const { 
        updateTodoItemStatus,
        updateTodoItemTitle,
        deleteTodoItem 
    } = useTodoItem(setTodoList, newTitle, setUpdateTitle);

    return (
        <div className="todoItem">
            <div className="todoItemNumber">
                { number + 1 }
            </div>
            {!updateTitle ?
                <div className="todoItemTitle"
                    onClick={() => setUpdateTitle(true)}>
                    {item.title}
                </div> :
                <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="Edit a new todo item"
                    className="editTodoItemInput"
                    required
                />
            }
            <div className="todoItemDate">
                {showDate(item.createdAt)}
            </div>
            <div className="todoActionBtns">
                {item.actual &&
                    <button
                        className="todoItemStatusBtn"
                        onClick={() => updateTodoItemStatus(item.id)}
                    >
                        Complete
                    </button>}
                {!item.actual &&
                    <button
                        className="todoItemDeleteBtn"
                        onClick={() => deleteTodoItem(item.id)}
                    >
                        Delete
                    </button>}
                {updateTitle &&
                    <button
                        className="todoItemStatusBtn"
                        onClick={() => updateTodoItemTitle(item.id)}
                    >
                        Save
                    </button>}
            </div>
        </div>
    )
}

export default TodoItem;
