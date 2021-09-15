import { Typography } from "@material-ui/core";
import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <div className="cards__container">
        <Typography className="title" variant="h5" component="h2">
          POPULAR TRAVEL CITY
        </Typography>
        <div className="cards__wrapper ">
          <ul className="cards__items">
            <CardItem
              src="/images/img-9.jpg"
              text="Restaurants"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="/images/img-9.jpg"
              text="Hotel"
              label="Adventure"
              path="/services"
            />

            <CardItem
              src="/images/img-9.jpg"
              text="attractions"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="/images/img-9.jpg"
              text="attractions"
              label="Adventure"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
