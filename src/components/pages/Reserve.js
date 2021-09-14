import React, { useEffect } from "react";
import "../../App.css";
import TravelBooking from "../BookingComponent/TravelBooking";
import Footer from "../Footer";
import Navbar from "../Navbar";
import ReserveHeader from "../Reserve_header/ReserveHeader";

function Reserve() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <ReserveHeader />
      <Footer />
    </>
  );
}

export default Reserve;
