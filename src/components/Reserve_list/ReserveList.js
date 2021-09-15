import React, { useState, useEffect } from "react";
import { CssBaseline, Typography, Container, Grid } from "@material-ui/core";
import RoomCard from "./RoomCard";
import useStyles from "./style";

function ReserveList(props) {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />

      <Grid
        container
        className={classes.cardWrapper}
        maxWidth="sm"
        justifyContent="center"
      >
        <Grid
          container
          justifyContent="center"
          xs={12}
          className={classes.CardItems}
        >
          <RoomCard
            src={props.src}
            text="attractions"
            path="/services"
            desc="Lizards are a widespread group of squamate reptiles, with over
          6,000 species, ranging across all continents except Antarctica"
            price="$25 per night"
            category="Cancellation Flexibility"
          />

          <RoomCard
            src="/images/img-9.jpg"
            text="attractions"
            path="/services"
            desc="Lizards are a widespread group of squamate reptiles, with over
          6,000 species, ranging across all continents except Antarctica"
            price="$25 per night"
            category="Popular Event"
          />

          <RoomCard
            src="/images/img-9.jpg"
            text="attractions"
            path="/services"
            desc="Lizards are a widespread group of squamate reptiles, with over
          6,000 species, ranging across all continents except Antarctica"
            price="$25 per night"
            category="Popular Event"
          />

          <RoomCard
            src="/images/img-9.jpg"
            text="attractions"
            path="/services"
            desc="Lizards are a widespread group of squamate reptiles, with over
          6,000 species, ranging across all continents except Antarctica"
            price="$25 per night"
          />

          <RoomCard
            src="/images/img-9.jpg"
            text="attractions"
            path="/services"
            desc="Lizards are a widespread group of squamate reptiles, with over
          6,000 species, ranging across all continents except Antarctica"
            price="$25 per night"
            category="Promotion"
          />
          <RoomCard
            src="/images/img-9.jpg"
            text="attractions"
            path="/services"
            desc="Lizards are a widespread group of squamate reptiles, with over
          6,000 species, ranging across all continents except Antarctica"
            price="$25 per night"
            category="Promotion"
          />
          <RoomCard
            src="/images/img-9.jpg"
            text="attractions"
            path="/services"
            desc="Lizards are a widespread group of squamate reptiles, with over
          6,000 species, ranging across all continents except Antarctica"
            price="$25 per night"
            category="Cancellation Flexibility"
          />
          <RoomCard
            src="/images/img-9.jpg"
            text="attractions"
            path="/services"
            desc="Lizards are a widespread group of squamate reptiles, with over
          6,000 species, ranging across all continents except Antarctica"
            price="$25 per night"
            category="Cancellation Flexibility"
          />
        </Grid>
      </Grid>
    </>
  );
}

export default ReserveList;
