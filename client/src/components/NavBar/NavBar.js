import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useStyles } from "./styles";

const NavBar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position='sticky' className={classes.navbar}>
        <Typography variant='h6'>Brad Samuel</Typography>
        <Toolbar className={classes.toolbar}>
          <Button variant='text' color='secondary'>Home</Button>
          <Button variant='text' color='secondary'>Skills</Button>
          <Button variant='text' color='secondary'>Projects</Button>
          <Button variant='text' color='secondary'>Contact</Button>
          <Button variant='text' color='secondary'>Resume</Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
