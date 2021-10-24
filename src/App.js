import "./App.scss";

import { useSelector } from "react-redux";

import Header from "./components/Header";
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";
import Posts from "./components/Posts";

function App() {
  const tab = useSelector((store) => store.tab);

  return (
    <div className="App">
      <Header />
      {tab === "create" && <CreateTodo />}
      {tab === "todos" && <Todos />}
      {tab === "posts" && <Posts />}
    </div>
  );
}

export default App;
