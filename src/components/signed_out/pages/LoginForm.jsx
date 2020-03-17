import React from "react";
import {
  Paper,
  TextField,
  Avatar,
  Button,
  Typography,
  FormControl
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import styles from "../styles/LoginPageStyle";
import { withStyles } from "@material-ui/core/styles";

function LoginForm(props) {
  const { classes } = props;
  return (
    <main className={classes.main}>
      <Paper className={classes.paper} variant="outlined">
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5" className={classes.signIn}>
          Sign In
        </Typography>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <TextField
              required
              id="standard-required"
              label="Required"
              variant="outlined"
              label="Email"
              autoFocus
            />
          </FormControl>

          <Button
            variant="contained"
            type="submit"
            fullWidth
            color="primary"
            className={classes.submit}
          >
            Log In
          </Button>
        </form>
      </Paper>
    </main>
  );
}

export default withStyles(styles)(LoginForm);
