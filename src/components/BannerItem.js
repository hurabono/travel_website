import React from "react";

function BannerItem(props) {
  return (
    <div className="image_wrapper">
      <img className="banner__item__img" alt="covid-banner" src={props.src} />
    </div>
  );
}

export default BannerItem;
