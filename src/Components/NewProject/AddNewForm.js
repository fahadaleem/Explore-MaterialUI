import React from "react";
import Container from "@material-ui/core/Container";
import {
  Paper,
  Typography,
  Box,
  TextField,
  Grid,
  Button,
  ButtonGroup,
} from "@material-ui/core";

import Swal from "sweetalert2";

const styles = {
  btnStyles: {
    margin: "0 10px",
    padding: "05px 45px",
    color: "white",
  },
  saveBtn: {
    backgroundColor: "#4E9EC6",
  },
  resetBtn: {
    backgroundColor: "#EB7E7C",
  },
};

class AddNewForm extends React.Component {
  constructor(props) {
    super(props);
    const {EditEmployeFormFields} = this.props;
    this.state = {
      email: EditEmployeFormFields.email,
      name: EditEmployeFormFields.name,
      phone: EditEmployeFormFields.phone,
      salary: EditEmployeFormFields.salary,
    };
  }

  handleSetEmail = (e) => {
    this.setState({
      email: e.target.value,
      name: this.state.name,
      phone: this.state.phone,
      salary: this.state.salary,
    });
  };

  handleSetName = (e) => {
    this.setState({
      email: this.state.email,
      name: e.target.value,
      phone: this.state.phone,
      salary: this.state.salary,
    });
  };
  handleSetPhone = (e) => {
    this.setState({
      email: this.state.email,
      name: this.state.name,
      phone: e.target.value,
      salary: this.state.salary,
    });
  };
  handleSetSalary = (e) => {
    this.setState({
      email: this.state.email,
      name: this.state.name,
      phone: this.state.phone,
      salary: e.target.value,
    });
  };

  handleSaveData = (e) => {
    e.preventDefault();
    const {handleSetData, handleHideForm, isEdit, handleSubmitEditData} = this.props;



    if(isEdit)
    {
      const updatedData = {
        name:this.state.name,
        phone:this.state.phone,
        email:this.state.email,
        salary:this.state.salary
      }
      handleSubmitEditData(updatedData);
      handleHideForm();
      return true;

    }

    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Yes`,
      denyButtonText: `No`,
      customClass: {
        cancelButton: "order-1 right-gap",
        confirmButton: "order-2",
        denyButton: "order-3",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
        handleHideForm();
        handleSetData(this.state);

        this.setState({
          email: "",
          password: "",
          phone: "",
          salary: "",
          name: "",
        });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
        return false;
      }
    });
  };

  render() {
    const {btnStyles, saveBtn, resetBtn} = styles;
    const {handleHideForm} = this.props;
    return (
      <Container maxWidth="sm">
        <Box component={Paper} mt={2} p={2} elevation={3}>
          <form onSubmit={this.handleSaveData}>
            <Typography variant="h4" color="initial" align="center">
              Add New Employee
            </Typography>
            <Grid Container spacing={2}>
              <Grid item>
                <Box py={2}>
                  <TextField
                    id="name"
                    label="Name"
                    variant="outlined"
                    fullWidth={true}
                    className="custom-inputs"
                    value={this.state.name}
                    onChange={this.handleSetName}
                    required
                  />
                </Box>
                <Box py={2}>
                  <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    fullWidth={true}
                    value={this.state.email}
                    onChange={this.handleSetEmail}
                    required

                  />
                </Box>
                <Box py={2}>
                  <TextField
                    id="phone-no"
                    label="Phone No"
                    variant="outlined"
                    fullWidth={true}
                    value={this.state.phone}
                    onChange={this.handleSetPhone}
                    required

                  />
                </Box>
                <Box py={2}>
                  <TextField
                    id="salary"
                    label="Salary"
                    variant="outlined"
                    fullWidth={true}
                    value={this.state.salary}
                    onChange={this.handleSetSalary}
                    required
                    type="number"

                  />
                </Box>
                <Box py={2} align="center">
                  <Button
                    color="primary"
                    variant="contained"
                    style={{...btnStyles, ...saveBtn}}
                    type="submit"
                  >
                    Save
                  </Button>
                  <Button
                    color="default"
                    variant="contained"
                    style={{...btnStyles, ...resetBtn}}
                    onClick={handleHideForm}
                  >
                    Close
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    );
  }
}

export default AddNewForm;
