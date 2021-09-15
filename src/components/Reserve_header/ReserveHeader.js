import React from "react";
import { Typography, Box } from "@material-ui/core";
import useStyles from "./style";
import { useLocation } from "react-router";
import { format } from "date-fns";

function ReserveHeader() {
  const classes = useStyles();
  const location = useLocation();

  const placeName = location.state.location;
  const startDate = location.state.startDate;
  const endDate = location.state.endDate;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yyyy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yyyy");

  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <>
      <Box className={classes.container}>
        <Typography variant="p" className={classes.topInfo}>
          300+ Events in {placeName}
        </Typography>

        <Typography variant="h2" className={classes.title}>
          Enjoy life in {placeName}
        </Typography>

        <p className={classes.topInfo}> {range}</p>
      </Box>
    </>
  );
}

export default ReserveHeader;
