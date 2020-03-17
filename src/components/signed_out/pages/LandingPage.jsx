import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Grid,
  Typography,
  Paper
} from "@material-ui/core";
import styles from "../styles/landingPageStyle";
import { withStyles } from "@material-ui/core/styles";
import logo from "../img/logo.png";
import notification from "../img/notification.svg";
import submit from "../img/submit.svg";
import virtual_class from "../img/virtual_class.svg";
import responsive from "../img/responsive.svg";

function LandingPage(props) {
  const { classes } = props;
  return (
    <div>
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
      <div className={classes.headerSection}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12} md={6} lg={6}>
            <Typography variant="h2" className={classes.homeTitle}>
              e-Luminous
              <Typography className={classes.homeDescription}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque quasi cupiditate tenetur eos doloribus assumenda
                consectetur porro autem nemo
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </div>
      <div>
        <Typography
          variant="h3"
          color="primary"
          className={classes.featureHeading}
        >
          WHAT WE OFFER
        </Typography>
        <Grid container className={classes.bodySection}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper className={classes.paper} variant="outlined">
              <img
                src={virtual_class}
                alt="virtual"
                className={classes.featureImg}
              />
              <Typography variant="h4" className={classes.featureName}>
                Virtual Classroom
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper className={classes.paper} variant="outlined">
              <img src={submit} alt="submit" className={classes.featureImg} />
              <Typography variant="h4">Easy Submission</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper className={classes.paper} variant="outlined">
              <img
                src={responsive}
                alt="responsive"
                className={classes.featureImg}
              />
              <Typography variant="h4">Responsiveness</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper className={classes.paper} variant="outlined">
              <img
                src={notification}
                alt="notification"
                className={classes.featureImg}
              />
              <Typography variant="h4">Notfication</Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default withStyles(styles)(LandingPage);
