import React, { useEffect, useCallback } from "react";
import { Box, List, Typography } from "@mui/material";

import styles from "../styles/todos.module.scss";

import Todo from "./Todo";

import { useSelector, useDispatch } from "react-redux";

const Todos = () => {
  const todos = useSelector((store) => store.todos);
  const dispatch = useDispatch();

  const getTodos = useCallback(
    (quantity) => {
      !todos &&
        fetch("https://jsonplaceholder.typicode.com/todos")
          .then((response) => response.json())
          .then((todos) => {
            dispatch({ type: "INIT_TODOS", payload: todos.slice(0, quantity) });
          });
    },
    [todos]
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    getTodos(10);
  }, []);

  return (
    <Box className={styles.container}>
      <Typography variant="h3" m="10px">
        Todos
      </Typography>
      <List className={styles.todosList}>
        {todos?.map((todo) => (
          <Todo todo={todo} />
        ))}
      </List>
    </Box>
  );
};

export default Todos;
