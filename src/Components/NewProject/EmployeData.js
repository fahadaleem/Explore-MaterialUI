import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import EmployeeDataTable from "./EmployeeDataTable";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import EmployeeDetailsTable from "../EmployeeDetailsTable"

const styles = {
    addNewBtn:{
        backgroundColor:"#4E9EC6",
        color:"white"
    }
}


class EmployeeData extends React.Component {
  render() {

    const {employeeData, handleOpenAddNewForm} = this.props;
    const {addNewBtn} = styles

    return (
      <Container maxWidth="lg">
        <Box component={Paper} p={2} my={3}>
          <Box pt={2}>
            <Typography variant="h4" color="initial" align="center">
              Employees Details
            </Typography>
          </Box>
          <Box py={2}>
            <Button
              variant="contained"
              startIcon={<AddIcon size="lg" />}
              style={addNewBtn}
              onClick={handleOpenAddNewForm}
            >
              Add New Employee
            </Button>
          </Box>
            <EmployeeDataTable employeeData={employeeData}/>
          </Box>
      </Container>
    );
  }
}

export default EmployeeData;
