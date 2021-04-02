import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import EmployeeDetailsTable from "./EmployeeDetailsTable";
import AddDetailsForm from "./AddDetailsForm"
import Typography from '@material-ui/core/Typography'


class Admin extends React.Component {
  render() {
    const { employeeData } = this.props;
    console.log(employeeData);
    return (
      <Container maxWidth="lg">
        <Box my={2}>
          <Grid container spacing={3}>
            <Grid item lg={6} xs={12}>
              <EmployeeDetailsTable employeeData={employeeData} />
            </Grid>
            <Grid item lg={6} xs={12}>
              <Box component={Paper} p={2} elevation={3}>
              <Typography variant="h4" color="initial" align="center">Add Details Of Employee</Typography>
              <AddDetailsForm />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    );
  }
}

export default Admin;
