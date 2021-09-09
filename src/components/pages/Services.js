import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import "../../App.css";

import { getPlacesData, getWeatherData } from "../../api";

//IMPORT COMPONENT
import Header from "../Service_header/Header";
import List from "../Service_List/List";
import Map from "../Service_Map/Map";
import Navbar from "../Navbar";
import Footer from "../Footer";

function Services() {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState("");

  const [places, setPlaces] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  window.scrollTo(0, 0);

  // lat, lng geolocation setting
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating > rating);

    setFilteredPlaces(filteredPlaces);
  }, [rating]);

  // Loading and getting place the data around sw, and ne
  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      setIsLoading(true);

      //placing getWeatherData
      getWeatherData(coordinates.lat, coordinates.lng).then((data) => {
        setWeatherData(data);
      });

      //placing getPlaceData
      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
        setIsLoading(false);
        setFilteredPlaces([]);
      });
    }
  }, [type, bounds]);

  return (
    <>
      <Header setCoordinates={setCoordinates} />
      <Navbar />
      <Grid container spacing={0} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
            weatherData={weatherData}
          />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default Services;
