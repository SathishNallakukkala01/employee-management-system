import React, { useEffect, useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import { getEmployee } from '../services/EmployeeService'

const ViewEmployeeComponent = () => {

    const {id} = useParams()
    const[employee,setEmployee] = useState({})
    const navigator = useNavigate()

    useEffect(()=>{
        getEmployee(id)
            .then(res=>setEmployee(res.data))
            .catch(e=>console.error(e))
    },[id])

    function handleBack(){
        navigator('/employees')
    }

  return (
    <div className='mt-5 p-3 my-3 view-employee'>
      <h2 className='text-center'>View Employee Details</h2>
      <div className='card'>
        <div className='card-body employee-details'>
          <p><strong>Employee ID:</strong> {employee.id}</p>
          <p><strong>Employee Name:</strong> {employee.name}</p>
          <p><strong>Employee Email Id:</strong> {employee.email}</p>
        </div>
      </div>
      <div className='text-center mt-3'>
        <button className='btn btn-secondary' onClick={handleBack}>Back</button>
      </div>
    </div>
  )
}

export default ViewEmployeeComponent