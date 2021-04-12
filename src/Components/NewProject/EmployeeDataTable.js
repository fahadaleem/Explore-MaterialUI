import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const styles = {
  thead: {
    backgroundColor: "#4E9EC6",
  },
  tableCellData: {
    color: "white",
    fontWeight: "bold",
  },
};

class EmployeeDataTable extends React.Component {
  render() {
    const {employeeData, handleDeleteEmployee, handleEditData, handleOpenAddNewForm} = this.props;

    const {thead, tableCellData} = styles;

    return (
      <TableContainer>
        <Table>
          <TableHead style={thead}>
            <TableRow>
              <TableCell style={tableCellData}>S.NO</TableCell>
              <TableCell style={tableCellData}>Name</TableCell>
              <TableCell style={tableCellData}>Email</TableCell>
              <TableCell style={tableCellData}>PhoneNo</TableCell>
              <TableCell style={tableCellData}>Salary</TableCell>
              <TableCell style={tableCellData}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employeeData.map((data, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{data.sNo}</TableCell>
                  <TableCell>{data.name}</TableCell>
                  <TableCell>{data.email}</TableCell>
                  <TableCell>{data.phone}</TableCell>
                  <TableCell>{data.salary}</TableCell>
                  <TableCell>
                    <IconButton onClick={()=>{
                        handleDeleteEmployee(data.sNo)
                    }}>
                      <DeleteIcon />
                    </IconButton>
                    <IconButton onClick={()=>{
                      handleOpenAddNewForm()
                      handleEditData(data.sNo)
                    }}>
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default EmployeeDataTable;
