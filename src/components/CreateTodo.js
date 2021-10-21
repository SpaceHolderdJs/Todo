import React, { useState, useCallback } from "react";
import {
  Box,
  Container,
  Input,
  IconButton,
  Typography,
  Alert,
} from "@mui/material";
import { Add, Close } from "@mui/icons-material";

import { useDispatch, useSelector } from "react-redux";

import styles from "../styles/createTodo.module.scss";

const CreateTodo = () => {
  const [value, setValue] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const todos = useSelector((store) => store.todos);

  const dispatch = useDispatch();

  const triggerAlert = useCallback((seconds) => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, seconds * 1000);
  }, []);

  return (
    <Box className={styles.container}>
      <Typography variant="h3" m="10px">
        Create Todo
      </Typography>
      <Container fixed className={styles.form} sx={{ boxShadow: 3 }}>
        <Input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          className={styles.input}
        />
        <IconButton onClick={() => setValue("")}>
          <Close />
        </IconButton>
        <IconButton
          disabled={value.length > 0}
          onClick={() => {
            dispatch({
              type: "ADD_TODO",
              payload: {
                userId: 1,
                id: todos.length + 1,
                title: value,
                completed: false,
              },
            });
            setValue("");
            triggerAlert(3);
          }}>
          <Add />
        </IconButton>
      </Container>
      {showAlert && <Alert className={styles.alert}>Todo added</Alert>}
    </Box>
  );
};

export default CreateTodo;
