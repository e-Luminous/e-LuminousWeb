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
import labsvg from "../img/labsvg.svg";

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
          <Grid item xs={12} md={6} lg={6}>
            <img
              src={labsvg}
              alg="labsvg"
              alt="headingimg"
              className={classes.headingImg}
            />
          </Grid>
        </Grid>
      </div>

      <Typography
        variant="h3"
        color="primary"
        className={classes.featureHeading}
      >
        Features
      </Typography>
      <Grid
        container
        className={classes.bodySection}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.paper} elevation={3}>
            <img
              src={virtual_class}
              alt="virtual"
              className={classes.featureImg}
            />
            <Typography variant="h4" className={classes.featureName}>
              Virtual Classroom
            </Typography>
            <Typography variant="body1">
              This application is a copy of google classroom where teachers can
              create and students join the classroom through the unique code.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.paper} elevation={3}>
            <img src={submit} alt="submit" className={classes.featureImg} />
            <Typography variant="h4" className={classes.featureName}>
              Easy Submission
            </Typography>
            <Typography variant="body1">
              Students submit their lab assignment thorugh the application. So
              they don't need to do the submission manually.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.paper} elevation={3}>
            <img
              src={responsive}
              alt="responsive"
              className={classes.featureImg}
            />
            <Typography variant="h4" className={classes.featureName}>
              Responsiveness
            </Typography>
            <Typography variant="body1">
              This applications is made with Material Design and made sure to be
              responsive. It can be used in desktop, tab and any devices easily.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.paper} elevation={3}>
            <img
              src={notification}
              alt="notification"
              className={classes.featureImg}
            />
            <Typography variant="h4" className={classes.featureName}>
              Notfication
            </Typography>
            <Typography variant="body1">
              Students will get notification when the teacher assigns any
              homework. So students won't miss anything and do the labwork on
              time.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(LandingPage);
