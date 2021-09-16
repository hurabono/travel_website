import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/Driving - 536.mp4" autoPlay loop muted />
      <h1>ARE YOU READY TO LEAVE?</h1>
      <p>EXPLORE NEAR ME</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn__outline"
          buttonSize="btn__large"
        >
          GET STARTED!
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
