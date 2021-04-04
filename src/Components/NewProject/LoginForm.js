import React from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import AccountCircle from "@material-ui/icons/AccountCircle";
import TextField from "@material-ui/core/TextField";
import LockIcon from "@material-ui/icons/Lock";
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography'

const styles = {
  topImage: {
    width: "100%",
  },
  loginBtn: {
    backgroundColor: "#4E9EC6",
    padding: "15px 55px",
    fontSize:"1.3rem"
  },
  icon: {
    color: "#4E9EC6",
    fontSize: "1.7rem",
  },
  box:{
      overflow:"hidden"
  }
};

class LoginForm extends React.Component {

   

   

  render() {

    const {errorCode} = this.props

    const {handleLogin} = this.props
    const {setEmail, setPassword} = this.props.handleSetCredentials
    console.log(setEmail)

    const { topImage, loginBtn, icon, box } = styles;

    return (
      <Container spacing={1} maxWidth="sm">
        <form onSubmit={handleLogin}>
          <Paper style={box} elevation={4}>
            <Box >
              <img src="logo.jpg" style={topImage} />
            </Box>
            <Box px={3} pt={2} mx={4}>
            <Typography variant="h6" color="initial">{errorCode===104?"Email or password is incorrect":null}</Typography>
            </Box>
            <Box px={3} my={1}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <AccountCircle size="large" style={icon} />
                </Grid>
                <Grid item lg={11} sm={11} xs={10}>
                  <TextField
                    id="email"
                    label="Email"
                    fullWidth={true}
                    InputLabelProps={{
                      style: {
                        color: "#4E9EC6",
                      },
                    }}
                    onChange={setEmail}
                  />
                </Grid>
              </Grid>
              
              <Box pt={1} mx={4}>
              <Typography variant="h6" color="initial">{errorCode===101 || errorCode===102 ?"Email is required":null}</Typography>
              </Box>
              </Box>

            <Box my={2} px={3}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <LockIcon size="large" style={icon} />
                </Grid>
                <Grid item lg={11} sm={11} xs={10}>
                  <TextField
                    id="password"
                    label="Password"
                    fullWidth={true}
                    InputLabelProps={{
                      style: {
                        color: "#4E9EC6",
                      },
                    }}
                    type="password"
                    onChange={setPassword}
                  />
                </Grid>
              </Grid>
              <Box pt={1} mx={4}>
              <Typography variant="h6" color="initial">{errorCode===101 || errorCode===103 ?"Password is required":null}</Typography>
              </Box>
            </Box>
            <Box align="center" py={2}>
              <Button variant="contained" color="primary" type="submit" style={loginBtn}>
                Login
              </Button>
            </Box>
          </Paper>
        </form>
      </Container>
    );
  }
}

export default LoginForm;
