import React from "react";
import "./BannerNyc.css";
import { Typography } from "@material-ui/core";

function BannerNyc() {
  return (
    <div className="desc__container">
      <div className="desc__wrapper">
        <div className="desc_discribe_section">
          <Typography className="desc_banner_pin" variant="h3" component="h2">
            <i class="fas fa-map-marker-alt"></i>
          </Typography>
          <Typography className="desc_title" variant="h3" component="h2">
            New York
          </Typography>
          <Typography
            className="desc_sebtitle"
            variant="subtitle2"
            component="subtitle2"
          >
            City in New York State
          </Typography>
          <p className="travel__description">
            New York City comprises 5 boroughs sitting where the Hudson River
            meets the Atlantic Ocean. At its core is Manhattan, a densely
            populated borough that’s among the world’s major commercial,
            financial and cultural centers. Its iconic sites include skyscrapers
            such as the Empire State Building and sprawling Central Park.
            Broadway theater is staged in neon-lit Times Square. ― Google
          </p>
        </div>
      </div>
    </div>
  );
}

export default BannerNyc;
