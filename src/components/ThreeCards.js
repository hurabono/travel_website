import React from "react";
import {
  Typography,
  Button,
  CardMedia,
  CardContent,
  CardActions,
  Card,
  Grid,
} from "@material-ui/core";
import useStyles from "./ThreeCardsStyle";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function ThreeCards() {
  AOS.init();
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        className={classes.cardWrapper}
        maxWidth="sm"
        data-aos="fade"
        data-aos-duration="2000"
        data-aos-easing="linear"
      >
        <Typography className={classes.title} variant="h5" component="h2">
          EXPLORE NEAR BY
        </Typography>

        <Grid container justifyContent="center" className={classes.CardItems}>
          <Card elevation={0} className={classes.root} square>
            <CardMedia
              className={classes.media}
              image="../images/Card1.jpg"
              title="Contemplative Reptile"
            />
            <CardContent className={classes.cardTyping}>
              <Typography gutterBottom variant="h5" component="h2">
                RESTAURANTS
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="./Restaurants">
                <Button
                  className={classes.CardButton}
                  size="large"
                  color="primary"
                >
                  Lrearn more
                </Button>
              </Link>
            </CardActions>
          </Card>

          <Card elevation={0} className={classes.root} square>
            <CardMedia
              className={classes.media}
              image="../images/Card2.jpg"
              title="Contemplative Reptile"
            />
            <CardContent className={classes.cardTyping}>
              <Typography gutterBottom variant="h5" component="h2">
                HOTEL
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="./Hotel">
                <Button
                  className={classes.CardButton}
                  size="large"
                  color="primary"
                >
                  Lrearn more
                </Button>
              </Link>
            </CardActions>
          </Card>

          <Card elevation={0} className={classes.root} square>
            <CardMedia
              className={classes.media}
              image="../images/Card3.jpg"
              title="Contemplative Reptile"
            />
            <CardContent className={classes.cardTyping}>
              <Typography gutterBottom variant="h5" component="h2">
                ATTRACTIONS
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="./Attraction">
                <Button
                  className={classes.CardButton}
                  size="large"
                  color="primary"
                >
                  Lrearn more
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default ThreeCards;
