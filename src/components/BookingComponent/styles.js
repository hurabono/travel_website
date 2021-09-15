import { alpha, makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  title: {
    display: "block",
    textTransform: "uppercase",
    fontSize: "1.5rem",
    fontWeight: 300,
  },
  header: {
    textTransform: "uppercase",
    fontSize: "2rem",
    fontWeight: 500,
  },
  search: {
    position: "relative",
    borderRadius: 88,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 1),
    "&:hover": { backgroundColor: alpha(theme.palette.common.white, 1) },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    minWidth: "250px",
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(3),
      minWidth: "350px",
    },
  },

  searchInput: {
    backgroundColor: "transparent",
    margin: "0px 22px",
    minWidth: "150px",
    marginBottom: "10px",
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(3),
      minWidth: "350px",
    },
  },

  guests: {
    fontWeight: 400,
    textTransform: "uppercase",
    fontSize: "1rem",
  },

  guestCounter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#fff",
    padding: "10px",
  },

  guest_icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  counter: {
    width: "40px",
    height: "32px",
    marginLeft: "5px",
    fontSize: "18px",
    color: "#9775fa",
    outline: "none",
    border: "1px solid #ccc",
    textAlign: "center",
  },

  buttonWrapper: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    background: "#fff",
    padding: "10px",
  },

  reserveButton: {
    width: "100%",
  },

  backGround: {
    backgroundColor: "#A5D8FF",
    padding: 70,
    marginBottom: "150px",
  },
  searchIcon: {
    backgroundColor: "#A5D8FF",
    borderRadius: 55,
    fontSize: "3rem",
    padding: "0.5rem",
    cursor: "pointer",
    margin: 5,
  },
  inputRoot: {
    color: "inherit",
  },

  toolbar: {
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    margin: "12px 0",
    [theme.breakpoints.up("sm")]: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      minHeight: "220px",
    },
  },
}));
