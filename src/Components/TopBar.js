import React from "react"
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";


const TopBar = ()=> {
    return (
      <div className="App">
        <AppBar position="static" color="secondary">
          <Toolbar>
            <IconButton aria-label="" color="inherit">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">Admin Panel</Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  
  export default TopBar;
  