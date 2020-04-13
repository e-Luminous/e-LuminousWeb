import React, { useState } from "react";
import { auth } from "../../../utils/firebase";
import {
  Paper,
  TextField,
  Avatar,
  Button,
  Typography,
  FormControl,
  FormControlLabel,
  Checkbox,
  Grid,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import styles from "../styles/LoginPageStyle";
import { withStyles } from "@material-ui/core/styles";

function LoginForm(props) {
  const { classes } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmithandler = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      console.log("entered");
    } catch (error) {
      console.log(error);
    }
    console.log(e.target);
  };
  return (
    // <>
    //   <form onSubmit={onSubmithandler}>
    //     <input type="text" onChange={(e) => setEmail(e.target.value)} />
    //     <input type="password" onChange={(e) => setPassword(e.target.value)} />
    //     {/* <button type="submit">submit</button> */}
    //     <input type="submit" value="submit" />
    //   </form>
    // </>
    <main className={classes.main}>
      <Paper className={classes.paper} variant="outlined">
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5" className={classes.signIn}>
          Sign in
        </Typography>
        <Typography variant="h6">to continue to e-Luminous</Typography>
        <form className={classes.form} onSubmit={onSubmithandler}>
          <FormControl margin="normal" required fullWidth>
            <TextField
              required
              id="standard-required"
              variant="outlined"
              label="Email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <TextField
              required
              id="standard-required"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Grid container>
            <Grid item>
              <FormControlLabel
                control={<Checkbox value="loggedin" color="primary" />}
                label="Keep me logged in"
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
              <Link to="/register" className={classes.link}>
                <Button color="primary" className={classes.newAccount}>
                  Create new account
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                type="submit"
                color="primary"
                className={classes.submit}
                onClick={() => console.log("pressed")}
              >
                Log In
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </main>
  );
}

export default withStyles(styles)(LoginForm);
