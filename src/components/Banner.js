import React from "react";
import { Button } from "./Button";
import "./banner.css";
import BannerItem from "./BannerItem";

function Banner() {
  return (
    <div>
      <div className="banners__container">
        <h1>Covid 19 news and information</h1>

        <div className="banner__wrapper">
          <div className="discribe_section">
            <h2>title section</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <Button style={{ color: "red" }}>View details</Button>
          </div>

          <div className="image_section">
            <BannerItem src="/images/img-9.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
