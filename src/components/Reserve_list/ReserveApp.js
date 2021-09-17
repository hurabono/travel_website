import React, { useState, useEffect } from "react";
import { buttons } from "./data";
import { getEventData, filterEventList } from "./ReserveService";
import useStyles from "./style";
import {
  Typography,
  Button,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Card,
  Grid,
  ButtonGroup,
  CircularProgress,
} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

import AOS from "aos";
import "aos/dist/aos.css";

function ReserveApp(isLoading) {
  AOS.init();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filtredEvents, setFilteredEvents] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    setFilteredEvents(getEventData());
  }, []);

  function handleEvents(event) {
    let eventType = event.target.value;
    eventType !== "all"
      ? setFilteredEvents(filterEventList(eventType))
      : setFilteredEvents(getEventData());
  }

  const [spinner, setSpinner] = useState(true);

  // It will be executed before rendering

  useEffect(() => {
    setTimeout(() => setSpinner(false), 2500);
  }, []);

  return (
    <>
      {spinner && isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" color="inherit" />
        </div>
      ) : (
        <>
          {buttons &&
            buttons.map((type, index) => (
              <>
                <button
                  className={classes.filters}
                  key={index}
                  value={type.value}
                  onClick={handleEvents}
                >
                  {type.name}
                </button>
              </>
            ))}

          {filtredEvents &&
            filtredEvents.map((props) => (
              <Grid className={classes.cardWrapper}>
                <div className={classes.CardItems}>
                  <Card
                    className={classes.root}
                    data-aos="fade"
                    data-aos-duration="1000"
                    data-aos-easing="linear"
                  >
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
                        <Typography
                          className={classes.describe}
                          variant="p"
                          color="textSecondary"
                          component="p"
                        >
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
                      <Button size="large" color="default">
                        Share
                      </Button>
                      <Button size="large" color="default">
                        Learn More
                      </Button>
                    </CardActions>
                    <CardActions>
                      <ButtonGroup
                        variant="text"
                        color="default"
                        aria-label="text primary button group"
                      >
                        <Button>
                          <FacebookIcon />
                        </Button>
                        <Button>
                          <InstagramIcon />
                        </Button>
                        <Button>
                          <TwitterIcon />
                        </Button>
                      </ButtonGroup>
                    </CardActions>
                  </Card>

                  <Card
                    className={classes.card2}
                    data-aos="fade"
                    data-aos-duration="1000"
                    data-aos-delay="500"
                    data-aos-easing="linear"
                  >
                    <CardContent>
                      <Typography
                        className={classes.title}
                        gutterBottom
                        variant="h5"
                        component="h2"
                      >
                        Address
                      </Typography>
                      <Typography
                        className={classes.address}
                        variant="p"
                        gutterBottom
                        color="textSecondary"
                        component="h4"
                      >
                        {props.address}
                      </Typography>
                      <h3 className={classes.title}>About the Place</h3>

                      <CardMedia
                        className={classes.media}
                        image={props.media}
                      />

                      <Typography
                        className={classes.review}
                        variant="p"
                        color="textSecondary"
                        component="p"
                      >
                        {props.review}
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              </Grid>
            ))}
        </>
      )}
    </>
  );
}

export default ReserveApp;
