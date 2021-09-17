import React, {useEffect} from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import TitleHeader from "./TitleHeader";

import { Box} from '@material-ui/core';
import MainBanner from "./MainBanner";
import AboutusGrid from "./AboutusGrid";

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const bg = {
    backgroundContainer: {
      background:"#fafafa",
    }
};

  return (
    <>
    <Box style={bg.backgroundContainer}>
    <Navbar/>
    <TitleHeader />
    <MainBanner/>
    <AboutusGrid />
    <Footer />
    </Box>
    </>
  );
}

export default AboutUs;
