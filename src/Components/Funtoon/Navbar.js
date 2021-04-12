import React, {useState} from "react"
import {AppBar, Toolbar, Typography, Grid, Hidden, Button, Divider, Box, IconButton, Menu, MenuItem} from '@material-ui/core'
import {makeStyles} from "@material-ui/styles"
import Header from "./images/logo.png"
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import SimpleMenu from "./ResponsiveMenu"

const useStyles = makeStyles({
    topAppBar:{
        backgroundColor:"white",
        padding:"5px 15px"
    },
    logo:{
        width:"100%"
    },
    link:{
        color:"black",
        margin:"5px 10px",
        fontSize:"16px",
        textTransform:"uppercase"

    },
    active:{
        color:"#E96828",
    },
    topBarBtn:{
        borderRadius:"30px",
        borderColor:"#E62E2D",
        color:"#E62E2D",
        padding:"10px 25px",
        margin:"2px 10px",
        '&:hover':{
            backgroundColor:"#E62E2D",
            color:"white"
        }
    },
    dot:{
        fontSize:"20px",
        position:"relative",
        top:"-5px",
        left:"5px"
    },
    topBarBtnAcquista:{
        borderRadius:"30px",
        borderColor:"orange",
        color:"white",
        padding:"10px 35px",
        margin:"2px 10px",
        backgroundColor:"orange",
    },
    topBarHr:{
        backgroundColor:"#D3D3D3", 
        height:"20px",
         display:"inline", 
         padding:"5px 1px",
    },
    searchIcon:{
        color:"blue",
        fontSize:"28px",
        position:"relative",
        top:"10px",
        left:"10px"
    },
    topBarBtnAccedi:{
        borderRadius:"30px",
        borderColor:"orange",
        color:"orange",
        marginLeft:"20px"
    }
})



const TopAppBar = ()=>{

    

    const classes = useStyles()


    return(
        <AppBar position="fixed" className={classes.topAppBar}>
          <Toolbar>
           <Grid container spacing={1} alignItems="center">
             <Grid item lg={2} sm={6} xs={6}>
                <img src={Header} className={classes.logo} />
             </Grid>
             <Hidden smDown>
             <Grid item lg={4}>
                <Typography variant="h6" display="inline" className={`${classes.link} ${classes.active}`}>Home</Typography>
                <Typography variant="h6" display="inline" className={classes.link}>Genere</Typography>
                <Typography variant="h6" display="inline" className={classes.link}>Letti Di Recente</Typography>
                <Typography variant="h6" display="inline" className={classes.link}>Nuovo</Typography>
             </Grid>
                <Box ml="auto">
                <Button variant="outlined" color="default" className={classes.topBarBtn}>
                Fitro Famiglia Off
              </Button>
              <Button variant="outlined" color="default" className={classes.topBarBtnAcquista}>
              Acquista
            </Button>
            <Divider orientation="vertical" className={classes.topBarHr}/>
                <SearchIcon className={classes.searchIcon}/>
                <Button variant="outlined" color="default" className={classes.topBarBtnAccedi}>
              Accedi
            </Button>
                </Box>
                </Hidden>
                <Hidden lgUp>
                <Grid item sm={6} xs={6} style={{textAlign:"center"}}>
                <SimpleMenu />                  
                </Grid>
                </Hidden>
             </Grid>
          </Toolbar>
        </AppBar>
    )
}



export default TopAppBar