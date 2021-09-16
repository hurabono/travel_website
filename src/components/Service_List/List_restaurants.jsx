import React, {useState, useEffect, createRef} from 'react'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select,Box } from '@material-ui/core';
import useStyles from './styles';

import PlaceDetails from '../Service_PlaceDetails/PlaceDetails';


function List({places, childClicked, isLoading, type, setType, rating, setRating}) {
      const classes = useStyles();
      const [elementRef, setElementRef] = useState([]);

      useEffect(() => {
           const refs = Array(places?.length).fill().map( ( _ , i ) => elementRef[i] || createRef());
            setElementRef(refs);
      }, [places])


      return (
            <div className = {classes.container}>
                  <Typography variant = "h4">
                        Find the favourite Resaurents around you
                  </Typography>
                        {
                              isLoading ?(
                                    <div className = {classes.loading}>
                                                <CircularProgress size = "5rem" />
                                    </div>
                              ) : (
                        <>
                

                  <FormControl className = {classes.formControl}>
                              <InputLabel> Rating </InputLabel>
                              <Select value ={rating} onChange = {e => setRating(e.target.value)} >
                                    <MenuItem value= {0}> View All </MenuItem>
                                    <MenuItem value= {3}> Above 3.0 </MenuItem>
                                    <MenuItem value= {4}> Above 4.0 </MenuItem>
                              </Select>
                  </FormControl>
                  <Grid container spacing ={3} className={classes.list}>
                        {places?.map ( (place, i) => (
                              <Grid ref={elementRef[i]} item key ={i} xs={12} >
                                    <PlaceDetails 
                                    place = {place} 
                                    selected = {Number(childClicked) === i}
                                    refProp = {elementRef[i]}
                                    />
                              </Grid>
                        ) )}
                  </Grid>
                  </>
                   )}
            </div>
      )
}

export default List
