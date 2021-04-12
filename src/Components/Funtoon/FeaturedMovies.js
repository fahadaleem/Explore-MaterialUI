import React from "react"
import {Container, Paper, Typography, Grid } from '@material-ui/core'
import Explosion from "./images/explosion.svg"
import {makeStyles} from "@material-ui/styles"


const useStyles = makeStyles({
    paper:{
        backgroundColor:"transparent",
        marginTop:"40px"
    },
    link:{
        color:"orange",
        textDecoration:"none"
    }
})



const FeaturedMovies = ()=>{

    const classes = useStyles()

    return(
        <Container maxWidth="lg" className={classes.paper}>
         <Grid container alignItems="center">
            <Grid item lg={11}>
            <img src={Explosion} />
            <Typography variant="h4" color="initial" display="inline">NOVITA</Typography>
            </Grid>
            <Grid item lg={1}>
                <a href="#" className={classes.link}>Vedi tutti</a>
            </Grid>
         </Grid>
        </Container>
    )
}

export default FeaturedMovies