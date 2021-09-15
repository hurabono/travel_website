import React from "react";
import {
  Typography,
  Button,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Card,
} from "@material-ui/core";
import useStyles from "./style";

export default function RoomCard(props) {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={props.src} />
          <CardContent>
            <Typography
              className={classes.title}
              gutterBottom
              variant="h5"
              component="h2"
            >
              {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.desc}
            </Typography>
            <Typography
              className={classes.priceTag}
              gutterBottom
              variant="h6"
              component="h2"
            >
              {props.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
