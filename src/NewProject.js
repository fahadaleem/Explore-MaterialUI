import React from "react";
import "./App.css";
import LoginForm from "./Components/NewProject/LoginForm";
import Box from "@material-ui/core/Box";
import Admin from "./Components/NewProject/Admin";
import {Route} from "react-router-dom";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import {ContactSupportOutlined} from "@material-ui/icons";
import Swal from "sweetalert2";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4E9EC6",
    },
    secondary: {
      main: green[500],
    },
  },
});

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
      EditEmployeFormFields: {
        sNO: null,
        name: "",
        email: "",
        phone: "",
        salary: "",
      },
      isEdit: false,
      employeeData: [
        {
          sNo: 1,
          name: "Muhammad Fahad Aleem",
          email: "faleem396gmail.com",
          phone: "03162036048",
          salary: 12000,
        },
        {
          sNo: 2,
          name: "Muhammad Fahad Aleem",
          email: "faleem396gmail.com",
          phone: "03162036048",
          salary: 12000,
        },
        {
          sNo: 3,
          name: "Muhammad Fahad Aleem",
          email: "faleem396gmail.com",
          phone: "03162036048",
          salary: 12000,
        },
      ],
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
      employeeData: JSON.parse(window.localStorage.getItem("employeeData"))
        ? JSON.parse(window.localStorage.getItem("employeeData"))
        : [],
    });
  };

  handleSetData = (data) => {
    let id =
      this.state.employeeData.length === 0
        ? 0
        : this.state.employeeData[this.state.employeeData.length - 1].sNo;

    id = parseInt(id) + 1;
    console.log("id", id);
    const saveData = {
      ...data,
      sNo: id,
    };

    this.setState({
      employeeData: [...this.state.employeeData, saveData],
    });
  };

  componentDidUpdate = () => {
    window.localStorage.setItem(
      "employeeData",
      JSON.stringify(this.state.employeeData)
    );
  };

  handleDeleteEmployee = (id) => {
    Swal.fire({
      title: "Are you sure to delete this employee data?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Yes`,
      denyButtonText: `No`,
      customClass: {
        cancelButton: "order-1 right-gap",
        confirmButton: "order-2",
        denyButton: "order-3",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Data Deleted!", "", "success");

        const filteredData = this.state.employeeData.filter((element) => {
          return element.sNo !== id;
        });

        console.log(filteredData);
        this.setState({
          employeeData: filteredData,
        });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
        return false;
      }
    });
  };

  handleEditData = (id) => {
    this.setState({
      isEdit: true,
    });

    let filteredEmployee = this.state.employeeData.filter((element) => {
      return element.sNo === id;
    });

    filteredEmployee = filteredEmployee[0];

    this.setState({
      EditEmployeFormFields: {
        sNO: filteredEmployee.sNo,
        name: filteredEmployee.name,
        email: filteredEmployee.email,
        phone: filteredEmployee.phone,
        salary: filteredEmployee.salary,
      },
    });
  };

  handleSubmitEditData = (updatedData) => {
    const removedIndex = this.state.employeeData.findIndex((element) => {
      return element.sNo === this.state.EditEmployeFormFields.sNO;
    });

    updatedData.sNo = removedIndex + 1;
    const dataElements = this.state.employeeData;
    dataElements.splice(removedIndex, 1, updatedData);
    console.log("updtaed", dataElements);
    this.setState({
      employeeData: [...dataElements],
     
    });



  };

  removedEditTextFieldsData = ()=>{
    this.setState({
      EditEmployeFormFields:{
        sNo:null,
        email:"",
        name:"",
        phone:"",
        salary:""
      }
    })
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          {this.state.isUserLogin ? (
            <Admin
              handleLogOut={this.handleLogOut}
              employeeData={this.state.employeeData}
              handleSetData={this.handleSetData}
              handleDeleteEmployee={this.handleDeleteEmployee}
              EditEmployeFormFields={this.state.EditEmployeFormFields}
              handleEditData={this.handleEditData}
              handleSubmitEditData={this.handleSubmitEditData}
              isEdit={this.state.isEdit}
              removedEditTextFieldsData = {this.removedEditTextFieldsData}
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
      </ThemeProvider>
    );
  }
}

export default NewProject;
