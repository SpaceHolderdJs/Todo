import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Typography, List, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";

import { fetchPosts, deletePost } from "../actions";
import styles from "../styles/todos.module.scss";

const Posts = () => {
  const posts = useSelector((store) => store.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(10));
  }, []);

  return (
    <Box className={styles.container}>
      <Typography variant="h3" m="10px">
        Posts
      </Typography>
      <List className={styles.todosList}>
        {posts?.map((post) => (
          <div key={post.title}>
            <h3>
              {post.title}{" "}
              <IconButton onClick={() => dispatch(deletePost(post))}>
                <Delete />
              </IconButton>{" "}
            </h3>
            <p>{post.body}</p>
          </div>
        ))}
      </List>
    </Box>
  );
};

export default Posts;
