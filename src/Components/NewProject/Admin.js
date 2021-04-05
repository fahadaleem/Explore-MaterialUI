import React from "react";
import TopAppBar from "./TopAppBar"
import EmployeeData from "./EmployeData"
import AddNewForm from "./AddNewForm"


class Admin extends React.Component {


    constructor(props)
    {
        super(props)
        this.state = {
            isOpenAddNewForm:false,
            isEdit:false
        }
    }

    handleToggleAddNewForm = (e)=>{
        this.setState({
            isOpenAddNewForm:!this.state.isOpenAddNewForm
        })

        const {removedEditTextFieldsData} = this.props;
        removedEditTextFieldsData();
    }

  
   

  render() {
      const {handleLogOut, employeeData, handleSetData, handleDeleteEmployee, EditEmployeFormFields, handleEditData, handleSubmitEditData, isEdit } = this.props

    return (
     <div>
     <TopAppBar handleLogOut={handleLogOut}/>
     {
         this.state.isOpenAddNewForm?<AddNewForm handleSetData = {handleSetData} EditEmployeFormFields={EditEmployeFormFields} isEdit = {isEdit} handleSubmitEditData={handleSubmitEditData} handleHideForm = {this.handleToggleAddNewForm} />:<EmployeeData employeeData={employeeData} handleOpenAddNewForm={this.handleToggleAddNewForm} handleEditData={handleEditData} handleDeleteEmployee = {handleDeleteEmployee}/>
     }
     </div>
    );
  }
}

export default Admin;
