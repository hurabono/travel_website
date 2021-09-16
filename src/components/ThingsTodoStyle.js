import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  root: {
    maxWidth: "auto",
    margin: "0px 10px",
    [theme.breakpoints.up("sm")]: {
      maxWidth: 350,
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
      maxWidth: "1280px",
    },
  },

  title: {
    fontSize: "1.2rem",
    marginLeft: "22px",
    margin: "30px auto",

    [theme.breakpoints.up("sm")]: {
      width: "1160px",
      display: "block",
      fontSize: "1.2rem",
      margin: "30px auto",
    },
  },
}));
