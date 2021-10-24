import React from "react";

import { useDispatch, useSelector } from "react-redux";

import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";

export default function Header() {
  const dispatch = useDispatch();
  const tabs = ["create", "todos", "posts"];

  return (
    <AppBar position="relative" sx={{ background: "#1d1d1d" }}>
      <Toolbar>
        {tabs.map((tab) => (
          <Button
            key={tab}
            color="inherit"
            onClick={() => dispatch({ type: "INIT_TAB", payload: tab })}>
            {tab}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}
