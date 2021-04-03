import React from "react"
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormLabel from '@material-ui/core/FormLabel'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'



class AddDetailsForm extends React.Component{


    constructor(props){
        super(props)
        this.state = {
            name:"",
            email:"",
            phone:"",
            salary:0
        }
    }

    handleSetName=(e)=>{
        this.setState({
            name:e.target.value
        })
    }

    handleSetEmail=(e)=>{
      this.setState({
        email:e.target.value
      })
    }
    handleSetPhone=(e)=>{
      this.setState({
        phone:e.target.value
      })
    }
    handleSetSalary=(e)=>{
      this.setState({
        salary:e.target.value
      })
    }

    handleAddData = (e)=>{
      e.preventDefault();
      const {handleSetEmployeeDetails, handleGenerateId} = this.props;


      const data = {
        SNO:handleGenerateId(),
        Name:this.state.name,
        Email:this.state.email,
        Phone:this.state.phone,
        Salary:this.state.salary
      }

      console.log("data",data)

      handleSetEmployeeDetails(data);


      this.setState({
        name:"",
        email:"",
        phone:"",
        salary:0
      })

    }

    render(){

        return(
           <form onSubmit={this.handleAddData}>
               <Box py={1}>
               <TextField
               id="name"
               label="Name Of Employee"
               fullWidth={true}
               color="secondary"
               type="text"
               onChange={this.handleSetName}
               value={this.state.name}
             />
               </Box>
               <Box py={1}>
               <TextField
               id="email"
               label="Email"
               fullWidth={true}
               color="secondary"
               type="email"
               onChange={this.handleSetEmail}
               value={this.state.email}
             />
               </Box>
               <Box py={1}>
               <TextField
               id="phone"
               label="Phone No."
               fullWidth={true}
               color="secondary"
               onChange={this.handleSetPhone}
                value={this.state.phone}
             />
               </Box>
               <Box py={1}>
               <TextField
               id="salary"
               label="Salary"
               fullWidth={true}
               color="secondary"
               type="number"
               onChange={this.handleSetSalary}
               value={this.state.salary}
             />
               </Box>
               <Box my={2}>
                    <Button variant="contained" color="secondary" type="submit" >
                        Add Details
                    </Button> 
               </Box>
           </form>
        )
    }

}



export default AddDetailsForm