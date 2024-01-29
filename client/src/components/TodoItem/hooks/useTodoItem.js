export const useTodoItem = (setTodoList, newTitle, setUpdateTitle) => {

      //PUT /todo/item/:id
      const updateTodoItemStatus = async (itemId) => {
        const res = await fetch(`/api/todo/item/${itemId}`, {
            method: "PUT",
            body: JSON.stringify({ actual: false }),
            headers: {
                "Content-Type": "application/json"
            },
        });

        if (res.ok) {
            setTodoList(actualTodoList => {
                return actualTodoList.map((actualTodoItem) => {
                    if (actualTodoItem.id === itemId) {
                        return { ...actualTodoItem, actual: false };
                    }
                    return actualTodoItem;
                });
            });
        }

    };

     //PUT /todo/item/:id
     const updateTodoItemTitle = async (itemId) => {
        if (newTitle.length) {
            const res = await fetch(`/api/todo/item/${itemId}`, {
                method: "PUT",
                body: JSON.stringify({ title: newTitle }),
                headers: {
                    "Content-Type": "application/json"
                },
            });

            if (res.ok) {
                setTodoList(actualTodoList => {
                    return actualTodoList.map((actualTodoItem) => {
                        if (actualTodoItem.id === itemId) {
                            return { ...actualTodoItem, title: newTitle };
                        }
                        return actualTodoItem;
                    });
                });
            }
            setUpdateTitle(false);
        }

    };

     //DELETE /todo/item/:id
     const deleteTodoItem = async (itemId) => {
        const res = await fetch(`/api/todo/item/${itemId}`, {
            method: "DELETE"
        });

        if (res.ok) {
            setTodoList(actualTodoList => {
                return actualTodoList
                    .filter((actualTodoItem) => (actualTodoItem.id !== itemId));
            })
        }
    };

    return {
        updateTodoItemStatus,
        updateTodoItemTitle,
        deleteTodoItem
    }
}