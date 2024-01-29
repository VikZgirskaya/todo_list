export const useTodoItemInput = (todoList, setTodoList, title, setTitle) => {

    //POST /todo/item
    const addTodoItem = async () => {
        if (title.length) {
          const res = await fetch("/api/todo/item", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              actual: true
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          const newTodoItem = await res.json();
    
          if (newTodoItem) {
            setTodoList([...todoList, newTodoItem]);
          }
          setTitle("");
    
        }
      }

      return { addTodoItem };
}