export const fetchTodos = (q) => {
  return async (dispatch) => {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await data.json();
    dispatch({ type: "INIT_TODOS", payload: todos.slice(0, q) });
  };
};

export const fetchPosts = (q) => {
  return async (dispatch) => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await data.json();
    dispatch({ type: "INIT_POSTS", payload: posts.slice(0, q) });
  };
};

export const deletePost = (post) => {
  return (dispatch) => {
    dispatch({ type: "REMOVE_POST", payload: post });
  };
};
