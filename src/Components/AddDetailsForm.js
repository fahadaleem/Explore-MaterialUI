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


    render(){
        return(
           <form>
               <Box py={1}>
               <TextField
               id="name"
               label="Name Of Employee"
               fullWidth={true}
               color="secondary"
               type="text"
               onChange={this.handleSetName}
             />
               </Box>
               <Box py={1}>
               <TextField
               id="email"
               label="Email"
               fullWidth={true}
               color="secondary"
               type="email"
             />
               </Box>
               <Box py={1}>
               <TextField
               id="phone"
               label="Phone No."
               fullWidth={true}
               color="secondary"
             />
               </Box>
               <Box py={1}>
               <TextField
               id="salary"
               label="Salary"
               fullWidth={true}
               color="secondary"
               type="number"
             />
               </Box>
               <Box my={2}>
                    <Button variant="contained" color="secondary">
                        Add Details
                    </Button> 
               </Box>
           </form>
        )
    }

}



export default AddDetailsForm