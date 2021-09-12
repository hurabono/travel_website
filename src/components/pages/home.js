import React from "react";
import "../../App.css";
import Banner from "../Banner";
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
      <Banner />
      <Footer />
    </>
  );
}

export default Home;
