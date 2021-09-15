import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  root: {
    maxWidth: "auto",
    margin: "0px 10px",
    [theme.breakpoints.up("sm")]: {
      maxWidth: 320,
      margin: "0px 20px",
    },
  },
  media: {
    height: 350,
    borderRadius: "10px",
    [theme.breakpoints.up("md")]: {
      height: 320,
      borderRadius: "10px",
    },
  },
  CardSection: {
    margin: "30px 0px",
  },

  cardWrapper: {
    width: "100%",
    margin: "2rem auto",

    [theme.breakpoints.up("sm")]: {
      width: "90%",
      margin: "2rem auto",
      maxWidth: "1920px",
    },
  },

  title: {
    width: "1280px",
    display: "block",
    fontSize: "1.2rem",
    margin: "20px auto",
    textAlign: "left",
    marginLeft: "20px",
  },
}));
