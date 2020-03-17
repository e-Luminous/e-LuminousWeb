const styles = theme => ({
  root: {
    flexGrow: 1
  },
  logo: {
    maxWidth: 160
  },
  grow: {
    flexGrow: 1
  },
  button: {
    margin: ".5rem",
    fontFamily: "Rubik",
    fontWeight: "bold"
  },
  loginImg: {
    height: "auto",
    marginTop: ".5rem",
    width: "15rem",
    [theme.breakpoints.up("sm")]: {
      marginTop: "1rem",
      width: "20rem"
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "5rem",
      width: "35rem"
    }
  },
  section: {
    height: "100vh"
  }
});

export default styles;
