import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  root: {
    maxWidth: 607,
    margin: "15px 20px",

    [theme.breakpoints.up("md")]: {
      maxWidth: 350,
      margin: "10px 20px",
    },
  },
  media: {
    height: 340,
  },
  CardSection: {
    margin: "30px 0px",
  },

  cardWrapper: {
    width: "90%",
    margin: "4rem auto",
    maxWidth: "1280px",
  },
  CardItems: {
    paddingTop: "18px",
    paddingBottom: "12px",
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(2),
    },
  },

  CardButton: {
    backgroundColor: "#e9ecef",
    color: "#495057",
    border: "1px solid #adb5bd",
  },

  title: {
    margin: "10px 0px",
    textAlign: "left",
    fontSize: "1.2rem",
    [theme.breakpoints.up("md")]: {
      margin: "10px 50px",
      textAlign: "left",
    },
  },

  //navigation button

  nav_button: {
    border: "1px solid #fafafa",
    color: "#fafafa",
  },
}));
