const tab = (tab = "todos", action) => {
  switch (action.type) {
    case "INIT_TAB":
      return action.payload;
    default:
      return tab;
  }
};

export default tab;
