export const sortTodoList = (list, title) => {
    return list.sort((a, b) => {
      if (!title){
          return new Date(b.createdAt) - new Date(a.createdAt);
      } else {
          return ('' + a.title).localeCompare(b.title);
      }
    });      
};

export const showDate = (date) => {
    const stringDate = new Date(date);
    return stringDate.toDateString();
}
