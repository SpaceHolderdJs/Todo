const posts = (posts = [], action) => {
  switch (action.type) {
    case "INIT_POSTS":
      return [...action.payload];
    case "REMOVE_POST":
      return posts.filter((post) => post.id !== action.payload.id);
    default:
      return posts;
  }
};

export default posts;
