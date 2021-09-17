import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  title: {
    textTransform: "uppercase",
    margin: "8px 0px",
  },
  priceTag: {
    margin: "10px 0px",
    textAlign: "right",
  },

  root: {
    width: "350%",
    display: "inline-block",
    margin: "1rem",
  },
  media: {
    height: 340,
  },

  madia_map: {
    height: 340,
  },

  card2: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      margin: "1rem",
      display: "inline-block",
    },
  },

  loading: {
    height: "600px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  // This is the Reserve List Area
  cardWrapper: {
    marginBottom: "2rem",
    maxWidth: "1280px",
    width: "90%",
    margin: "0 auto",
  },

  CardItems: {
    display: "flex",
    justifyContent: "center",
  },

  filters: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      margin: "22px 5px",
      display: "inline-block",
      border: "1px solid #ccc",
      background: "#fff",
      padding: "10px 8px",
      borderRadius: 100,
      fontSize: "1rem",
      cursor: "pointer",
      transition: "0.3s",
      "&:hover": { boxShadow: "1px 3px 4px #ccc" },
      "&:active": { transform: "scale(0.9)" },
      "&:nth-of-type(1)": {
        marginLeft: "48px",
        padding: "10px 22px",
      },
    },
  },

  review: {
    margin: "10px",
    fontSize: "0.8rem",
  },

  describe: {
    fontSize: "1rem",
    lineHeight: "1.2rem",
  },
}));
