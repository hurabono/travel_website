import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    margin: "28px 15px",
  },

  topInfo: {
    margin: "0px 30px",
    display: "block",
  },

  title: {
    fontSize: "2rem",
    margin: "15px 30px",
  },

  itemWrapper: {
    margin: "22px 30px",
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
    },
  },
}));
