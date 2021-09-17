import React from 'react'
import { Typography } from "@material-ui/core";
import "./MainBanner.css";
import BannerItem from '../BannerItem';

import AOS from "aos";
import "aos/dist/aos.css";

function MainBanner() {
  AOS.init();

      return (
      <div className="mainBanner__container">
        <div className="mainBanner__wrapper">
        
        <div className="mainBanner_image_section"
         data-aos="fade-right"
         data-aos-duration="2000"
         data-aos-easing="linear"
        >
            <BannerItem src="https://images.unsplash.com/photo-1601939964418-9dfadfda7db8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" />
          </div>
          
          <div className="mainBanner_discribe_section"
           data-aos="fade"
           data-aos-duration="2000"
           data-aos-delay="1000"
           data-aos-easing="linear"
          >
          
          <Typography className="mainBanner_sub_title" variant="subtitle1" component="subtitle1">
             A TEAM OF PROFESSIONAL TRAVEL EXPERTS
            </Typography>
            
            <Typography className="mainBanner_title" variant="h3" component="h2">
            CHOOSE YOUR DESTINATION            
            </Typography>
            
            <p className="mainBanner__description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
       
        
          </div>

        </div>
    </div>
      )
}

export default MainBanner
