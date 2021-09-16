import React from "react";
import "./TravelBanner.css";
import BannerItem from "./BannerItem";
import { Typography, Button } from "@material-ui/core";

function TravelBanner() {
  return (
    <div className="travel_container">
      <div className="travel_banner__wrapper">
        <div className="travel_discribe_section">
          <Typography className="travel_title" variant="h3" component="h2">
            Do you want to more information for your vacation?
          </Typography>
          <p className="travel__description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </p>

          <Button variant="outlined" size="large">
            CONTACT US!
          </Button>
        </div>

        <div className="travel_image_section">
          <BannerItem src="https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" />
        </div>
      </div>
    </div>
  );
}

export default TravelBanner;
