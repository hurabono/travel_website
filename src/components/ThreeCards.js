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

function ThreeCards() {
  const classes = useStyles();

  <Typography className={classes.title} variant="h5" component="h2">
    EXPLORE NEAR BY
  </Typography>;

  return (
    <>
      <Grid container className={classes.cardWrapper} maxWidth="sm">
        <Typography className={classes.title} variant="h5" component="h2">
          EXPLORE NEAR BY
        </Typography>

        <Grid container justifyContent="center" className={classes.CardItems}>
          <Card elevation={0} className={classes.root} square>
            <CardMedia
              className={classes.media}
              image="../images/img-9.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="large" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>

          <Card elevation={0} className={classes.root} square>
            <CardMedia
              className={classes.media}
              image="../images/img-9.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="large" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>

          <Card elevation={0} className={classes.root} square>
            <CardMedia
              className={classes.media}
              image="../images/img-9.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="large" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default ThreeCards;
