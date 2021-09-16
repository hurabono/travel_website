import React from "react";
import "./BannerNyc.css";
import { Typography } from "@material-ui/core";

function BannerRome() {
  return (
    <div className="desc__container">
      <div className="desc__wrapper">
        <div className="desc_discribe_section">
          <Typography className="desc_banner_pin" variant="h3" component="h2">
            <i class="fas fa-map-marker-alt"></i>
          </Typography>
          <Typography className="desc_title" variant="h3" component="h2">
            İstanbul
          </Typography>
          <Typography
            className="desc_sebtitle"
            variant="subtitle2"
            component="subtitle2"
          >
            City in Turkey
          </Typography>
          <p className="travel__description">
            Istanbul is a major city in Turkey that straddles Europe and Asia
            across the Bosphorus Strait. Its Old City reflects cultural
            influences of the many empires that once ruled here. In the
            Sultanahmet district, the open-air, Roman-era Hippodrome was for
            centuries the site of chariot races, and Egyptian obelisks also
            remain. The iconic Byzantine Hagia Sophia features a soaring
            6th-century dome and rare Christian mosaics. ― Google
          </p>
        </div>
      </div>
    </div>
  );
}

export default BannerRome;
