import React from "react";
import { Typography, Grid, useMediaQuery } from "@material-ui/core";
import useStyles from "./ThingsTodoStyle";
import "./Carousel.css";
import ThingsTodoCard from "./ThingsTodoCard";
import { Carousel } from "@trendyol-js/react-carousel";

function ThingsTodo() {
  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width:600px)");

  <Typography className={classes.title} variant="h5" component="h2">
    EXPLORE NEAR BY
  </Typography>;

  return (
    <>
      {!isDesktop ? (
        <Grid container className={classes.cardWrapper} maxWidth="sm">
          <Typography className={classes.title} variant="h5" component="h2">
            DISCOVER THINGS TO DO
          </Typography>
          <Grid container justifyContent="center" className={classes.CardItems}>
            <Carousel
              show={1.2}
              slide={1}
              swiping={true}
              responsive={true}
              useArrowKeys={false}
            >
              <ThingsTodoCard
                name="THE CHECK LIST BEFORE YOU LEAVE"
                src="/images/TodoThings1.jpg"
                desc="Lizards are a widespread group of squamate reptiles, with over
       6,000 species, ranging across all continents except Antarctica"
                path="/services"
              />

              <ThingsTodoCard
                name="ONLINE EXPERIENCES"
                src="/images/TodoThings2.jpg"
                desc="Lizards are a widespread group of squamate reptiles, with over
       6,000 species, ranging across all continents except Antarctica"
                path="/services"
              />

              <ThingsTodoCard
                name="POPULAR EVENTS"
                src="/images/TodoThings3.jpg"
                desc="Lizards are a widespread group of squamate reptiles, with over
       6,000 species, ranging across all continents except Antarctica"
                path="/services"
              />
            </Carousel>
          </Grid>
        </Grid>
      ) : (
        <Grid container className={classes.cardWrapper} maxWidth="sm">
          <Typography className={classes.title} variant="h5" component="h2">
            DISCOVER THINGS TO DO
          </Typography>
          <Grid container justifyContent="center" className={classes.CardItems}>
            <ThingsTodoCard
              name="THE CHECK LIST BEFORE YOU LEAVE"
              src="/images/TodoThings1.jpg"
              desc="Lizards are a widespread group of squamate reptiles, with over
       6,000 species, ranging across all continents except Antarctica"
              path="/services"
            />

            <ThingsTodoCard
              name="ONLINE EXPERIENCES"
              src="/images/TodoThings2.jpg"
              desc="Lizards are a widespread group of squamate reptiles, with over
       6,000 species, ranging across all continents except Antarctica"
              path="/services"
            />

            <ThingsTodoCard
              name="POPULAR EVENTS"
              src="/images/TodoThings3.jpg"
              desc="Lizards are a widespread group of squamate reptiles, with over
       6,000 species, ranging across all continents except Antarctica"
              path="/services"
            />
          </Grid>
        </Grid>
      )}
    </>
  );
}

export default ThingsTodo;
