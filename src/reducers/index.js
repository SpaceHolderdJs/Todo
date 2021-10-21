import { combineReducers } from "redux";

import tab from "./tab";
import todos from "./todos";

const allReducers = combineReducers({
  tab,
  todos,
});

export default allReducers;
