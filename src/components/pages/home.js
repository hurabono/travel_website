import React from "react";
import "../../App.css";
import Banner from "../Banner";
import TravelBooking from "../BookingComponent/TravelBooking";
import Cards from "../Cards";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import Navbar from "../Navbar";
import ThingsTodo from "../ThingsTodo";
import ThreeCards from "../ThreeCards";

function Home() {
  window.scrollTo(0, 0);

  return (
    <>
      <Navbar />
      <HeroSection />
      <ThreeCards />
      <Cards />
      <TravelBooking />
      <Banner />
      <ThingsTodo />
      <Footer />
    </>
  );
}

export default Home;
