import React from "react";
import "./BannerNyc.css";
import { Typography } from "@material-ui/core";

function BannerBarcelona() {
  return (
    <div className="desc__container">
      <div className="desc__wrapper">
        <div className="desc_discribe_section">
          <Typography className="desc_banner_pin" variant="h3" component="h2">
            <i class="fas fa-map-marker-alt"></i>
          </Typography>
          <Typography className="desc_title" variant="h3" component="h2">
            Barcelona
          </Typography>
          <Typography
            className="desc_sebtitle"
            variant="subtitle2"
            component="subtitle2"
          >
            City in Spain
          </Typography>
          <p className="travel__description">
            Barcelona, the cosmopolitan capital of Spain’s Catalonia region, is
            known for its art and architecture. The fantastical Sagrada Família
            church and other modernist landmarks designed by Antoni Gaudí dot
            the city. Museu Picasso and Fundació Joan Miró feature modern art by
            their namesakes. City history museum MUHBA, includes several Roman
            archaeological sites. ― Google
          </p>
        </div>
      </div>
    </div>
  );
}

export default BannerBarcelona;
