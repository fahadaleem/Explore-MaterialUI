import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Box from "@material-ui/core/Box";


const styles = {
    topBar: {
      backgroundColor: "#4E9EC6",
    },
  };
  class TopAppBar extends React.Component {


    render() {
    const {handleLogOut} = this.props;

      const { topBar } = styles;
      return (
        <AppBar position="static" style={topBar}>
          <Toolbar justify="space-between">
            <Typography variant="h5">Admin Panel</Typography>
            <Box ml="auto">
              <Button
                variant="contained"
                color="default"
                startIcon={<ExitToAppIcon />}
                onClick={handleLogOut}
              >
                Logout
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      );
    }
  }
  
  export default TopAppBar;
  
  
