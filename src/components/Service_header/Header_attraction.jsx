import React, {useState} from 'react';
import { Autocomplete } from '@react-google-maps/api';
import {Toolbar, Typography, InputBase, Box} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from "./styles";
import Image  from '../../images/Attraction.jpg';

function Header({setCoordinates}) {
      const [autocomplete, setAutocomplete] = useState(null);
      const classes = useStyles();

      const onLoad = (autoComplete)=>{
                  setAutocomplete(autoComplete);
      }

      const onPlaceChanged = () =>{
            const lat = autocomplete.getPlace().geometry.location.lat();
            const lng = autocomplete.getPlace().geometry.location.lng();

            setCoordinates({lat,lng});
      }
 
      const img = {
            backgroundContainer: {
                backgroundImage: `url(${Image})`,
                backgroundPosition:"center",
                backgroundSize:"cover",
               
            }
        };



      return (
            <div >
                  <Box>
                              <Toolbar className = {classes.toolbar} style={img.backgroundContainer}>
                                          <Typography variant ="h5" className = {classes.title}>
                                                      Where do you want to go?
                                          </Typography>
                                          <Box   display = "flex" className = {classes.searchBox}>
                                                <Typography variant ="h6" className={classes.subtitle}>
                                                      Explore new places
                                                </Typography>
                                          <Autocomplete onLoad = {onLoad} onPlaceChanged = {onPlaceChanged}>
                                                <div className = {classes.search}>
                                                <div className={classes.searchIcon}>
                                                       <SearchIcon />
                                                </div>
                                                      <InputBase 
                                                      placeholder="Search…" 
                                                      classes={{ root: classes.inputRoot, input: classes.inputInput }} />
                                                </div>
                                          </Autocomplete>
                                          </Box>
                              </Toolbar>
                  </Box>
            </div>
      );
}

export default Header
