import { combineReducers } from "redux";

import tab from "./tab";
import todos from "./todos";
import posts from "./posts";

const allReducers = combineReducers({
  tab,
  todos,
  posts,
});

export default allReducers;
