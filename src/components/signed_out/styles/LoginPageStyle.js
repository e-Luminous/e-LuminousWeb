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
  main: {
    width: "auto",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      width: "35rem",
      marginLeft: "auto",
      marginRight: "auto"
    },
    [theme.breakpoints.up("md")]: {
      width: "35rem",
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
    width: "100%",
    marginTop: theme.spacing(3)
  },
  submit: {
    fontFamily: "Rubik",
    fontWeight: "bold",
    marginTop: theme.spacing(3)
  },
  newAccount: {
    fontFamily: "Rubik",
    fontWeight: "bold",
    textTransform: "none",
    marginTop: theme.spacing(3)
  },
  link: {
    textDecoration: "none"
  }
});

export default styles;
