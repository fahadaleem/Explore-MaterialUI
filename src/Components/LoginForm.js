import React from "react";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowRightRoundedIcon from "@material-ui/icons/KeyboardArrowRightRounded";
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles({
    errorMessage:{
        color:"red"
    }
})





class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    

  }


  handleInputEmail = (e)=>{
    this.setState({email:e.target.value})
  }
  handleInputPassword = (e)=>{
    this.setState({password:e.target.value})
  }

  handleFormSubmit = (e)=>{
      e.preventDefault();
    const {email, password} = this.state;

    if(email==="admin@gmail.com" && password==="admin")
    {
        alert("login")
        this.props.handleSetLogin();
    }
    
    this.props.handleSetIsCredentials();
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <Box>
          <Typography variant="h4" color="secondary" align="center">
            Login Here!
          </Typography>
          <Box>
            {this.props.isCredentialsMatched?"":<Typography variant="h6" color="initial">Email and Password not matched</Typography>}
          </Box>
        </Box>
        <Box my={2}>
          <TextField
            id="email"
            label="Email"
            value={this.state.email}
            onChange={this.handleInputEmail}
            fullWidth={true}
            color="secondary"
            type="email"
            required={true}
          />
        </Box>
        <Box my={2}>
          <TextField
            id="password"
            label="Password"
            value={this.state.password}
            onChange={this.handleInputPassword}
            fullWidth={true}
            color="secondary"
            type="password"
            required={true}
          />
        </Box>
        <Box mt={4}>
          <Button
            variant="contained"
            color="secondary"
            endIcon={<KeyboardArrowRightRoundedIcon />}
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </form>
    );
  }
}

export default LoginForm;
