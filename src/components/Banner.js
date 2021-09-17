import React from "react";
import "./banner.css";
import BannerItem from "./BannerItem";
import { Typography } from "@material-ui/core";

import AOS from "aos";
import "aos/dist/aos.css";

function Banner() {
  AOS.init();

  return (
    <div className="container">
      <div className="banners__container">
        <Typography className="title" variant="h5" component="h2">
          Covid 19 news and information
        </Typography>
        <div className="banner__wrapper">
          <div
            className="discribe_section"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-easing="linear"
          >
            <Typography className="container_title" variant="h3" component="h2">
              Covid 19 news and information
            </Typography>
            <p className="covid__description">
              Travellers entering Canada, regardless of citizenship, must follow
              testing and quarantine requirements to keep everyone safe. Under
              certain conditions, you may be exempt from some requirements.
              <br />
              Youmust:
            </p>
            <ol>
              <li>wear a mask at all times when in public spaces</li>
              <li>
                maintain a list of all close contacts for your first 14 days
              </li>
              <li>monitor yourself for signs and symptoms of COVID-19</li>
            </ol>
          </div>

          <div
            className="image_section"
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="1000"
            data-aos-easing="linear"
          >
            <BannerItem src="/images/Covid.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
