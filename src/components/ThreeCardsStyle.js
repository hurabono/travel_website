import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  root: {
    maxWidth: 350,
    margin: "0px 20px",
  },
  media: {
    height: 240,
  },
  CardSection: {
    margin: "30px 0px",
  },

  cardWrapper: {
    width: "90%",
    margin: "2rem auto",
    maxWidth: "1280px",
  },
  CardItems: {
    padding: theme.spacing(2),
  },

  title: {
    margin: "10px 0px",
    textAlign: "left",
    [theme.breakpoints.up("md")]: {
      margin: "10px 50px",
      textAlign: "left",
    },
  },
}));
