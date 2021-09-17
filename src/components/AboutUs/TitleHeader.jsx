import React from "react";
import "./titleHeader.css";
import { Typography } from "@material-ui/core";

import AOS from "aos";
import "aos/dist/aos.css";



function TitleHeader() {
  AOS.init();

  return (
    <div className="aboutUs__container"        
     data-aos="fade"
    data-aos-duration="2000"
    data-aos-easing="linear">
      <div className="aboutUs__wrapper">
        <Typography className="aboutUs_suitIcon" variant="h3" component="h2">
          <i class="fas fa-suitcase"></i>
        </Typography>
        <Typography className="aboutUs_title" variant="h4" component="h4">
          About us
        </Typography>
        <Typography
          className="aboutUs_sebtitle"
          variant="subtitle2"
          component="subtitle2"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>
      </div>
    </div>
  );
}

export default TitleHeader;
