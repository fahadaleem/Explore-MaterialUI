import React from "react"
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

class TopBar extends React.Component{


  handleLogOutAdmin = ()=>{
    const {handleLogOut} = this.props;

    handleLogOut();
  }

  render(){


    return (
      <div className="App">
        <AppBar position="static" color="secondary">
          <Toolbar>
            <IconButton aria-label="" color="inherit">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">Admin Panel</Typography>
               <Box ml="auto">
               <Button color="inherit" size="large" onClick={this.handleLogOutAdmin}>Logout</Button>
               </Box>
          </Toolbar>
         
        </AppBar>
      </div>)
  }
}



  export default TopBar;
  