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
            Rome
          </Typography>
          <Typography
            className="desc_sebtitle"
            variant="subtitle2"
            component="subtitle2"
          >
            Capital of Italy
          </Typography>
          <p className="travel__description">
            Rome is the capital city of Italy. It is also the capital of the
            Lazio region, the centre of the Metropolitan City of Rome, and a
            special comune named Comune di Roma Capitale
          </p>
        </div>
      </div>
    </div>
  );
}

export default BannerRome;
