import React from "react";
import "../../App.css";
import Banner from "../Banner";
import TravelBooking from "../BookingComponent/TravelBooking";
import Cards from "../Cards";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import Navbar from "../Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Cards />
      <TravelBooking />
      <Banner />
      <Footer />
    </>
  );
}

export default Home;
