import React, { useState } from "react";
import { auth } from "../../../utils/firebase";
import {
  Paper,
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles/RegisterPageStyle";

function RegisterForm(props) {
  const { classes } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmithandler = async (e) => {
    e.preventDefault();
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      console.log("success");
    } catch (error) {
      console.log(error);
    }
    console.log(e.target);
  };

  return (
    <main className={classes.main}>
      <Paper className={classes.paper} variant="outlined">
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Typography variant="h6">to continue to e-Luminous</Typography>
        <form className={classes.form} noValidate onSubmit={onSubmithandler}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="baseline"
          >
            <Grid item>
              <Link to="/login" className={classes.link}>
                <Button color="primary" className={classes.signin}>
                  Already have an account
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                type="submit"
                color="primary"
                className={classes.submit}
              >
                Create
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </main>
  );
}

export default withStyles(styles)(RegisterForm);
