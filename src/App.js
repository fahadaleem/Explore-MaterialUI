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
      ]
    }
  }



  handleSetemployeeDetails = (data)=>{
    this.setState({
      employeeData:[...this.state.employeeData,data]
    })
   
    return true;
  }

  componentDidMount(){
    this.setState({
      isLogin:window.localStorage.getItem("isLogin"),
      employeeData:JSON.parse(window.localStorage.getItem("employeeData"))?JSON.parse(window.localStorage.getItem("employeeData")):[]
    })




  }

  componentDidUpdate(){
    const savedData = JSON.stringify(this.state.employeeData)
    window.localStorage.setItem("employeeData", savedData)
  }

  handleSetLogin = ()=>{
    this.setState({
      isLogin:true,
    })

    window.localStorage.setItem("isLogin",true);

  }

  handleLogOut = ()=>{
    this.setState({
      isLogin:false
    })
    window.localStorage.setItem("isLogin",false);


  }

  handleSetIsCredentialsMatched = ()=>{
    this.setState({
      isCredentialsMatched:!this.state.isCredentialsMatched
    })
  }


  handleGenerateId = ()=>{

    if(this.state.employeeData.length===0)
    {
      return 1
    }

    const lastSNO = this.state.employeeData[this.state.employeeData.length-1].SNO;
    return lastSNO+1;
  }


  handleEditDetails = (id)=>{
   const DataObj =  this.state.employeeData.filter(data=>{
      if(data.SNO)
      {
        return {
          name:data.Name,
          email:data.Email,
          phone:data.Phone,
          salary:data.Salary
        }
      }
    })

    
  }


  render(){
    return (
      <div className="App">
       <TopBar handleLogOut={this.handleLogOut}/>
      {this.state.isLogin?<Admin employeeData = {this.state.employeeData} handleSetemployeeDetails={this.handleSetemployeeDetails} handleGenerateId={this.handleGenerateId}/>: <Box my={4}>
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
