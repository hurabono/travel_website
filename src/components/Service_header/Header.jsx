import React, {useState} from 'react';
import { Autocomplete } from '@react-google-maps/api';
import {AppBar, Toolbar, Typography, InputBase, Box} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from "./styles";


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
                background:"#4dabf7"
            }
        };


      return (
            <div >
                  <Box position = "static"  style={img.backgroundContainer}>
                              <Toolbar className = {classes.toolbar}>
                                          <Typography variant ="h5" className = {classes.title}>
                                                      Travel Information
                                          </Typography>
                                          <Box  margin= "12px 0" display = "flex">
                                                <Typography variant ="h6" className={classes.title}>
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
