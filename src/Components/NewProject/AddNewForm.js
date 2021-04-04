import React from "react"
import Container from '@material-ui/core/Container'
import { Paper, Typography, Box, TextField, Grid, Button, ButtonGroup } from "@material-ui/core"

const styles = {
    btnStyles:{
        margin:"0 10px",
        padding:"5px 25px"
    },
    saveBtn:{
        backgroundColor:"#4E9EC6"
    },
    resetBtn:{
        backgroundColor:"#EB7E7C",
        color:"white"
    }
}

class AddNewForm extends React.Component{
    render(){
        const {btnStyles, saveBtn, resetBtn} = styles;
        return(
            <Container maxWidth="sm">
              <Box component={Paper} mt={2} p={2}>
                <Typography variant="h4" color="initial" align="center">Add New Employee</Typography>
                <Grid Container spacing={2}>
                    <Grid item>
                        <Box py={2}>
                        <TextField
                          id="Name"
                          label="Name"
                          variant="outlined"
                          fullWidth={true}
                          className="custom-inputs"
                          color="secondary"
                        />
                        </Box>
                        <Box py={2}>
                        <TextField
                          id="Name"
                          label="Name"
                          variant="outlined"
                          fullWidth={true}
                        />
                        </Box>
                        <Box py={2}>
                        <TextField
                          id="Name"
                          label="Name"
                          variant="outlined"
                          fullWidth={true}
                        />
                        </Box>
                        <Box py={2}>
                        <TextField
                          id="Name"
                          label="Name"
                          variant="outlined"
                          fullWidth={true}
                        />
                        </Box>
                        <Box py={2} align="center">
                              <Button color="primary" variant="contained" style={{...btnStyles, ...saveBtn}}>Save</Button>
                              <Button color="default" variant="contained" style={{...btnStyles, ...resetBtn}}>Reset</Button>
                        </Box>
                    </Grid>
              </Grid>
              </Box>
              
            </Container>            
        )
    }
}

export default AddNewForm