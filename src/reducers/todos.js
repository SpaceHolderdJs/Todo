const todos = (
  todos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : null,
  action
) => {
  switch (action.type) {
    case "INIT_TODOS":
      return [...action.payload];

    case "ADD_TODO":
      return [...todos, action.payload];

    case "REMOVE_TODO":
      return todos.filter((todo) => todo.id !== action.payload.id);

    case "UPDATE_TODO":
      todos.splice(action.payload.index, 1, action.payload.todo);
      return [...todos];

    default:
      return todos;
  }
};

export default todos;
