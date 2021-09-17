import React from 'react'
import { Box, Paper, Grid,styled,Container,CardMedia,Typography,Button  } from '@material-ui/core';
import "./AboutusGrid.css";

function AboutusGrid() {
      const Item = styled(Paper)(({ theme }) => ({
            ...theme.typography.body2,
            padding: theme.spacing(0),
            textAlign: 'left',
            color: theme.palette.text.secondary,
            
          }));
      return (
            <>
                  <Container className="GridContainer" maxWidth="lg">
                        <Box>
                        <Grid container spacing={4}>
                        <Grid item xs={4}>
                        <Item  elevation={0}     
                        data-aos="fade"
                        data-aos-duration="2000"
                        data-aos-easing="linear">
                        <CardMedia
                        component="img"     
                        height="278"
                        image="https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                        alt="travelImg1"
                        />
                        </Item>
                        </Grid>

                        <Grid item xs={4}>
                        <Item elevation={2} className="typing_box"
                        data-aos="fade"
                        data-aos-delay="2500"
                        data-aos-duration="2000"
                        data-aos-easing="linear">
                        <Typography className = "GridTitle" variant="h4" gutterBottom component="p">
                        HUNDREADS OF AMAZING DESTINATIONS
                        </Typography>
                   
                        <Box className="button_part">
                        <Button size="large" className="GridButton" >contact us</Button>
                        </Box>
                        </Item>
                        </Grid>

                        <Grid item xs={4}>
                        <Item  elevation={0} 
                        data-aos="fade"
                        data-aos-delay="500"
                        data-aos-duration="2000"
                        data-aos-easing="linear"
                        >
                        <CardMedia
                        component="img"
                        height="278"
                        image="https://images.unsplash.com/photo-1533105079780-92b9be482077?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                        alt="travelImg2"
                        />
                        </Item>
                        </Grid>
                        <Grid item xs={4}>
                        <Item  elevation={0} 
                        data-aos="fade"
                        data-aos-delay="1000"
                        data-aos-duration="2000"
                        data-aos-easing="linear"
                        >
                        <CardMedia
                        component="img"
                        height="278"
                        image="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                        alt="travelImg3"
                        />
                        </Item>
                        </Grid>
                        <Grid item xs={4}>
                        <Item  elevation={0} 
                        data-aos="fade"
                        data-aos-delay="1500"
                        data-aos-duration="2000"
                        data-aos-easing="linear"
                        >
                        <CardMedia
                        component="img"
                        height="278"
                        image="https://images.unsplash.com/photo-1527151977613-a89904713c47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                        alt="travelImg4"
                        />
                        </Item>
                        </Grid>
                        <Grid item xs={4}>
                        <Item  elevation={0} 
                        data-aos="fade"
                        data-aos-delay="2000"
                        data-aos-duration="2000"
                        data-aos-easing="linear">
                        <CardMedia
                        component="img"
                        height="278"
                        image="https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                        alt="travelImg5"
                        />
                        </Item>
                        </Grid>
                        </Grid>
                  </Box>
            </Container>

            </>
      )
}

export default AboutusGrid
