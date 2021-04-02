import logo from "./logo.svg";
import "./App.css";
import TopBar from "./Components/TopBar"
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormLabel from '@material-ui/core/FormLabel'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

import LoginForm from "./Components/LoginForm"
import Admin from "./Components/Admin"
import React, {useState} from "react"


class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      isLogin:false,
      isCredentialsMatched:true,
      employeeData:[
        {
          SNO:1,
          Name: "Muhammad Fahad Aleem",
          Email:"faleem396@gmail.com",
          Phone:"03126036048",
          Salary:"123612"
        },
        {
          SNO:2,
          Name: "Muhammad Asaad",
          Email:"asad12@gmail.com",
          Phone:"0126171221",
          Salary:"12362"
        }
      ]
    }
  }

  componentDidMount(){
    this.setState({
      isLogin:window.localStorage.getItem("isLogin")
    })
  }

  componentWillUnmount(){
    
  }


  handleSetLogin = ()=>{
    this.setState({
      isLogin:true,
    })

    window.localStorage.setItem("isLogin","true");
  }

  handleSetIsCredentialsMatched = ()=>{
    this.setState({
      isCredentialsMatched:!this.state.isCredentialsMatched
    })
  }


  render(){
    return (
      <div className="App">
       <TopBar />
      {this.state.isLogin?<Admin employeeData = {this.state.employeeData}/>: <Box my={4}>
      <Container maxWidth="sm">
      <Paper square={true} elevation={3}>
            <Box p={5}>
            <LoginForm handleSetLogin = {this.handleSetLogin} isCredentialsMatched = {this.state.isCredentialsMatched} handleSetIsCredentials = {this.handleSetIsCredentialsMatched}/>
            </Box>
          </Paper>
         </Container>
      </Box>}
      </div>
    );
  }
}





export default App;
