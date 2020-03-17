import React from "react";
import { AppBar, Toolbar, Button, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import logo from "../img/logo.png";
import login_svg from "../img/login.svg";
import styles from "../styles/LoginPageStyle";
import LoginForm from "./LoginForm";

function Login(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" className={classes.root}>
        <Toolbar>
          <img src={logo} alt="logo" className={classes.logo} />
          <div className={classes.grow}></div>

          <Button color="primary" className={classes.button}>
            Login
          </Button>
          <Button
            color="primary"
            variant="contained"
            className={classes.button}
          >
            Register
          </Button>
        </Toolbar>
      </AppBar>

      <div className={classes.section}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12} md={6} lg={6}>
            <LoginForm />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default withStyles(styles)(Login);
