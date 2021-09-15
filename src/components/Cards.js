import { Typography, useMediaQuery } from "@material-ui/core";
import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "80%",
        right: "14%",
        zIndex: 100,
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "80%",
        left: "9%",
        zIndex: 100,
      }}
      onClick={onClick}
    />
  );
}

function Cards() {
  const isDesktop = useMediaQuery("(min-width:600px)");

  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dots: true,
    infinite: false,
    slidesToShow: 1.2,
    slidesToScroll: 1,
  };

  return (
    <>
      {!isDesktop ? (
        <div className="cards">
          <div className="cards__container">
            <Typography className="title" variant="h5" component="h2">
              POPULAR TRAVEL CITY
            </Typography>

            <div className="cards__wrapper ">
              <ul className="cards__items">
                <Slider {...settings}>
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
                </Slider>
              </ul>
            </div>
          </div>
        </div>
      ) : (
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
      )}
    </>
  );
}

export default Cards;
