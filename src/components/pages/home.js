import React from "react";
import "../../App.css";
import Banner from "../Banner";
import TravelBooking from "../BookingComponent/TravelBooking";
import Cards from "../Cards";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import Navbar from "../Navbar";
import ThreeCards from "../ThreeCards";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ThreeCards />
      <Cards />
      <TravelBooking />
      <Banner />
      <Footer />
    </>
  );
}

export default Home;
