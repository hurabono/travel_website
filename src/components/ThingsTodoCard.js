import React from "react";
import {
  Typography,
  CardMedia,
  CardContent,
  CardActionArea,
  Card,
} from "@material-ui/core";
import useStyles from "./ThingsTodoStyle";

function ThingsTodoCard(props) {
  const classes = useStyles();

  return (
    <>
      <Card elevation={0} className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={props.src} />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h5">
              {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default ThingsTodoCard;
