import React, { useEffect, useState } from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService'
import { useNavigate,useParams } from 'react-router-dom'

const ListEmployeeComponent = () => {
    
    const[employees,setEmployees]=useState([])

    const navigator=useNavigate()

    useEffect(()=>{
        getAllEmployees()
    },[])

    function getAllEmployees(){
        listEmployees()
        .then((response)=>setEmployees(response.data))
        .catch((e)=>console.error(e))
    }

    function addNewEmployee(){
        navigator('/add-employee')
    }

    function updateEmployee(id){
        navigator(`/edit-employee/${id}`)
    }

    function removeEmployee(id){
        deleteEmployee(id)
            .then((res)=>{
                getAllEmployees()
            })
            .catch(e=>console.error(e))
    }

    function viewEmployee(id){
        navigator(`/view-employee/${id}`)
    }

  return (
    <div className='container mt-3 pt-4'>
        <br />
        <h2 className='text-center'>List of Employees</h2>
        <div style={{width:'80%',margin: '0 auto'}}>
            <button className='btn btn-primary mb-3' onClick={addNewEmployee}>Add Employee</button>
            <table className="table table-bordered table-striped text-center">
            <thead>
                <tr>
                    <th style={{ width: '15%' }}>Employee Id</th>
                    <th style={{ width: '25%' }}>Employee Name</th>
                    <th style={{ width: '25%' }}>Employee Email Id</th>
                    <th style={{ width: '25%' }}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map((employee)=>(
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button className="btn btn-info" onClick={() => viewEmployee(employee.id)}>View</button>
                                <button className='btn btn-primary' onClick={()=>updateEmployee(employee.id)} style={{marginLeft:'10px'}}>Update</button>
                                <button className='btn btn-danger' onClick={()=>removeEmployee(employee.id)}
                                    style={{marginLeft:'10px'}}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
            </table>
        </div>
    </div>
  )
}

export default ListEmployeeComponent