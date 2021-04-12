import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';

import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton'
import {makeStyles} from "@material-ui/styles"
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles({
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
        left:"10px"
    },
    topBarBtnAccedi:{
        borderRadius:"30px",
        borderColor:"orange",
        color:"orange",
        marginLeft:"20px"
    }
})



export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const classes = useStyles()


  return (
    <div>
        <IconButton aria-label="menu-btn" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          <MenuIcon />
        </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
      <Typography variant="h6" display="inline" className={`${classes.link} ${classes.active}`}>Home</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <Typography variant="h6" display="inline" className={classes.link}>Genere</Typography>
        
        </MenuItem>


        <MenuItem onClick={handleClose}>
        <Typography variant="h6" display="inline" className={classes.link}>Letti Di Recente</Typography>
        </MenuItem>

        <MenuItem onClick={handleClose}>
        <Typography variant="h6" display="inline" className={classes.link}>Nuovo</Typography>
        </MenuItem>

        <MenuItem onClick={handleClose}>
        <Button variant="outlined" color="default" className={classes.topBarBtn}>
                Fitro Famiglia Off
              </Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <Button variant="outlined" color="default" fullWidth className={classes.topBarBtnAcquista}>
        Acquista
      </Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <SearchIcon className={classes.searchIcon}/>
        <Button variant="outlined" color="default" fullWidth className={classes.topBarBtnAccedi}>
      Accedi
    </Button>
        </MenuItem>

      </Menu>
    </div>
  );
}
