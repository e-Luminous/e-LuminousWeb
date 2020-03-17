const foregroundColor = "#487EDC";

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
    fontFamily: "Rubik",
    fontWeight: "bold"
  },
  headerSection: {
    height: "80vh",
    // background: `url(${labsvg}) no-repeat center center fixed`,
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(6)
    }
  },
  homeTitle: {
    marginTop: "1rem",
    color: foregroundColor,
    fontFamily: "Sen",
    padding: "2rem",
    marginBottom: "2rem"
  },
  headingImg: {
    height: "auto",
    width: "15rem",
    [theme.breakpoints.up("sm")]: {
      width: "20rem"
    },
    [theme.breakpoints.up("md")]: {
      width: "28rem"
    },
    [theme.breakpoints.up("lg")]: {
      width: "35rem"
    }
  },
  featureHeading: {
    marginBottom: "2rem",
    fontFamily: "Sen"
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

  homeDescription: {
    color: "#212121",
    letterSpacing: "2px"
  },
  paper: {
    padding: ".5rem",
    margin: "1rem",
    borderRadius: ".7rem"
  },
  featureImg: {
    height: "200px",
    maxWidth: "200px !important"
  },
  featureName: {
    color: "#487EDC",
    marginBottom: "1rem"
  }
});

export default styles;
