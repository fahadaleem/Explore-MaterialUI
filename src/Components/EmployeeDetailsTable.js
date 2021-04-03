import React from "react"
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button'
import EditIcon from '@material-ui/icons/Edit';


class EmployeeDetailsTable extends React.Component{


    handleDeleteEmploye = (id)=>{
        return id;
    }


    render(){
        const {employeeData} = this.props;
       return(
        <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>S.NO</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>PhoneNo</TableCell>
                    <TableCell>Salary</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {employeeData.map((data,index)=>{
                    return(
                        <TableRow>
                            <TableCell>{data.SNO}</TableCell>
                            <TableCell>{data.Name}</TableCell>
                            <TableCell>{data.Email}</TableCell>
                            <TableCell>{data.Phone}</TableCell>
                            <TableCell>{data.Salary}</TableCell>
                            <TableCell>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  startIcon={<EditIcon />}
                                >
                                  
                                </Button>
                            </TableCell>

                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    </TableContainer>
       )
    }
}


export default EmployeeDetailsTable