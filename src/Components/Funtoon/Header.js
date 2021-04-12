import React from "react"
import HeaderImage from "./images/devilman.jpg"
import {Container, Paper, Box, Typography, Chip, Grid} from '@material-ui/core'
import {makeStyles} from "@material-ui/styles"

const useStyles = makeStyles({
    paper:{
        padding:"0 !important",
        marginTop:"80px",
        height:"400px",
        borderRadius:"10px",
        overflow:"hidden",
        backgroundImage:`url(${HeaderImage})`,
        backgroundPosition:"Center",
        backgroundSize:"cover",
        padding:"5px 20px"
    },
    headerImage:{
        width:"100%",
        height:"100%"
    },
    movieName:{
        color:"white",
        fontSize:"4rem",
        fontWeight:"bold",
        letterSpacing:"5px"
    },
    movieDescription:{
        position:"relative",
        bottom:"-250px",
    },
    category:{
        color:"white",
        margin:"5px 10px"
    },
    chip:{
        backgroundColor:"orange",
        color:"white",
        margin:"0 5px"
    }
})


const Header = ()=>{

    const classes = useStyles()

    return(
        <Container maxWidth="lg" component={Paper} className={classes.paper}>
        <Box className={classes.movieDescription}>
            <Grid container>
            <Grid item lg={12} xs={12} sm={12}><Typography variant="h4" color="initial" className={classes.movieName}>Devilman</Typography></Grid>
            <Grid item lg={2}>
            <Typography variant="h5" color="initial" display="inline" className={classes.category}>Cat A</Typography>
            <Typography variant="h5" color="initial" display="inline" className={classes.category}>Cat B</Typography>
            </Grid>
            <Grid item lg={6} xs={12} sm={12}>
            <Chip label="END" className={classes.chip}  />
            <Chip label="UP" className={classes.chip} />
            <Chip label="ACTION" className={classes.chip}/>
            </Grid>
            </Grid>
        </Box>
        </Container>
    )
}

export default Header

