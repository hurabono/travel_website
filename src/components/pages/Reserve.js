import React, { useEffect } from "react";
import "../../App.css";
import Footer from "../Footer";
import Navbar from "../Navbar";
import ReserveHeader from "../Reserve_header/ReserveHeader";
import ReserveApp from "../Reserve_list/ReserveApp";

function Reserve() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <ReserveHeader />
      <ReserveApp />
      <Footer />
    </>
  );
}

export default Reserve;
