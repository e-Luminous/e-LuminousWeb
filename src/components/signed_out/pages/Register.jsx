import React from "react";
import { AppBar, Toolbar, Button, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import styles from "../styles/RegisterPageStyle";
import RegisterForm from "./RegisterForm";

function Register(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" className={classes.root}>
        <Toolbar>
          <Link to="/">
            <img src={logo} alt="logo" className={classes.logo} />
          </Link>
          <div className={classes.grow}></div>

          <Button color="primary" className={classes.button}>
            LogIn
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
            <RegisterForm />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default withStyles(styles)(Register);