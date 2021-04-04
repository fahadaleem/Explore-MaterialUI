import React from "react";
import "./App.css";
import LoginForm from "./Components/NewProject/LoginForm";
import Box from "@material-ui/core/Box";
import Admin from "./Components/NewProject/Admin";

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
    };
  }

  handleLogin = (e) => {
    e.preventDefault();
    const checkForError = this.handleGenerateError();
    if (!checkForError) {
      this.setState({
        isUserLogin: true,
      });
    }
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
      errorCode:0
    });
  };

  handleSetPassword = (e) => {
    this.setState({
      logins: {
        email: this.state.logins.email,
        password: e.target.value,
      },
      errorCode:0

    });
  };

  render() {
    return (
      <div>
        {this.state.isUserLogin ? (
          <Admin />
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
