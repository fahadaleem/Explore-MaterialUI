import React from "react";
import TopAppBar from "./TopAppBar"
import EmployeeData from "./EmployeData"
import AddNewForm from "./AddNewForm"


class Admin extends React.Component {


    constructor(props)
    {
        super(props)
        this.state = {
            isOpenAddNewForm:false
        }
    }

    handleOpenAddNewForm = (e)=>{
        this.setState({
            isOpenAddNewForm:true
        })
    }

  render() {
      const {handleLogOut, employeeData} = this.props

    return (
     <div>
     <TopAppBar handleLogOut={handleLogOut}/>
     {
         this.state.isOpenAddNewForm?<AddNewForm />:<EmployeeData employeeData={employeeData} handleOpenAddNewForm={this.handleOpenAddNewForm}/>
     }
     </div>
    );
  }
}

export default Admin;
