import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/Driving - 536.mp4" autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>what are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn__outline"
          buttonSize="btn__large"
        >
          GET STARTED!
        </Button>

        <Button
          className="btns"
          buttonStyle="btn__primary"
          buttonSize="btn__large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
