import TodoItem from "../TodoItem";
import "./doneList.css";

const DoneList = (props) => {
    const { todoList, setTodoList } = props;

    return (
        <div className="doneList">
            <div className="doneListColumn">Done:</div>
            {(todoList.length > 0) &&
                todoList.filter((item) => (
                    !item.actual
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
    )
}

export default DoneList;
