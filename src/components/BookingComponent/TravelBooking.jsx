import React,{ useState }  from 'react';
import {TextField, Toolbar, Typography, Box} from '@material-ui/core';
import Button from '@material-ui/core/Button';

import useStyles from "./styles";
import Search from '@material-ui/icons/Search';
import PersonAdd from '@material-ui/icons/PersonAdd'
import Image from '../../images/booking.jpg';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';

import { useHistory } from "react-router-dom";

function TravelBooking() {
      
      const classes = useStyles();
      const img = {
            backgroundContainer: {
                backgroundImage: `url(${Image})`,
                backgroundPosition:"center",
                backgroundSize:"cover",
            }
        };

        const [searchInput, setSearchInput] = useState('');

        const [numberOfGuests, setNumOfGuests] = useState(1);
        const [startDate, setStartDate] = useState(new Date());
        const [endDate, setEndDate] = useState(new Date());
        
        const selectionRange = {
              startDate: startDate,
              endDate: endDate,
              key: 'selection'
        }

        const handleSelect = (ranges) =>{
                  setStartDate(ranges.selection.startDate);
                  setEndDate(ranges.selection.endDate);
        }

      //   const [state, setState] = useState([
      //       {
      //         startDate: new Date(),
      //         endDate: null,
      //         key: 'selection'
      //       }
      //     ]);


          const resetInput = () =>{
                setSearchInput("");
          };

          const history = useHistory();
          
            function Reserve() {
              history.push({

                  pathname: "/reserve",
                  search: searchInput + startDate.toISOString() + endDate.toISOString()+numberOfGuests,
                  state: { 
                        location: searchInput,
                        startDate: startDate.toISOString(),
                        endDate: endDate.toISOString(),
                        numberOfGuests,
                  }

              });
            }

            
      return (
            <div  id="nearBy">
                  <Box position = "static" className = {classes.backGround} style={img.backgroundContainer}>
                              <Toolbar className = {classes.toolbar}>
                                          <Typography variant ="h2" className = {classes.header} >
                                                      Travel Information
                                          </Typography>
                                          <Box  margin= "14px 0" display = "flex">
                                                <Typography variant ="h3" className={classes.title}>
                                                      Explore new places
                                                </Typography>
                                          </Box>
                                          
                                          <div className = {classes.search}>

                                                <TextField 
                                                id="standard-basic" 
                                                label="Place" 
                                                className={classes.searchInput}
                                                value = {searchInput}
                                                onChange = {(event) => setSearchInput(event.target.value)}
                                                />

                                                <Search className = {classes.searchIcon} />  
                                          </div>
                                          {searchInput && (
                                                <div>
                                                            <DateRange
                                                                  editableDateInputs={true}
                                                                  onChange={handleSelect}
                                                                  moveRangeOnFirstSelection={false}
                                                                  ranges={[selectionRange]}
                                                                  minDate = {new Date()}
                                                                  rangeColors = {["#9775fa"]}
                                                            />

                                                            <div className = {classes.guestCounter}>
                                                                  <div>
                                                                        <h3 className = {classes.guests}> Number of guests</h3>
                                                                  </div>

                                                                  <div className = {classes.guest_icon}>
                                                                              <PersonAdd />
                                                                              <input type="number"
                                                                                          className = {classes.counter}
                                                                                          value = {numberOfGuests}
                                                                                          min = {1}
                                                                                          onChange = { (event) => setNumOfGuests (event.target.value)}
                                                                                          />
                                                                  </div>
                                                            </div>


                                                                  {/* buttons setting */}
                                                                  <div className = {classes.buttonWrapper}>
                                                                        
                                                                              <Button onClick = {resetInput} color="secondary" className = {classes.reserveButton}>
                                                                              CANCEL
                                                                              </Button>
                                                                          

                                                                              <Button  onClick = {Reserve} color="primary" className = {classes.reserveButton}> 
                                                                                    RESERVE
                                                                               </Button>
                                                                  </div>
                                                  </div>
                                                  
                                            )}                       
                              </Toolbar>
                  </Box>
            </div>
      );
}

export default TravelBooking
