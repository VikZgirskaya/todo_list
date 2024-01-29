import { useState } from "react";
import TodoItem from "../TodoItem";
import {sortTodoList} from "../../utils";
import "./todoList.css";

const TodoList = (props) => {
    const { todoList, setTodoList } = props;
    const [titleSort, setTitleSort] = useState(true);

    const sortedList = sortTodoList(todoList, titleSort);

    return (
        <div className="todoList">
            <div className="todoListColumns">
                <div className="todoListColumnOrder">Order:</div>
                <div className="todoListColumnTitle" onClick={() => setTitleSort(true)}>Title</div>
                <div className="todoListColumnDate" onClick={() => setTitleSort(false)}>Date</div>
                <div className="todoListColumnAction">Action</div>
            </div>
            <div className="todoListElements">
                {(todoList.length > 0) &&
                        sortedList.filter((item) => (
                        item.actual
                    )).map((item, index) => (
                        <TodoItem 
                            key={item.id}
                            number={index}
                            item={item}
                            setTodoList={setTodoList}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default TodoList;
