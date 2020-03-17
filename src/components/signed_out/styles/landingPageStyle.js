import labsvg from "../img/labsvg.svg";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  logo: {
    maxWidth: 160
  },
  button: {
    margin: ".5rem",
    letterSpacing: "2px"
  },
  headerSection: {
    height: "100vh",
    background: `url(${labsvg}) no-repeat center center fixed`,
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(6)
    }
  },
  featureHeading: {
    marginBottom: "2rem"
  },
  labsvg: {
    height: "auto",
    maxWidth: "15rem",
    [theme.breakpoints.up("sm")]: {
      height: "auto",
      maxWidth: "20rem"
    },
    [theme.breakpoints.up("md")]: {
      height: "auto",
      maxWidth: "30rem"
    }
  },
  homeTitle: {
    marginTop: "12rem",
    color: "#6200ea"
  },
  homeDescription: {
    color: "#212121"
  },
  paper: {
    padding: ".5rem",
    margin: "1rem",
    borderRadius: ".7rem"
  },
  featureImg: {
    height: "auto",
    maxWidth: "200px"
  },
  featureName: {
    color: ""
  }
});

export default styles;
