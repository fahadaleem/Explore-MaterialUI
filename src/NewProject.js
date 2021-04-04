import React from "react";
import "./App.css";
import LoginForm from "./Components/NewProject/LoginForm";
import Box from "@material-ui/core/Box";
import Admin from "./Components/NewProject/Admin";
import {Route} from "react-router-dom"


class NewProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logins: {
        email: "",
        password: "",
      },
      isUserLogin: false,
      errorCode: "",
      employeeData:[
          {
              sNo:1,
              name:"Muhammad Fahad Aleem",
              email:"faleem396gmail.com",
              phone:"03162036048",
              salary:12000
              
          },
          {
            sNo:2,
            name:"Muhammad Fahad Aleem",
            email:"faleem396gmail.com",
            phone:"03162036048",
            salary:12000
            
        },
        {
            sNo:3,
            name:"Muhammad Fahad Aleem",
            email:"faleem396gmail.com",
            phone:"03162036048",
            salary:12000
            
        }
      ]
    };
  }

  handleLogin = (e) => {
    e.preventDefault();
    const checkForError = this.handleGenerateError();
    if (!checkForError) {
      this.setState({
        isUserLogin: true,
      });
      window.localStorage.setItem("isUserLogin", true);
    }
  };

  handleLogOut = () => {
    this.setState({
      isUserLogin: false,
    });
    window.localStorage.setItem("isUserLogin", false);
  };

  handleGenerateError = () => {
    if (this.state.logins.email === "" && this.state.logins.password === "") {
      this.setState({
        errorCode: 101,
      });
      return true;
    } else if (this.state.logins.email === "") {
      this.setState({
        errorCode: 102,
      });
      return true;
    } else if (this.state.logins.password === "") {
      this.setState({
        errorCode: 103,
      });
      return true;
    } else if (
      this.state.logins.email !== "admin@gmail.com" ||
      this.state.logins.password !== "admin"
    ) {
      this.setState({
        errorCode: 104,
      });
      return true;
    } else {
      return false;
    }
  };

  handleSetEmail = (e) => {
    this.setState({
      logins: {
        email: e.target.value,
        password: this.state.logins.password,
      },
      errorCode: 0,
    });
  };

  handleSetPassword = (e) => {
    this.setState({
      logins: {
        email: this.state.logins.email,
        password: e.target.value,
      },
      errorCode: 0,
    });
  };

  componentDidMount = () => {
    this.setState({
      isUserLogin: JSON.parse(window.localStorage.getItem("isUserLogin")),
    });
  };

  render() {
    return (
        
      <div>
        {this.state.isUserLogin ? (
          <Admin handleLogOut={this.handleLogOut}
          employeeData={this.state.employeeData}
          />
        ) : (
          <Box my={5} py={4}>
            <LoginForm
              handleLogin={this.handleLogin}
              handleSetCredentials={{
                setEmail: this.handleSetEmail,
                setPassword: this.handleSetPassword,
              }}
              errorCode={this.state.errorCode}
            />
          </Box>
        )}
      </div>
    );
  }
}

export default NewProject;
