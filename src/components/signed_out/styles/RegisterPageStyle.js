const styles = theme => ({
  root: {
    flexGrow: 1
  },
  logo: {
    maxWidth: 160,
    marginTop: "5px"
  },
  grow: {
    flexGrow: 1
  },
  button: {
    margin: ".5rem",
    fontFamily: "Rubik",
    fontWeight: "bold"
  },
  main: {
    width: "auto",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      width: "30rem",
      marginLeft: "auto",
      marginRight: "auto"
    },
    [theme.breakpoints.up("md")]: {
      width: "30rem",
      marginLeft: theme.spacing(6),
      marginRight: theme.spacing(6)
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "10px",
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(4)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    fontFamily: "Rubik",
    fontWeight: "bold"
  },
  signin: {
    fontFamily: "Rubik",
    fontWeight: "bold"
  },
  link: {
    textDecoration: "none"
  }
});

export default styles;
